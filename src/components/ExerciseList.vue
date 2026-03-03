<script setup>
import { computed } from 'vue'
import { useSessionStore } from '../stores/session'
import { exercisesData } from '../data/exercises'

const session = useSessionStore()

const categories = [
	{ id: 'eyes', label: 'Гимнастика для глаз' },
	{ id: 'neck', label: 'Гимнастика шеи' },
	{ id: 'bonus', label: 'Бонусные упражнения' },
]

const getExercises = categoryId => {
	return exercisesData[categoryId] || []
}

const isCompleted = id => {
	return session.completedExercises.includes(id)
}

const isActive = id => {
	return session.active && session.currentExercise?.id === id
}
</script>

<template>
	<div class="exercise-list">
		<div
			v-for="cat in categories"
			:key="cat.id"
			class="category"
		>
			<h3 class="category-title">{{ cat.label }}</h3>
			<div
				v-for="ex in getExercises(cat.id)"
				:key="ex.id"
				class="exercise-item"
				:class="{
					'is-active': isActive(ex.id),
					'is-completed': isCompleted(ex.id),
				}"
				:title="ex.description"
			>
				<div class="checkbox-wrapper">
					<svg
						v-if="isCompleted(ex.id)"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						class="check-icon"
					>
						<path
							d="M20 6L9 17L4 12"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<div class="ex-info">
					<span class="ex-title">{{ ex.title }}</span>
				</div>
				<div
					class="tooltip"
					v-if="isActive(ex.id) || true"
				>
					{{ ex.description }}
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.exercise-list {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;
}

.category-title {
	font-size: 1.1rem;
	font-weight: 600;
	margin-bottom: 0.75rem;
	color: #fff;
	opacity: 0.9;
}

.category {
	background: rgba(255, 255, 255, 0.03);
	border-radius: 12px;
	padding: 1.25rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
}

.exercise-item {
	position: relative;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.75rem;
	border-radius: 8px;
	margin-bottom: 0.5rem;
	transition: all 0.3s ease;
	cursor: help;
}

.exercise-item:last-child {
	margin-bottom: 0;
}

.exercise-item:hover {
	background: rgba(255, 255, 255, 0.08);
}

.exercise-item:hover .tooltip {
	opacity: 1;
	visibility: visible;
	transform: translateY(0) translateX(-50%);
}

.is-active {
	background: rgba(79, 172, 254, 0.15);
	border: 1px solid rgba(79, 172, 254, 0.3);
}

.is-completed {
	opacity: 0.5;
}

.checkbox-wrapper {
	width: 20px;
	height: 20px;
	border-radius: 6px;
	border: 2px solid rgba(255, 255, 255, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #4facfe;
	transition: all 0.2s;
}

.is-active .checkbox-wrapper {
	border-color: #4facfe;
}

.is-completed .checkbox-wrapper {
	background: #a0a0a0;
	border-color: #a0a0a0;
	color: #1a1a1a;
}

.ex-title {
	font-size: 1rem;
	color: rgba(255, 255, 255, 0.9);
}

.tooltip {
	position: absolute;
	top: -40px;
	left: 50%;
	transform: translateY(10px) translateX(-50%);
	background: rgba(0, 0, 0, 0.8);
	color: #fff;
	padding: 0.5rem 0.75rem;
	border-radius: 6px;
	font-size: 0.85rem;
	width: max-content;
	max-width: 250px;
	text-align: center;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	opacity: 0;
	visibility: hidden;
	transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	z-index: 10;
	pointer-events: none;
	backdrop-filter: blur(4px);
}
</style>

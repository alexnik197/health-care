<script setup lang="ts">
import { computed } from 'vue'
import type { Exercise } from '@/types/exercise'
import { useSettingsStore } from '@/stores/settings'
import ExerciseAnimation from '@/components/ExerciseAnimation.vue'

const props = defineProps<{
	timeLeft: number
	totalTime: number
	exercise: Exercise
	isWaitingForNext: boolean
	isLastExercise: boolean
}>()

const emit = defineEmits<{
	skip: []
	next: []
	finish: []
}>()

const settings = useSettingsStore()

const progressPercentage = computed(
	() => ((props.totalTime - props.timeLeft) / props.totalTime) * 100,
)

const strokeDasharray = computed(() => {
	const radius = 45
	const circumference = 2 * Math.PI * radius
	const progress = (progressPercentage.value / 100) * circumference
	return `${progress} ${circumference}`
})
</script>

<template>
	<div class="timer-container">
		<div
			v-if="!isWaitingForNext"
			class="timer-circle"
		>
			<svg
				viewBox="0 0 100 100"
				class="progress-ring"
			>
				<circle
					class="progress-ring__background"
					cx="50"
					cy="50"
					r="45"
				/>
				<circle
					class="progress-ring__circle"
					cx="50"
					cy="50"
					r="45"
					:stroke-dasharray="strokeDasharray"
				/>
			</svg>
			<div class="time-display">{{ timeLeft }}</div>
		</div>

		<h2 class="exercise-title">{{ exercise.title }}</h2>
		<div class="animation-wrapper">
			<ExerciseAnimation :exerciseId="exercise.id" />
			<button
				v-if="!isWaitingForNext"
				class="skip-btn icon-only"
				:title="isLastExercise ? 'Завершить' : 'Пропустить'"
				@click="isLastExercise ? emit('finish') : emit('skip')"
			>
				<svg
					v-if="isLastExercise"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					class="skip-icon"
				>
					<path
						d="M5 13l4 4L19 7"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<svg
					v-else
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					class="skip-icon"
				>
					<path
						d="M5 4L15 12L5 20V4Z"
						fill="currentColor"
					/>
					<path
						d="M19 4H17V20H19V4Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		</div>
		<p
			v-if="settings.showTechnique"
			class="exercise-technique"
		>
			{{ exercise.description }}
		</p>

		<button
			v-if="!isWaitingForNext"
			class="finish-btn"
			@click="emit('finish')"
		>
			<svg
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
			>
				<rect
					x="6"
					y="6"
					width="12"
					height="12"
					rx="2"
					fill="currentColor"
				/>
			</svg>
			Завершить
		</button>

		<button
			v-else
			class="next-btn"
			@click="emit('next')"
		>
			Следующее упражнение
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				class="skip-icon"
			>
				<path
					d="M5 4L15 12L5 20V4Z"
					fill="currentColor"
				/>
				<path
					d="M19 4H17V20H19V4Z"
					fill="currentColor"
				/>
			</svg>
		</button>
	</div>
</template>

<style scoped>
.timer-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin: 2rem 0;
	width: 100%;
}

.timer-circle {
	position: relative;
	width: 160px;
	height: 160px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.progress-ring {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform: rotate(-90deg);
}

.progress-ring__background {
	fill: transparent;
	stroke: rgba(255, 255, 255, 0.1);
	stroke-width: 6;
}

.progress-ring__circle {
	fill: transparent;
	stroke: #4facfe;
	stroke-width: 6;
	stroke-linecap: round;
	transition: stroke-dasharray 1s linear;
}

.time-display {
	font-size: 2.5rem;
	font-weight: 700;
	color: #fff;
	z-index: 1;
}

.animation-wrapper {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.skip-btn {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.1);
	color: #fff;
	padding: 0.75rem 1.5rem;
	border-radius: 999px;
	font-size: 1rem;
	cursor: pointer;
	transition: all 0.2s ease;
	backdrop-filter: blur(8px);
}

.skip-btn:hover {
	background: rgba(255, 255, 255, 0.2);
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.skip-btn:active {
	transform: translateY(0);
}

.skip-btn.icon-only {
	position: absolute;
	right: 1.5rem;
	width: 48px;
	height: 48px;
	padding: 0;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.exercise-title {
	font-size: 1.5rem;
	font-weight: 600;
	color: #fff;
	margin: 0;
	text-align: center;
}

.exercise-technique {
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.7);
	text-align: center;
	margin: 0;
	max-width: 400px;
	line-height: 1.4;
}

.finish-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	background: rgba(255, 69, 58, 0.1);
	border: 1px solid rgba(255, 69, 58, 0.2);
	color: #ff453a;
	padding: 0.75rem 2rem;
	border-radius: 999px;
	font-size: 1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
	backdrop-filter: blur(8px);
}

.finish-btn:hover {
	background: rgba(255, 69, 58, 0.2);
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(255, 69, 58, 0.2);
}

.finish-btn:active {
	transform: translateY(0);
}

.next-btn {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
	color: #fff;
	border: none;
	padding: 1rem 2rem;
	border-radius: 999px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
	margin-top: 1rem;
}

.next-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
}

.next-btn:active {
	transform: translateY(0);
}
</style>

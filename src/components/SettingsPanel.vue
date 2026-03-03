<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings'
import { exercisesData } from '@/data/exercises'
import type { ExerciseCategory } from '@/types/exercise'

const settings = useSettingsStore()

const categories: ExerciseCategory[] = [
	{ id: 'eyes', label: 'Гимнастика для глаз' },
	{ id: 'neck', label: 'Гимнастика шеи' },
	{ id: 'additional', label: 'Дополнительные упражнения' },
]

const updateDuration = (id: string, event: Event): void => {
	const val = parseInt((event.target as HTMLInputElement).value)
	if (!isNaN(val) && val > 0) {
		settings.setDuration(id, val)
	}
}

const updateInterval = (event: Event): void => {
	const val = parseInt((event.target as HTMLInputElement).value)
	if (!isNaN(val) && val >= 1) {
		settings.setNotificationInterval(val)
	}
}

const toggleAutostart = async (event: Event): Promise<void> => {
	await settings.setAutoStart((event.target as HTMLInputElement).checked)
}
</script>

<template>
	<div class="settings-panel">
		<h2>Настройки</h2>

		<div class="settings-group">
			<div class="setting-item">
				<label>Интервал уведомлений (минуты)</label>
				<input
					type="number"
					:value="settings.notificationInterval"
					@change="updateInterval"
					min="1"
					class="num-input"
				/>
			</div>

			<div class="setting-item checkbox-item">
				<label>
					<input
						type="checkbox"
						:checked="settings.autoStart"
						@change="toggleAutostart"
					/>
					Запускать вместе с системой
				</label>
			</div>
		</div>

		<h3>Время на упражнения (сек)</h3>
		<div
			class="settings-group"
			v-for="cat in categories"
			:key="cat.id"
		>
			<div class="cat-label">{{ cat.label }}</div>
			<div
				v-for="ex in exercisesData[cat.id]"
				:key="ex.id"
				class="setting-item"
			>
				<label>{{ ex.title }}</label>
				<input
					type="number"
					:value="settings.getDuration(ex.id)"
					@change="updateDuration(ex.id, $event)"
					min="5"
					max="300"
					class="num-input"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.settings-panel {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	width: 100%;
}

h2 {
	font-size: 1.5rem;
	margin: 0;
}

h3 {
	font-size: 1.2rem;
	margin: 0;
	margin-top: 1rem;
	color: #4facfe;
}

.cat-label {
	font-weight: 600;
	margin-bottom: 0.75rem;
	opacity: 0.8;
	font-size: 0.9rem;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.settings-group {
	background: rgba(255, 255, 255, 0.03);
	border-radius: 12px;
	padding: 1.25rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
}

.setting-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
}

.setting-item:last-child {
	margin-bottom: 0;
}

.checkbox-item label {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
}

.num-input {
	background: rgba(0, 0, 0, 0.2);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	color: white;
	padding: 0.5rem;
	width: 70px;
	text-align: center;
	font-size: 1rem;
	transition: all 0.2s;
}

.num-input:focus {
	outline: none;
	border-color: #4facfe;
	box-shadow: 0 0 0 2px rgba(79, 172, 254, 0.2);
}
</style>

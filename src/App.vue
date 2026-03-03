<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useSettingsStore } from '@/stores/settings'
import { useSessionStore } from '@/stores/session'
import { useIntervalTimer } from '@/composables/useIntervalTimer'
import Timer from '@/components/Timer.vue'
import ExerciseList from '@/components/ExerciseList.vue'
import SettingsPanel from '@/components/SettingsPanel.vue'

import '@/types/electron'

const settings = useSettingsStore()
const session = useSessionStore()

const currentTab = ref<'session' | 'settings'>('session')

const { start: startNotificationTimer } = useIntervalTimer(
	() => settings.notificationInterval * 60 * 1000,
	() => {
		if (!session.active) {
			window.electronAPI?.showNotification({
				title: 'Время размяться!',
				body: 'Пора сделать перерыв и выполнить гимнастику для глаз и шеи.',
			})
		}
	},
)

onMounted(async () => {
	await settings.loadSettings()
	startNotificationTimer()
})

watch(
	() => settings.notificationInterval,
	() => startNotificationTimer(),
)
</script>

<template>
	<div class="app-container">
		<header class="header">
			<div class="header-content">
				<h1>Health Care</h1>
				<div class="tabs">
					<button
						:class="{ active: currentTab === 'session' }"
						@click="currentTab = 'session'"
					>
						Гимнастика
					</button>
					<button
						:class="{ active: currentTab === 'settings' }"
						@click="currentTab = 'settings'"
					>
						Настройки
					</button>
				</div>
			</div>
		</header>

		<main class="main-content">
			<div
				v-if="currentTab === 'session'"
				class="session-view"
			>
				<div
					v-if="!session.active"
					class="start-screen"
				>
					<button
						class="start-btn"
						@click="session.startSession()"
					>
						Начать гимнастику
					</button>
				</div>

				<div
					v-else
					class="active-session"
				>
					<Timer
						v-if="session.currentExercise"
						:timeLeft="session.timeLeft"
						:totalTime="settings.getDuration(session.currentExercise.id)"
						:exercise="session.currentExercise"
						:isWaitingForNext="session.isWaitingForNext"
						:isLastExercise="session.isLastExercise"
						@skip="session.skipCurrent()"
						@next="session.nextExercise()"
						@finish="session.finishSession()"
					/>
				</div>

				<ExerciseList />
			</div>

			<div
				v-else-if="currentTab === 'settings'"
				class="settings-view"
			>
				<SettingsPanel />
			</div>
		</main>
	</div>
</template>

<style>
:root {
	--bg-color: #0d1117;
	--text-color: #e6edf3;
	--accent-color: #4facfe;
	--accent-hover: #00f2fe;
}

body {
	margin: 0;
	font-family:
		'Inter',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		sans-serif;
	background-color: var(--bg-color);
	color: var(--text-color);
	overflow-x: hidden;
	user-select: none;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
	width: 8px;
}
::-webkit-scrollbar-track {
	background: rgba(255, 255, 255, 0.05);
}
::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.2);
	border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.3);
}

.app-container {
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.header {
	position: sticky;
	top: 0;
	background: rgba(13, 17, 23, 0.8);
	backdrop-filter: blur(12px);
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	z-index: 100;
	padding: 1rem 1.5rem;
}

.header-content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 600px;
	margin: 0 auto;
	width: 100%;
}

h1 {
	font-size: 1.25rem;
	margin: 0;
	background: linear-gradient(
		to right,
		var(--accent-color),
		var(--accent-hover)
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.tabs {
	display: flex;
	gap: 0.5rem;
	background: rgba(255, 255, 255, 0.05);
	padding: 0.25rem;
	border-radius: 8px;
}

.tabs button {
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.6);
	padding: 0.5rem 1rem;
	border-radius: 6px;
	cursor: pointer;
	font-size: 0.9rem;
	font-weight: 500;
	transition: all 0.2s;
}

.tabs button:hover {
	color: var(--text-color);
}

.tabs button.active {
	background: rgba(255, 255, 255, 0.1);
	color: var(--text-color);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.main-content {
	flex: 1;
	padding: 0 1.5rem 1.5rem 1.5rem;
	max-width: 600px;
	margin: 0 auto;
	width: 100%;
	box-sizing: border-box;
}

.session-view,
.settings-view {
	display: flex;
	flex-direction: column;
	animation: fadeIn 0.3s ease;
}

.start-screen {
	display: flex;
	justify-content: center;
	padding: 2rem 0;
}

.start-btn {
	background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
	color: #fff;
	border: none;
	padding: 1rem 3rem;
	border-radius: 999px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
}

.start-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
}

.start-btn:active {
	transform: translateY(0);
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>

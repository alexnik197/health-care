import { defineStore } from 'pinia'
import type { PersistedSettings } from '@/types/settings'
import { exercisesData } from '@/data/exercises'

import '@/types/electron'

export const useSettingsStore = defineStore('settings', {
  state: (): PersistedSettings => ({
    notificationInterval: 60,
    exerciseDurations: {},
    autoStart: false,
    showTechnique: true,
    autoNextExercise: false,
  }),

  actions: {
    getDuration(exerciseId: string): number {
      if (this.exerciseDurations[exerciseId] !== undefined) {
        return this.exerciseDurations[exerciseId]
      }

      for (const exercises of Object.values(exercisesData)) {
        const found = exercises.find((e) => e.id === exerciseId)
        if (found) return found.defaultDuration
      }

      return 20
    },

    setDuration(exerciseId: string, duration: number): void {
      this.exerciseDurations[exerciseId] = duration
      this.saveSettings()
    },

    setNotificationInterval(minutes: number): void {
      this.notificationInterval = minutes
      this.saveSettings()
    },

    async setAutoStart(val: boolean): Promise<void> {
      this.autoStart = val
      window.electronAPI?.setAutostart(val)
      this.saveSettings()
    },

    setShowTechnique(val: boolean): void {
      this.showTechnique = val
      this.saveSettings()
    },

    setAutoNextExercise(val: boolean): void {
      this.autoNextExercise = val
      this.saveSettings()
    },

    saveSettings(): void {
      const data: PersistedSettings = {
        notificationInterval: this.notificationInterval,
        exerciseDurations: this.exerciseDurations,
        autoStart: this.autoStart,
        showTechnique: this.showTechnique,
        autoNextExercise: this.autoNextExercise,
      }
      localStorage.setItem('health-settings', JSON.stringify(data))
    },

    async loadSettings(): Promise<void> {
      const raw = localStorage.getItem('health-settings')

      if (raw) {
        const parsed = JSON.parse(raw) as Partial<PersistedSettings>
        this.notificationInterval = parsed.notificationInterval ?? 60
        this.exerciseDurations = parsed.exerciseDurations ?? {}
        this.autoStart = parsed.autoStart ?? false
        this.showTechnique = parsed.showTechnique ?? true
        this.autoNextExercise = parsed.autoNextExercise ?? false
      }

      if (window.electronAPI) {
        const systemAutoStart = await window.electronAPI.getAutostart()
        if (systemAutoStart !== this.autoStart) {
          window.electronAPI.setAutostart(this.autoStart)
        }
      }
    },
  },
})

import { defineStore } from 'pinia'
import { exercisesData } from '../data/exercises'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    // Notification interval in minutes
    notificationInterval: 60,
    // Autostart setting
    autoStart: false,
    // Custom durations for each exercise id
    exerciseDurations: {} 
  }),
  actions: {
    getDuration(exerciseId) {
      if (this.exerciseDurations[exerciseId] !== undefined) {
        return this.exerciseDurations[exerciseId]
      }
      // Find default
      for (const category of Object.values(exercisesData)) {
        const found = category.find(e => e.id === exerciseId)
        if (found) return found.defaultDuration
      }
      return 20
    },
    setDuration(exerciseId, duration) {
      this.exerciseDurations[exerciseId] = duration
      this.saveSettings()
    },
    setNotificationInterval(minutes) {
      this.notificationInterval = minutes
      this.saveSettings()
    },
    async setAutoStart(val) {
      this.autoStart = val
      if (window.electronAPI) {
        window.electronAPI.setAutostart(val)
      }
      this.saveSettings()
    },
    saveSettings() {
      localStorage.setItem('health-settings', JSON.stringify({
        notificationInterval: this.notificationInterval,
        exerciseDurations: this.exerciseDurations,
        autoStart: this.autoStart
      }))
    },
    async loadSettings() {
      const saved = localStorage.getItem('health-settings')
      if (saved) {
        const parsed = JSON.parse(saved)
        this.notificationInterval = parsed.notificationInterval || 60
        this.exerciseDurations = parsed.exerciseDurations || {}
        this.autoStart = parsed.autoStart || false
      }
      if (window.electronAPI) {
        const systemAuto = await window.electronAPI.getAutostart()
        if (systemAuto !== this.autoStart) {
          window.electronAPI.setAutostart(this.autoStart)
        }
      }
    }
  }
})

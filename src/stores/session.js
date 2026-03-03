import { defineStore } from 'pinia'
import { useSettingsStore } from './settings'
import { exercisesData } from '../data/exercises'

export const useSessionStore = defineStore('session', {
  state: () => ({
    active: false,
    currentExerciseIndex: 0,
    currentCategoryIndex: 0,
    categories: ['eyes', 'neck', 'bonus'],
    timeLeft: 0,
    timerInterval: null,
    completedExercises: [] // array of exercise IDs
  }),
  getters: {
    currentCategory(state) {
      return state.categories[state.currentCategoryIndex]
    },
    currentExercise(state) {
      if (!this.currentCategory) return null
      return exercisesData[this.currentCategory][state.currentExerciseIndex]
    },
    isSessionFinished(state) {
      return state.currentCategoryIndex >= state.categories.length
    }
  },
  actions: {
    startSession() {
      this.active = true
      this.currentCategoryIndex = 0
      this.currentExerciseIndex = 0
      this.completedExercises = []
      this.startTimerForCurrent()
      if (window.electronAPI) {
        window.electronAPI.showWindow()
      }
    },
    startTimerForCurrent() {
      this.clearTimer()
      const exercise = this.currentExercise
      if (!exercise) {
        this.finishSession()
        return
      }
      const settings = useSettingsStore()
      this.timeLeft = settings.getDuration(exercise.id)
      
      this.timerInterval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--
        } else {
          this.completeCurrent()
        }
      }, 1000)
    },
    clearTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval)
        this.timerInterval = null
      }
    },
    completeCurrent() {
      if (this.currentExercise) {
        this.completedExercises.push(this.currentExercise.id)
      }
      this.nextExercise()
    },
    skipCurrent() {
      this.nextExercise()
    },
    nextExercise() {
      const categoryExercises = exercisesData[this.currentCategory]
      if (this.currentExerciseIndex < categoryExercises.length - 1) {
        this.currentExerciseIndex++
        this.startTimerForCurrent()
      } else {
        this.currentCategoryIndex++
        this.currentExerciseIndex = 0
        if (this.isSessionFinished) {
          this.finishSession()
        } else {
          this.startTimerForCurrent()
        }
      }
    },
    finishSession() {
      this.active = false
      this.clearTimer()
      if (window.electronAPI) {
        window.electronAPI.showNotification({
          title: 'Гимнастика завершена!',
          body: 'Отличная работа! Вы можете закрыть окно.'
        })
      }
    }
  }
})

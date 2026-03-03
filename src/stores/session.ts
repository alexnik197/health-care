import { defineStore } from 'pinia'
import type { ExerciseCategoryKey } from '@/types/exercise'
import { exercisesData } from '@/data/exercises'
import { useSettingsStore } from '@/stores/settings'

import '@/types/electron'

export const useSessionStore = defineStore('session', {
  state: () => ({
    active: false,
    currentExerciseIndex: 0,
    currentCategoryIndex: 0,
    categories: ['eyes', 'neck', 'additional'] as ExerciseCategoryKey[],
    timeLeft: 0,
    timerInterval: null as ReturnType<typeof setInterval> | null,
    completedExercises: [] as string[],
    isWaitingForNext: false,
  }),

  getters: {
    currentCategory(state): ExerciseCategoryKey {
      return state.categories[state.currentCategoryIndex]
    },

    currentExercise(state) {
      const category = state.categories[state.currentCategoryIndex]
      if (!category) return null
      return exercisesData[category][state.currentExerciseIndex] ?? null
    },

    isSessionFinished(state): boolean {
      return state.currentCategoryIndex >= state.categories.length
    },
  },

  actions: {
    startSession(): void {
      this.active = true
      this.currentCategoryIndex = 0
      this.currentExerciseIndex = 0
      this.completedExercises = []
      this.isWaitingForNext = false
      this.startTimerForCurrent()
      window.electronAPI?.showWindow()
    },

    startTimerForCurrent(): void {
      this.clearTimer()
      this.isWaitingForNext = false

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

    clearTimer(): void {
      if (this.timerInterval !== null) {
        clearInterval(this.timerInterval)
        this.timerInterval = null
      }
    },

    completeCurrent(): void {
      if (this.currentExercise) {
        this.completedExercises.push(this.currentExercise.id)
      }
      this.clearTimer()

      const settings = useSettingsStore()
      if (settings.autoNextExercise) {
        this.nextExercise()
      } else {
        this.isWaitingForNext = true
      }
    },

    skipCurrent(): void {
      this.nextExercise()
    },

    nextExercise(): void {
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

    finishSession(): void {
      this.active = false
      this.clearTimer()
      window.electronAPI?.showNotification({
        title: 'Гимнастика завершена!',
        body: 'Отличная работа! Можете продолжать работу',
      })
    },
  },
})

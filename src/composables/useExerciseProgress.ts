import { computed } from 'vue'
import { useSessionStore } from '@/stores/session'

/**
 * Предоставляет геттеры для отображения состояния упражнений
 * (активное / выполненное) относительно текущей сессии.
 */
export function useExerciseProgress() {
  const session = useSessionStore()

  const completedIds = computed(() => new Set(session.completedExercises))

  const isCompleted = (id: string): boolean => completedIds.value.has(id)

  const isActive = (id: string): boolean =>
    session.active && session.currentExercise?.id === id

  return { isCompleted, isActive }
}

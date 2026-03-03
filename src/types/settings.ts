export interface PersistedSettings {
  notificationInterval: number
  exerciseDurations: Record<string, number>
  autoStart: boolean
  showTechnique: boolean
  autoNextExercise: boolean
}

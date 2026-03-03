export interface Exercise {
  id: string
  title: string
  description: string
  defaultDuration: number
}

export type ExerciseCategoryKey = 'eyes' | 'neck' | 'additional'

export type ExerciseCategoryMap = Record<ExerciseCategoryKey, Exercise[]>

export interface ExerciseCategory {
  id: ExerciseCategoryKey
  label: string
}

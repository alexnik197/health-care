import type { ExerciseCategoryMap } from '@/types/exercise'

export const exercisesData: ExerciseCategoryMap = {
  eyes: [
    {
      id: 'eye-far-near',
      title: 'Далеко-близко',
      description: 'Сфокусируйтесь на дальнем объекте, затем на ближнем. Чередуйте каждые 3-5 секунд',
      defaultDuration: 20,
    },
    {
      id: 'eye-circles',
      title: 'Круги',
      description: 'Плавно вращайте глазами по кругу, не двигая головой',
      defaultDuration: 20,
    },
    {
      id: 'eye-blink',
      title: 'Моргание',
      description: 'Быстро и легко поморгайте без напряжения',
      defaultDuration: 15,
    },
    {
      id: 'eye-squeeze',
      title: 'Зажмуривание',
      description: 'Крепко зажмурьтесь на 3 секунды, затем широко откройте глаза',
      defaultDuration: 25,
    },
  ],
  neck: [
    {
      id: 'neck-retraction',
      title: 'Ретракция',
      description: 'Подайте подбородок назад, вытягивая макушку вверх на 3 секунды. Голову не запрокидывайте. Вернитесь в исходное положение',
      defaultDuration: 20,
    },
    {
      id: 'neck-tilt',
      title: 'Наклоны с дотяжкой',
      description: 'Мягко наклоните голову к плечу, помогая рукой растянуть шею',
      defaultDuration: 25,
    },
    {
      id: 'neck-turn',
      title: 'Взгляд в карман',
      description: 'Поверните голову в сторону и опустите взгляд вниз, словно смотрите на плечо',
      defaultDuration: 25,
    },
  ],
  additional: [
    {
      id: 'shoulder-roll',
      title: 'Вращение плечами',
      description: 'Сделайте глубокие круговые вращения плечами назад, раскрывая грудную клетку',
      defaultDuration: 20,
    },
  ],
}

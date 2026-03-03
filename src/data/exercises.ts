import type { ExerciseCategoryMap } from '@/types/exercise'

export const exercisesData: ExerciseCategoryMap = {
  eyes: [
    {
      id: 'eye-far-near',
      title: 'Далеко-близко',
      description: 'Фокусировка на дальнем объекте и на ближнем. Переводите взгляд каждые несколько секунд.',
      defaultDuration: 20,
    },
    {
      id: 'eye-circles',
      title: 'Круги',
      description: 'Медленно веди взгляд по кругу, голова неподвижна.',
      defaultDuration: 20,
    },
    {
      id: 'eye-blink',
      title: 'Моргание',
      description: 'Часто-часто моргай.',
      defaultDuration: 15,
    },
    {
      id: 'eye-squeeze',
      title: 'Зажмуривание',
      description: 'Сильно зажмурь глаза на 3 секунды, широко открой на 3 секунды.',
      defaultDuration: 25,
    },
  ],
  neck: [
    {
      id: 'neck-retraction',
      title: 'Ретракция',
      description: 'Втяните подбородок назад, макушкой тянитесь вверх, не запрокидывая голову.',
      defaultDuration: 20,
    },
    {
      id: 'neck-tilt',
      title: 'Наклоны с дотяжкой',
      description: 'Наклоните голову к плечу и мягко потяните рукой противоположную сторону шеи.',
      defaultDuration: 25,
    },
    {
      id: 'neck-turn',
      title: 'Взгляд в карман',
      description: 'Поверните голову в сторону и опустите взгляд вниз (словно смотрите в нагрудный карман).',
      defaultDuration: 25,
    },
  ],
  additional: [
    {
      id: 'shoulder-roll',
      title: 'Вращение плечами',
      description:
        'Широкие круговые движения плечами назад. Это раскроет грудную клетку, которая сжимается от клавиатуры.',
      defaultDuration: 20,
    },
  ],
}

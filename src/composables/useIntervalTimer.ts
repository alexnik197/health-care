import { onUnmounted } from 'vue'

/**
 * Запускает повторяющийся таймер с заданным интервалом.
 * Автоматически очищается при размонтировании компонента.
 *
 * @param intervalMs - интервал в миллисекундах
 * @param callback   - функция, вызываемая по истечении каждого интервала
 */
export function useIntervalTimer(intervalMs: () => number, callback: () => void) {
  let timer: ReturnType<typeof setInterval> | null = null

  const start = (): void => {
    stop()
    timer = setInterval(callback, intervalMs())
  }

  const stop = (): void => {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
    }
  }

  onUnmounted(stop)

  return { start, stop }
}

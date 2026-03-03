export interface NotificationPayload {
  title: string
  body: string
}

export interface ElectronAPI {
  showWindow(): void
  showNotification(payload: NotificationPayload): void
  setAutostart(val: boolean): void
  getAutostart(): Promise<boolean>
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI
  }
}

export {}

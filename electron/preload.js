const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setAutostart: (enable) => ipcRenderer.send('set-autostart', enable),
  getAutostart: () => ipcRenderer.invoke('get-autostart'),
  showNotification: (options) => ipcRenderer.send('show-notification', options),
  showWindow: () => ipcRenderer.send('show-window'),
  quitApp: () => ipcRenderer.send('quit-app')
})

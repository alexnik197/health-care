const { app, BrowserWindow, ipcMain, Tray, Menu, Notification, nativeImage, globalShortcut } = require('electron')
const path = require('path')

let mainWindow
let tray

const iconBase64 = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABEElEQVR42u3XwUrEMBAF0Jm+xG/wb/wbv8bNuii4C90oIlJwWdGNi9KkM5O20pXpTjsz04UHDwKZm3uSlNS01lrNsmzLsqwnSdLQNE2t/10Mw/Ahz/OXlEIfhE3T3KIoemOMtZRS1RhTdV13+1/wruveDcPwEULQ8zz/wA6u67qYpilN0xRFUcjzPN9wBoqikMfjITsQ+B/w2x2QZZksy6I4jokxxn3flxwIhBBiHMc8z/P5jYkxxoUQ1IFAHMdSNM3zPA/DIPM8Ew4Ekue5HEIghCAMw2AFIi2EiCzLJA4ESQiRsAKRFELEgSCJECJhBUIdCDAhgAkBTAhgQgATApgQwIQAToYAEwKYEMCEAOY0wISAbwC0+sE5ZgP13AAAAABJRU5ErkJggg=='
const nativeIcon = nativeImage.createFromBuffer(Buffer.from(iconBase64, 'base64'))

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    },
    autoHideMenuBar: true,
    show: false,
    icon: nativeIcon
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist', 'index.html'))
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('close', (e) => {
    if (!app.isQuitting) {
      e.preventDefault()
      mainWindow.hide()
    }
  })
}

const { globalShortcut } = require('electron')
app.whenReady().then(() => {
  createWindow()
  createTray()
  globalShortcut.register('F12', () => {
    mainWindow?.webContents.toggleDevTools()
  })
})

function createTray() {
  tray = new Tray(nativeIcon)
  tray.setToolTip('health-care')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Показать', click: () => mainWindow.show() },
    { label: 'Выход', click: () => {
        app.isQuitting = true
        app.quit()
      }
    }
  ])
  tray.setContextMenu(contextMenu)
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
}

app.whenReady().then(() => {
  createWindow()
  createTray()
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.on('set-autostart', (event, autoStart) => {
  app.setLoginItemSettings({
    openAtLogin: autoStart,
    path: app.getPath('exe')
  })
})

ipcMain.handle('get-autostart', () => {
  return app.getLoginItemSettings().openAtLogin
})

ipcMain.on('show-notification', (event, { title, body }) => {
  new Notification({
    title,
    body,
    icon: nativeIcon
  }).show()
})

ipcMain.on('show-window', () => {
  if (mainWindow) {
    mainWindow.show()
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  }
})

ipcMain.on('quit-app', () => {
  app.isQuitting = true
  app.quit()
})

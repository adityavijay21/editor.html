const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'Editor.html ~ Your Editing Companion',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  // Load the index.html from a url
  win.loadURL(
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  )
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
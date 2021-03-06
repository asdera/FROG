const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')


var $ = require('jquery');

require('electron-reload')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        'skip-taskbar': false,
        'icon': __dirname + './res/icon.png',
        'frame': false,
        'transparent': true
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
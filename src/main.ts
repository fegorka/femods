import {app, BrowserWindow, ipcMain} from 'electron'
// import { BrowserWindow } from 'electron-acrylic-window';
import path from 'node:path'

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
	win = new BrowserWindow({
		icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
		height: 404,
		width: 280,
		minHeight: 404,
		maxHeight: 404,
		minWidth: 280,
		maxWidth: 380,
		resizable: true,
		minimizable: false,
		maximizable: false,
		fullscreenable: false,
		fullscreen: false,
		alwaysOnTop: true,
		transparent: true,
		frame: false,
		roundedCorners: true,
		webPreferences: {
			preload: path.join(__dirname, './preload.js'),
		},
	})


	// Test active push message to Renderer-process.
	win.webContents.on('did-finish-load', () => {
		win?.webContents.send('main-process-message', (new Date).toLocaleString())
	})

	if (VITE_DEV_SERVER_URL) {
		win.loadURL(VITE_DEV_SERVER_URL)
	} else {
		// win.loadFile('dist/index.html')
		// win.loadFile(path.join(process.env.DIST, 'renderer', 'index.html'))
		win.loadFile(path.join(process.env.DIST, 'index.html'))
	}
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	closeApplication();
})

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

app.whenReady().then(createWindow)

function closeApplication() {
	app.quit()
	win = null
}

ipcMain.handle('getOsName', async () => process.platform);
ipcMain.handle('closeApplication', async () => closeApplication());

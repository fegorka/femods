import {app, BrowserWindow, ipcMain} from 'electron'
import {autoUpdater} from 'electron-updater';
import path from 'node:path'

autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;


process.env.DIST = path.join(__dirname, '../dist');
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public');

let win: BrowserWindow;
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

	win.webContents.on('did-finish-load', async () => {
		win?.webContents.send('main-process-message', (new Date).toLocaleString())
		await autoUpdater.checkForUpdatesAndNotify();
	})

	if (VITE_DEV_SERVER_URL) {
		win.loadURL(VITE_DEV_SERVER_URL)
	} else {
		// win.loadFile('dist/index.html')
		// win.loadFile(path.join(process.env.DIST, 'renderer', 'index.html'))
		win.loadFile(path.join(process.env.DIST, 'index.html'))
	}
}

app.on('window-all-closed', () => {
	closeApplication();
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
})

app.whenReady().then(createWindow);

function closeApplication() {
	app.quit();
//	win = null
}


ipcMain.handle('getOsName', async () => process.platform);
ipcMain.handle('closeApplication', async () => closeApplication());


ipcMain.handle('check-for-updates', async () => await autoUpdater.checkForUpdatesAndNotify());
ipcMain.handle('start-update-process', () => autoUpdater.downloadUpdate());

autoUpdater.on("update-available", ({releaseName}) => {
	win.webContents.send('open-update-available-modal');
	win.webContents.send('alert', `update-avilable ${releaseName}`);
});

autoUpdater.on("update-not-available", (info) => {
	win.webContents.send('alert', `update-not-avilable ${JSON.stringify(info)}`);
});

autoUpdater.on("download-progress", (progress) => {
	win.webContents.send('download-progress', Math.floor(progress.percent));
});

autoUpdater.on('update-downloaded', ({releaseName}) => {
	win.webContents.send('alert', `update downloaded ${releaseName}`);
	autoUpdater.quitAndInstall();
});

autoUpdater.on("error", async (error) => {
	win.webContents.send('alert', `error ${JSON.stringify(error)}`);
});


//	const dialogOptions: Electron.MessageBoxOptions = {
//		type: 'info',
//		buttons: ['Restart', 'Later'],
//		title: 'Application Update',
//		//	message: process.platform === 'win32' ? releaseNotes : releaseName,
//		message: 'aaa',
//		detail:
//			'A new version has been downloaded. Restart the application to apply the updates.'
//	}
//
//	dialog.showMessageBox(win, dialogOptions).then((returnValue) => {
//		if (returnValue.response === 0) update_application();
//	})
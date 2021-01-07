const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow } = electron;

let mainWindow;
let { ipcMain } = electron;
var newWindow = null;

//Listen for the app to be ready
app.on('ready', function() {
    //Create new window
    mainWindow = new BrowserWindow({
        width: 447,
        height: 622,
        minHeight: 511,
        minWidth: 435,
        maximizable: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },

    });
    mainWindow.setMenu(null);
    //Loading HTML file
    mainWindow.loadFile("mainWindow.html");
    // mainWindow.webContents.openDevTools();
    try {
        require('electron-reloader')(module)
    } catch (_) {}



});

ipcMain.on('newWindow', function(e, filenName) {

    if (newWindow) {
        newWindow.focus(); //focus to new window
        return;
    }

    newWindow = new BrowserWindow({
        width: 447,
        height: 622,
        minHeight: 511,
        minWidth: 435,
        maximizable: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },

    });
    newWindow.loadFile("profile.html");
    newWindow.once('ready-to-show', () => {
        newWindow.show()
    })

    newWindow.on('closed', function() {
        newWindow = null
    })
    newWindow.setMenu(null);

    mainWindow.close();
});
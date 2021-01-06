const electron = require('electron');
const url = require('url');
const path = require('path');
const { app, BrowserWindow } = electron;

let mainWindow;

//Listen for the app to be ready
app.on('ready', function() {
    //Create new window
    mainWindow = new BrowserWindow({
        width: 435,
        height: 600,
        minHeight: 511,
        minWidth: 435,
        maximizable: false,
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        }

    });
    mainWindow.setMenu(null);
    //Loading HTML file
    mainWindow.loadFile("mainWindow.html");
    mainWindow.webContents.openDevTools();
    try {
        require('electron-reloader')(module)
    } catch (_) {}



})
const { BrowserWindow } = require('electron')
class AppWindow extends BrowserWindow {
    constructor(config, fileLocation) {
        const basicConfig = {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            },
            show: false//hide default
        }

        const finalConfig = { ...basicConfig, ...config }
        super(finalConfig)
        this.loadFile(fileLocation)
        this.once('ready-to-show', () => {
            this.show()
        })
    }
}

module.exports = AppWindow
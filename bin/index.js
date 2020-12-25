#! node

const process = require('process')
const createOverkosApp = require('./create').createOverkosApp
const program = require('commander')

function createApp() {
    program
        .command('create [appName]')
        .alias('cr')
        .description('create overkos app')
        .option('-n, --appName [appName]', 'app name')
        .action((appName) => {
            createOverkosApp(appName)
        })
}

createApp()
program.parse(process.argv)


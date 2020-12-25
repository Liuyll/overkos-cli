#! node
const fs = require('fs')
const path = require('path')

function createOverkosApp(appName) {
    const dirPath = `./${appName}`,
        srcPath = `${dirPath}/src`,
        controllerPath = `${srcPath}/controller`,
        servicePath = `${srcPath}/service`,
        initControllerPath = `${controllerPath}/helloController`,
        initServicePath = `${servicePath}/helloService`,
        tsconfigPath = `${dirPath}/tsconfig.json`
        packageJsonPath = `${dirPath}/package.json`
        indexPath = `${dirPath}/index.ts`

    fs.mkdirSync(dirPath)
    fs.mkdirSync(srcPath)
    fs.mkdirSync(controllerPath)
    fs.mkdirSync(servicePath)
    fs.mkdirSync(initControllerPath)
    fs.mkdirSync(initServicePath)
    fs.writeFileSync(tsconfigPath, {flag: 'a+'}, '')
    fs.writeFileSync(packageJsonPath, {flag: 'a+'}, '')
    fs.writeFileSync(indexPath, {flag: 'a+'}, '')

    writeInitCode(path.resolve(__dirname, '../template/controller.ts'), `${initControllerPath}/index.ts`)
    writeInitCode(path.resolve(__dirname, '../template/service.ts'), `${initServicePath}/index.ts`)
    writeInitCode(path.resolve(__dirname, '../template/tsconfig.json'), tsconfigPath)
    writeInitCode(path.resolve(__dirname, '../template/package.json'), packageJsonPath)
    writeInitCode(path.resolve(__dirname, '../template/index.ts'), indexPath)
}   

function writeInitCode(template, path) {
    fs.createReadStream(template).pipe(fs.createWriteStream(path))
}

exports.createOverkosApp = createOverkosApp
require('@babel/register')
require('@babel/preset-react')

const path = require('path')
const fs = require('fs')

process.env.NODE_ENV = 'development'

// const argv = process.argv

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const runFile = resolveApp('index.js')

require(runFile)
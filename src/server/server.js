import express from 'express'
import path from 'path'
import config from './config'
import processHtml from './resources/processHtml'

const app = express()
const baseUrl = config.basePath + config.versioning
const dir = __dirname

// TODO: move to config
const fileConfig = {
    publicDir: '/../public',
    index: '/../public/index.html'
};

app.use(express.static(dir + fileConfig.publicDir))

const htmlFilePath = path.join(dir + fileConfig.index);

processHtml(htmlFilePath);

export const server = () => (
  app.listen(config.port, () => (
    config.log.logs && console.log(`REST API on http://localhost:${config.port}/`))
  )
)

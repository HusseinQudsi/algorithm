import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import config from './config'
import processHtml from './resources/processHtml'

const app = express()
const baseUrl = config.basePath + config.versioning
const dir = __dirname// /Users/superuser500/Desktop/Development/dev-code/base-node-es2017/dist/server
// TODO move to config
const fileConfig = {
    publicDir: '/../public',
    index: '/../public/index.html'
};

app.use(express.static(dir + fileConfig.publicDir))

const htmlFilePath = path.join(dir + fileConfig.index);

processHtml(htmlFilePath);

export const start = async () => {

  try {

    return app.listen(config.port, () => (
      config.log.logs && console.log(`REST API on http://localhost:${config.port}/`))
    )

  } catch (e) { config.log.error && console.error(e) }
}

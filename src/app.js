import express from 'express'
import Database from './config/dbBoot'
import Routes from './routes/routes'
import Middleware from './config/middleware'

class App {
  constructor () {
    this.server = express()
    this.init()
  }

  async init () {
    // start dos middlewares
    await this.middleware()
    // conecta com o banco de dado e instancia as models
    await this.database()
    // instancia as rotas ad API Rest
    await this.routes()
  }

  async middleware() {
    await new Middleware().init(this.server)
  }

  async database () {
    await new Database().init()
  }

  async routes () {
    await new Routes().init(this.server)
  }
}

export default new App().server

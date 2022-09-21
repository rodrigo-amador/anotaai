// import variaveis de ambiente para o BD
import DbConfig from './dbConfig'
// import de models
import Categories from '../models/Categories'
import Products from '../models/Products'
import logger from './logger'

import Sequelize from 'sequelize'

// Buffer de models
const models = [
  Categories,
  Products
]

// Função responsavel por fazer a conexão com o BD mysql com os dados do dbConfig.js
class Database {
  async init () {
    try {
      // Inicializa conexao
      this.connection = await new Sequelize(DbConfig)
      // Percorre o array e acessa o método inicializador de cada model
      models.map(async (model) => {
        await model.init(this.connection)
      })
    } catch (error) {
      logger.error(`[${new Date()}] [Database.init] -> Error when connecting to DB: ${error.message}`)
      console.log(`Error while starting Database, db call won't work: ${error.message}`)
    }
  }
}

export default Database

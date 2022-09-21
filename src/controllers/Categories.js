import CategoriesService from '../services/Categories'
import logger from '../config/logger'

class CategoriesController {
  // rota que retorna todas as categorias
  async getAll(req, res) {
    try {
      const result = await CategoriesService.getAll();
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [CategoryController.getAll] -> ${error.message}`)
    }
  }

  // rota que retorna categoria pelo id informado
  async getOne(req, res) {
    try {
      const result = await CategoriesService.getOne(req.params.id)
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [CategoryController.getOne] -> ${error.message}`)
    }
  }

  // rota que cria um registro de categoria
  async create(req, res) {
    try {
      const result = await CategoriesService.create(req.body)
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [CategoryController.post] -> ${error.message}`)
    }
  }

  // rota que atualiza uma categoria
  async update(req, res) {
    try {
      const result = await CategoriesService.update(req.params.id, req.body)
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [CategoryController.update] -> ${error.message}`)
    }
  }
}

export default new CategoriesController()

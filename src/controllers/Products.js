import ProductsService from '../services/Products'
import logger from '../config/logger'

class ProductsController {
  async getAll(req, res) {
    try {
      const result = await ProductsService.getAll();
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [ProductsController.getAll] -> ${error.message}`)
    }
  }

  async getOne(req, res) {
    try {
      const result = await ProductsService.getOne(req.params.id)
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [ProductsController.getOne] -> ${error.message}`)
    }
  }

  async filter(req, res) {
    try {
      const result = await ProductsService.filter(req.body)
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [ProductsController.filter] -> ${error.message}`)
    }
  }

  async create(req, res) {
    try {
      const result = await ProductsService.create(req.body)
      res.json(result)
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [ProductsController.post] -> ${error.message}`)
    }
  }

  async update(req, res) {
    try {
      await ProductsService.update(req.params.id, req.body)
      res.json({message: 'Product updated with success!'})
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [ProductsController.update] -> ${error.message}`)
    }
  }

  async delete(req, res) {
    try {
      await ProductsService.delete(req.params.id)
      res.json({message: 'Product deleted with success!'})
    } catch (error) {
      res.status(412).json({ 'message': error.message })
      logger.error(`[${new Date()}] [ProductsController.delete] -> ${error.message}`)
    }
  }
}

export default new ProductsController()

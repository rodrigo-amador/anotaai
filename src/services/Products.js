import Products from '../models/Products'
import Sequelize from 'sequelize';

class ProductsService {
  async getAll() {
    const products = await Products.findAll()
    return products
  }

  async getOne(id) {
    const product = await Products.findOne({ where: { id } })
    return product
  }

  async filter(body) {
    let where = {};

    if (body.category_id) {
      where.category_id = body.category_id
    }

    if (body.title) {
      where.title = { [Sequelize.Op.like]: `%${body.title}%` }
    }

    const product = await Products.findAll({ where })
    return product
  }

  async create(body) {
    const product = await Products.create(body)
    return product
  }

  async update(id, body) {
    await Products.update(body, { where: { id } })
    return
  }

  async delete(id) {
    await Products.destroy({ where: { id } })
    return
  }
}

export default new ProductsService()

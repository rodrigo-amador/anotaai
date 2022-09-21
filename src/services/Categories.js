import Categories from '../models/Categories'

class CategoriesService {
  async getAll() {
    const categories = await Categories.findAll()
    return categories
  }

  async getOne(id) {
    const category = await Categories.findOne({ where: { id } })
    return category
  }

  async create(body) {
    const category = await Categories.create(body)
    return category
  }

  async update(id, body) {
    const category = await Categories.update(body, { where: { id } })
    return category
  }
}

export default new CategoriesService()

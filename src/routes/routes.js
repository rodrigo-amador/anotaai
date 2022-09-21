import ProductsController from '../controllers/Products'
import CategoriesController from '../controllers/Categories'

class Routes {
  async init(app) {
    // rotas de produto
    app.get('/product', ProductsController.getAll);
    app.get('/product/:id', ProductsController.getOne);
    app.post('/product/filter', ProductsController.filter);
    app.post('/product', ProductsController.create);
    app.patch('/product/:id', ProductsController.update);
    app.delete('/product/:id', ProductsController.delete);

    // rotas de categoria
    app.get('/category', CategoriesController.getAll);
    app.get('/category/:id', CategoriesController.getOne);
    app.post('/category', CategoriesController.create);
    app.patch('/category/:id', CategoriesController.update);
  }
}

export default Routes

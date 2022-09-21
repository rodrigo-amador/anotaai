import Sequelize from 'sequelize';

class Categories extends Sequelize.Model {
  static init (sequelize) {
    return super.init({
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    }, {
      createdAt: false,
      updatedAt: false,
      tableName: 'categories',
      sequelize
    }).sync() // cria a tabela no BD caso não exista
  }
}
export default Categories

'use strict'

const Model = use('Model')

class Cart extends Model {
  // 关联用户
  user () {
    return this.belongsTo('App/Models/User')
  }

  // 关联商品
  product () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = Cart

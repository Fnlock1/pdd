'use strict'

const Model = use('Model')

class OrderItem extends Model {
  // 关联订单
  order () {
    return this.belongsTo('App/Models/Order')
  }

  // 关联商品
  product () {
    return this.belongsTo('App/Models/Product')
  }
}

module.exports = OrderItem

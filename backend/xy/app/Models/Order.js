'use strict'

const Model = use('Model')

class Order extends Model {
  // 关联用户
  user () {
    return this.belongsTo('App/Models/User')
  }

  // 关联订单商品
  orderItems () {
    return this.hasMany('App/Models/OrderItem')
  }
}

module.exports = Order

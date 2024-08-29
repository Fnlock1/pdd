'use strict'

const Model = use('Model')

class User extends Model {
  // 关联购物车
  carts () {
    return this.hasMany('App/Models/Cart')
  }

  // 关联订单
  orders () {
    return this.hasMany('App/Models/Order')
  }
}

module.exports = User

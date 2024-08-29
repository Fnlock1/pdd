'use strict'

const Model = use('Model')

class Product extends Model {
  // 关联分类
  category () {
    return this.belongsTo('App/Models/Category')
  }

  // 关联购物车
  carts () {
    return this.hasMany('App/Models/Cart')
  }

  // 关联订单商品
  orderItems () {
    return this.hasMany('App/Models/OrderItem')
  }

  // 搜索索引（可选）
  searchIndex () {
    return this.hasOne('App/Models/ProductSearchIndex')
  }
}

module.exports = Product

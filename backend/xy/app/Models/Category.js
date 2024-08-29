'use strict'

const Model = use('Model')

class Category extends Model {
  // 关联商品
  products () {
    return this.hasMany('App/Models/Product')
  }

  // 关联父分类
  parentCategory () {
    return this.belongsTo('App/Models/Category', 'parent_id', 'id')
  }

  // 关联子分类
  subCategories () {
    return this.hasMany('App/Models/Category', 'parent_id', 'id')
  }
}

module.exports = Category

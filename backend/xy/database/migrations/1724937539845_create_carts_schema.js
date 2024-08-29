'use strict'

const Schema = use('Schema')

class CartsTableSchema extends Schema {
  up () {
    this.create('carts', (table) => {
      // 主键 ID
      table.increments()

      // 用户 ID，外键
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()

      // 商品 ID，外键
      table.integer('product_id').unsigned().references('id').inTable('products').notNullable()

      // 商品数量，不能为空
      table.integer('quantity').notNullable()

      // 添加时间，默认当前时间
      table.timestamp('added_at').defaultTo(this.fn.now())

      // 确保同一用户同一商品只有一条记录
      table.unique(['user_id', 'product_id'])
    })
  }

  down () {
    this.drop('carts')
  }
}

module.exports = CartsTableSchema

'use strict'

const Schema = use('Schema')

class OrderItemsTableSchema extends Schema {
  up () {
    this.create('order_items', (table) => {
      // 主键 ID
      table.increments()

      // 订单 ID，外键
      table.integer('order_id').unsigned().references('id').inTable('orders').notNullable()

      // 商品 ID，外键
      table.integer('product_id').unsigned().references('id').inTable('products').notNullable()

      // 商品数量，不能为空
      table.integer('quantity').notNullable()

      // 商品价格，不能为空
      table.decimal('price', 10, 2).notNullable()
    })
  }

  down () {
    this.drop('order_items')
  }
}

module.exports = OrderItemsTableSchema

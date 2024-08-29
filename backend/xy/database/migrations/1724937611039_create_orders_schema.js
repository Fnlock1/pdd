'use strict'

const Schema = use('Schema')

class OrdersTableSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      // 主键 ID
      table.increments()

      // 用户 ID，外键
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()

      // 订单总金额，不能为空
      table.decimal('total', 10, 2).notNullable()

      // 订单状态，默认 'pending'
      table.enum('status', ['pending', 'paid', 'shipped', 'completed', 'canceled']).defaultTo('pending')

      // 创建时间，默认当前时间
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersTableSchema

'use strict'

const Schema = use('Schema')

class ProductsTableSchema extends Schema {
  up () {
    this.create('products', (table) => {
      // 主键 ID
      table.increments()

      // 商品名称，不能为空
      table.string('name', 100).notNullable()

      // 商品描述，可选
      table.text('description')

      // 商品价格，不能为空
      table.decimal('price', 10, 2).notNullable()

      // 商品库存数量，不能为空
      table.integer('stock').notNullable()

      // 商品分类 ID，外键
      table.integer('category_id').unsigned().references('id').inTable('categories')

      // 创建时间，默认当前时间
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsTableSchema

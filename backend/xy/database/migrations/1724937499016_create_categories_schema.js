'use strict'

const Schema = use('Schema')

class CategoriesTableSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      // 主键 ID
      table.increments()

      // 分类名称，唯一且不能为空
      table.string('name', 50).notNullable().unique()

      // 父级分类 ID，外键
      table.integer('parent_id').unsigned().references('id').inTable('categories')

      // 创建时间，默认当前时间
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategoriesTableSchema

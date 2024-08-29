'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {
  up () {
    this.create('users', (table) => {
      // 主键 ID
      table.increments()

      // 用户名，唯一且不能为空
      table.string('username', 50).notNullable().unique()

      // 密码哈希，不能为空
      table.string('password_hash', 255).notNullable()

      // 邮箱，唯一且不能为空
      table.string('email', 100).notNullable().unique()

      // 电话号码，可选
      table.string('phone', 20)

      // 创建时间，默认当前时间
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersTableSchema

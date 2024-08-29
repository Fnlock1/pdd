// UserController.js

const User = use('App/Models/User')

class UserController {
  /**
   * Get all users.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async getAll({ response }) {
    // 获取所有用户
    const users = await User.all()

    // 返回所有用户
    return response.json({
      message: 'All users retrieved successfully',
      data: users
    })
  }

  /**
   * Get a paginated list of users.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async index({ request, response }) {
    // 获取分页参数：页码和每页条数
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    // 分页获取用户
    const users = await User.query().paginate(page, limit)

    // 返回分页后的用户列表
    return response.json({
      message: 'Users retrieved successfully',
      data: users
    })
  }

  /**
   * Get a specific user by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async show({ params, response }) {
    // 获取指定ID的用户
    const user = await User.find(params.id)

    // 如果用户不存在，返回404错误
    if (!user) {
      return response.status(404).json({
        message: 'User not found'
      })
    }

    // 返回指定ID的用户
    return response.json({
      message: 'User retrieved successfully',
      data: user
    })
  }

  /**
   * Create a new user.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async store({ request, response }) {
    // 获取请求数据
    const userData = request.only(['username', 'email', 'password'])

    // 创建新用户
    const user = await User.create(userData)

    // 返回成功响应
    return response.status(201).json({
      message: 'User created successfully',
      data: user
    })
  }

  /**
   * Update an existing user by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async update({ params, request, response }) {
    // 获取指定ID的用户
    const user = await User.find(params.id)

    // 如果用户不存在，返回404错误
    if (!user) {
      return response.status(404).json({
        message: 'User not found'
      })
    }

    // 更新用户数据
    user.merge(request.only(['username', 'email', 'password']))

    // 保存更新后的用户
    await user.save()

    // 返回成功响应
    return response.json({
      message: 'User updated successfully',
      data: user
    })
  }

  /**
   * Delete a specific user by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async delete({ params, response }) {
    // 获取指定ID的用户
    const user = await User.find(params.id)

    // 如果用户不存在，返回404错误
    if (!user) {
      return response.status(404).json({
        message: 'User not found'
      })
    }

    // 删除用户
    await user.delete()

    // 返回成功响应
    return response.json({
      message: 'User deleted successfully'
    })
  }
}

module.exports = UserController

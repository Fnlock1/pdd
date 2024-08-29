// OrderController.js

const Order = use('App/Models/Order')

class OrderController {
  /**
   * Get all orders.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async getAll({ response }) {
    // 获取所有订单
    const orders = await Order.all()

    // 返回所有订单
    return response.json({
      message: 'All orders retrieved successfully',
      data: orders
    })
  }

  /**
   * Get a paginated list of orders.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async index({ request, response }) {
    // 获取分页参数：页码和每页条数
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    // 分页获取订单
    const orders = await Order.query().paginate(page, limit)

    // 返回分页后的订单列表
    return response.json({
      message: 'Orders retrieved successfully',
      data: orders
    })
  }

  /**
   * Get a specific order by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async show({ params, response }) {
    // 获取指定ID的订单
    const order = await Order.find(params.id)

    // 如果订单不存在，返回404错误
    if (!order) {
      return response.status(404).json({
        message: 'Order not found'
      })
    }

    // 返回指定ID的订单
    return response.json({
      message: 'Order retrieved successfully',
      data: order
    })
  }

  /**
   * Create a new order.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async store({ request, response }) {
    // 获取请求数据
    const orderData = request.only(['product_id', 'user_id', 'quantity', 'total_price', 'status'])

    // 创建新订单
    const order = await Order.create(orderData)

    // 返回成功响应
    return response.status(201).json({
      message: 'Order created successfully',
      data: order
    })
  }

  /**
   * Update an existing order by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async update({ params, request, response }) {
    // 获取指定ID的订单
    const order = await Order.find(params.id)

    // 如果订单不存在，返回404错误
    if (!order) {
      return response.status(404).json({
        message: 'Order not found'
      })
    }

    // 更新订单数据
    order.merge(request.only(['product_id', 'user_id', 'quantity', 'total_price', 'status']))

    // 保存更新后的订单
    await order.save()

    // 返回成功响应
    return response.json({
      message: 'Order updated successfully',
      data: order
    })
  }

  /**
   * Delete a specific order by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async delete({ params, response }) {
    // 获取指定ID的订单
    const order = await Order.find(params.id)

    // 如果订单不存在，返回404错误
    if (!order) {
      return response.status(404).json({
        message: 'Order not found'
      })
    }

    // 删除订单
    await order.delete()

    // 返回成功响应
    return response.json({
      message: 'Order deleted successfully'
    })
  }
}

module.exports = OrderController

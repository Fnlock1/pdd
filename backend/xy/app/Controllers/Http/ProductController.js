// ProductController.js

const Product = use('App/Models/Product')

class ProductController {
  /**
   * Get all products.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async getAll({ response }) {
    // 获取所有商品
    const products = await Product.all()

    // 返回所有商品
    return response.json({
      message: 'All products retrieved successfully',
      data: products
    })
  }

  /**
   * Get a paginated list of products.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async index({ request, response }) {
    // 获取分页参数：页码和每页条数
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    // 分页获取商品
    const products = await Product.query().paginate(page, limit)

    // 返回分页后的商品列表
    return response.json({
      message: 'Products retrieved successfully',
      data: products
    })
  }

  /**
   * Get a specific product by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async show({ params, response }) {
    // 获取指定ID的商品
    const product = await Product.find(params.id)

    // 如果商品不存在，返回404错误
    if (!product) {
      return response.status(404).json({
        message: 'Product not found'
      })
    }

    // 返回指定ID的商品
    return response.json({
      message: 'Product retrieved successfully',
      data: product
    })
  }

  /**
   * Create a new product.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async store({ request, response }) {
    // 获取请求数据
    const productData = request.only(['name', 'description', 'price', 'stock'])

    // 创建新商品
    const product = await Product.create(productData)

    // 返回成功响应
    return response.status(201).json({
      message: 'Product created successfully',
      data: product
    })
  }

  /**
   * Update an existing product by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async update({ params, request, response }) {
    // 获取指定ID的商品
    const product = await Product.find(params.id)

    // 如果商品不存在，返回404错误
    if (!product) {
      return response.status(404).json({
        message: 'Product not found'
      })
    }

    // 更新商品数据
    product.merge(request.only(['name', 'description', 'price', 'stock']))

    // 保存更新后的商品
    await product.save()

    // 返回成功响应
    return response.json({
      message: 'Product updated successfully',
      data: product
    })
  }

  /**
   * Delete a specific product by ID.
   * @param {object} ctx - The context object, contains the request and response objects.
   */
  async delete({ params, response }) {
    // 获取指定ID的商品
    const product = await Product.find(params.id)

    // 如果商品不存在，返回404错误
    if (!product) {
      return response.status(404).json({
        message: 'Product not found'
      })
    }

    // 删除商品
    await product.delete()

    // 返回成功响应
    return response.json({
      message: 'Product deleted successfully'
    })
  }
}

module.exports = ProductController

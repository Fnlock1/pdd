// CartController.js

const Cart = use('App/Models/Cart')

class CartController {
  async getAll({ response }) {
    const carts = await Cart.all()
    return response.json({
      message: 'All carts retrieved successfully',
      data: carts
    })
  }

  async index({ request, response }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const carts = await Cart.query().paginate(page, limit)
    return response.json({
      message: 'Carts retrieved successfully',
      data: carts
    })
  }

  async show({ params, response }) {
    const cart = await Cart.find(params.id)
    if (!cart) {
      return response.status(404).json({
        message: 'Cart not found'
      })
    }
    return response.json({
      message: 'Cart retrieved successfully',
      data: cart
    })
  }

  async store({ request, response }) {
    const cartData = request.only(['user_id', 'product_id', 'quantity'])
    const cart = await Cart.create(cartData)
    return response.status(201).json({
      message: 'Cart created successfully',
      data: cart
    })
  }

  async update({ params, request, response }) {
    const cart = await Cart.find(params.id)
    if (!cart) {
      return response.status(404).json({
        message: 'Cart not found'
      })
    }
    cart.merge(request.only(['product_id', 'quantity']))
    await cart.save()
    return response.json({
      message: 'Cart updated successfully',
      data: cart
    })
  }

  async delete({ params, response }) {
    const cart = await Cart.find(params.id)
    if (!cart) {
      return response.status(404).json({
        message: 'Cart not found'
      })
    }
    await cart.delete()
    return response.json({
      message: 'Cart deleted successfully'
    })
  }
}

module.exports = CartController

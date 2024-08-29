// CategoryController.js

const Category = use('App/Models/Category')

class CategoryController {
  async getAll({ response }) {
    const categories = await Category.all()
    return response.json({
      message: 'All categories retrieved successfully',
      data: categories
    })
  }

  async index({ request, response }) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const categories = await Category.query().paginate(page, limit)
    return response.json({
      message: 'Categories retrieved successfully',
      data: categories
    })
  }

  async show({ params, response }) {
    const category = await Category.find(params.id)
    if (!category) {
      return response.status(404).json({
        message: 'Category not found'
      })
    }
    return response.json({
      message: 'Category retrieved successfully',
      data: category
    })
  }

  async store({ request, response }) {
    const categoryData = request.only(['name', 'description'])
    const category = await Category.create(categoryData)
    return response.status(201).json({
      message: 'Category created successfully',
      data: category
    })
  }

  async update({ params, request, response }) {
    const category = await Category.find(params.id)
    if (!category) {
      return response.status(404).json({
        message: 'Category not found'
      })
    }
    category.merge(request.only(['name', 'description']))
    await category.save()
    return response.json({
      message: 'Category updated successfully',
      data: category
    })
  }

  async delete({ params, response }) {
    const category = await Category.find(params.id)
    if (!category) {
      return response.status(404).json({
        message: 'Category not found'
      })
    }
    await category.delete()
    return response.json({
      message: 'Category deleted successfully'
    })
  }
}

module.exports = CategoryController

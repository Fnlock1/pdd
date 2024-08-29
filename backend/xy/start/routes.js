// start/routes.js

const Route = use('Route')

// Category Routes
Route.get('/categories', 'CategoryController.index')            // 获取分类列表，分页
Route.get('/categories/all', 'CategoryController.getAll')       // 获取所有分类
Route.get('/categories/:id', 'CategoryController.show')          // 根据 ID 获取单个分类
Route.post('/categories', 'CategoryController.store')            // 创建新分类
Route.put('/categories/:id', 'CategoryController.update')        // 更新分类
Route.delete('/categories/:id', 'CategoryController.delete')     // 删除分类

// Review Routes
Route.get('/reviews', 'ReviewController.index')                  // 获取评论列表，分页
Route.get('/reviews/all', 'ReviewController.getAll')             // 获取所有评论
Route.get('/reviews/:id', 'ReviewController.show')               // 根据 ID 获取单个评论
Route.post('/reviews', 'ReviewController.store')                 // 创建新评论
Route.put('/reviews/:id', 'ReviewController.update')             // 更新评论
Route.delete('/reviews/:id', 'ReviewController.delete')          // 删除评论

// Cart Routes
Route.get('/carts', 'CartController.index')                      // 获取购物车列表，分页
Route.get('/carts/all', 'CartController.getAll')                 // 获取所有购物车
Route.get('/carts/:id', 'CartController.show')                   // 根据 ID 获取单个购物车
Route.post('/carts', 'CartController.store')                     // 创建新购物车
Route.put('/carts/:id', 'CartController.update')                 // 更新购物车
Route.delete('/carts/:id', 'CartController.delete')              // 删除购物车

// OrderItem Routes
Route.get('/order-items', 'OrderItemController.index')           // 获取订单项列表，分页
Route.get('/order-items/all', 'OrderItemController.getAll')      // 获取所有订单项
Route.get('/order-items/:id', 'OrderItemController.show')        // 根据 ID 获取单个订单项
Route.post('/order-items', 'OrderItemController.store')          // 创建新订单项
Route.put('/order-items/:id', 'OrderItemController.update')      // 更新订单项
Route.delete('/order-items/:id', 'OrderItemController.delete')   // 删除订单项

// Payment Routes
Route.get('/payments', 'PaymentController.index')                // 获取支付记录列表，分页
Route.get('/payments/all', 'PaymentController.getAll')           // 获取所有支付记录
Route.get('/payments/:id', 'PaymentController.show')             // 根据 ID 获取单个支付记录
Route.post('/payments', 'PaymentController.store')               // 创建新支付记录
Route.put('/payments/:id', 'PaymentController.update')           // 更新支付记录
Route.delete('/payments/:id', 'PaymentController.delete')        // 删除支付记录

// Shipping Routes
Route.get('/shippings', 'ShippingController.index')              // 获取配送记录列表，分页
Route.get('/shippings/all', 'ShippingController.getAll')         // 获取所有配送记录
Route.get('/shippings/:id', 'ShippingController.show')           // 根据 ID 获取单个配送记录
Route.post('/shippings', 'ShippingController.store')             // 创建新配送记录
Route.put('/shippings/:id', 'ShippingController.update')         // 更新配送记录
Route.delete('/shippings/:id', 'ShippingController.delete')      // 删除配送记录

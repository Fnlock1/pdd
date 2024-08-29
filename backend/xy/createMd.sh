#!/bin/bash

# 文件路径
FILE_PATH="README.md"

# 创建或清空文件
> $FILE_PATH

# 写入文档标题
echo "# AdonisJS 后端接口文档" >> $FILE_PATH
echo "" >> $FILE_PATH

# 写入目录
echo "## 目录" >> $FILE_PATH
echo "- [用户接口](#用户接口)" >> $FILE_PATH
echo "- [商品接口](#商品接口)" >> $FILE_PATH
echo "- [类别接口](#类别接口)" >> $FILE_PATH
echo "- [评论接口](#评论接口)" >> $FILE_PATH
echo "- [购物车接口](#购物车接口)" >> $FILE_PATH
echo "- [订单项接口](#订单项接口)" >> $FILE_PATH
echo "- [支付接口](#支付接口)" >> $FILE_PATH
echo "- [配送接口](#配送接口)" >> $FILE_PATH
echo "" >> $FILE_PATH

# 写入用户接口
cat <<EOL >> $FILE_PATH
## 用户接口

### 获取所有用户
- **URL:** /users
- **方法:** GET
- **描述:** 获取所有用户，支持分页。
- **请求参数:**
  - page (可选): 页码，默认为 1
  - limit (可选): 每页条数，默认为 10
- **响应示例:**
  \`\`\`json
  {
    "data": [
      {
        "id": 1,
        "username": "john_doe",
        "email": "john@example.com"
      }
    ],
    "meta": {
      "total": 100,
      "page": 1,
      "limit": 10
    }
  }
  \`\`\`

### 获取用户详情
- **URL:** /users/:id
- **方法:** GET
- **描述:** 根据用户 ID 获取用户详细信息。
- **请求参数:**
  - id: 用户 ID
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
  \`\`\`

### 创建用户
- **URL:** /users
- **方法:** POST
- **描述:** 创建一个新用户。
- **请求体:**
  \`\`\`json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
  \`\`\`

### 更新用户
- **URL:** /users/:id
- **方法:** PUT
- **描述:** 更新指定用户的详细信息。
- **请求参数:**
  - id: 用户 ID
- **请求体:**
  \`\`\`json
  {
    "email": "newemail@example.com",
    "password": "newpassword"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "username": "john_doe",
    "email": "newemail@example.com"
  }
  \`\`\`

### 删除用户
- **URL:** /users/:id
- **方法:** DELETE
- **描述:** 删除指定用户。
- **请求参数:**
  - id: 用户 ID
- **响应示例:**
  \`\`\`json
  {
    "message": "User deleted successfully."
  }
  \`\`\`

EOL

# 写入商品接口
cat <<EOL >> $FILE_PATH
## 商品接口

### 获取所有商品
- **URL:** /products
- **方法:** GET
- **描述:** 获取所有商品，支持分页。
- **请求参数:**
  - page (可选): 页码，默认为 1
  - limit (可选): 每页条数，默认为 10
- **响应示例:**
  \`\`\`json
  {
    "data": [
      {
        "id": 1,
        "name": "Product Name",
        "price": 100.0
      }
    ],
    "meta": {
      "total": 50,
      "page": 1,
      "limit": 10
    }
  }
  \`\`\`

### 获取商品详情
- **URL:** /products/:id
- **方法:** GET
- **描述:** 根据商品 ID 获取商品详细信息。
- **请求参数:**
  - id: 商品 ID
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "name": "Product Name",
    "description": "Product Description",
    "price": 100.0
  }
  \`\`\`

### 创建商品
- **URL:** /products
- **方法:** POST
- **描述:** 创建一个新商品。
- **请求体:**
  \`\`\`json
  {
    "name": "New Product",
    "description": "Product Description",
    "price": 150.0
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 2,
    "name": "New Product",
    "price": 150.0
  }
  \`\`\`

### 更新商品
- **URL:** /products/:id
- **方法:** PUT
- **描述:** 更新指定商品的详细信息。
- **请求参数:**
  - id: 商品 ID
- **请求体:**
  \`\`\`json
  {
    "price": 120.0
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "name": "Product Name",
    "price": 120.0
  }
  \`\`\`

### 删除商品
- **URL:** /products/:id
- **方法:** DELETE
- **描述:** 删除指定商品。
- **请求参数:**
  - id: 商品 ID
- **响应示例:**
  \`\`\`json
  {
    "message": "Product deleted successfully."
  }
  \`\`\`

EOL

# 写入类别接口
cat <<EOL >> $FILE_PATH
## 类别接口

### 获取所有类别
- **URL:** /categories
- **方法:** GET
- **描述:** 获取所有类别，支持分页。
- **请求参数:**
  - page (可选): 页码，默认为 1
  - limit (可选): 每页条数，默认为 10
- **响应示例:**
  \`\`\`json
  {
    "data": [
      {
        "id": 1,
        "name": "Category Name"
      }
    ],
    "meta": {
      "total": 10,
      "page": 1,
      "limit": 10
    }
  }
  \`\`\`

### 获取类别详情
- **URL:** /categories/:id
- **方法:** GET
- **描述:** 根据类别 ID 获取类别详细信息。
- **请求参数:**
  - id: 类别 ID
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "name": "Category Name"
  }
  \`\`\`

### 创建类别
- **URL:** /categories
- **方法:** POST
- **描述:** 创建一个新类别。
- **请求体:**
  \`\`\`json
  {
    "name": "New Category"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 2,
    "name": "New Category"
  }
  \`\`\`

### 更新类别
- **URL:** /categories/:id
- **方法:** PUT
- **描述:** 更新指定类别的详细信息。
- **请求参数:**
  - id: 类别 ID
- **请求体:**
  \`\`\`json
  {
    "name": "Updated Category Name"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "name": "Updated Category Name"
  }
  \`\`\`

### 删除类别
- **URL:** /categories/:id
- **方法:** DELETE
- **描述:** 删除指定类别。
- **请求参数:**
  - id: 类别 ID
- **响应示例:**
  \`\`\`json
  {
    "message": "Category deleted successfully."
  }
  \`\`\`

EOL

# 写入评论接口
cat <<EOL >> $FILE_PATH
## 评论接口

### 获取所有评论
- **URL:** /comments
- **方法:** GET
- **描述:** 获取所有评论，支持分页。
- **请求参数:**
  - page (可选): 页码，默认为 1
  - limit (可选): 每页条数，默认为 10
- **响应示例:**
  \`\`\`json
  {
    "data": [
      {
        "id": 1,
        "product_id": 1,
        "user_id": 1,
        "rating": 5,
        "comment": "Excellent product!"
      }
    ],
    "meta": {
      "total": 50,
      "page": 1,
      "limit": 10
    }
  }
  \`\`\`

### 获取评论详情
- **URL:** /comments/:id
- **方法:** GET
- **描述:** 根据评论 ID 获取评论详细信息。
- **请求参数:**
  - id: 评论 ID
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "product_id": 1,
    "user_id": 1,
    "rating": 5,
    "comment": "Excellent product!"
  }
  \`\`\`

### 创建评论
- **URL:** /comments
- **方法:** POST
- **描述:** 创建一个新评论。
- **请求体:**
  \`\`\`json
  {
    "product_id": 1,
    "user_id": 1,
    "rating": 5,
    "comment": "Excellent product!"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 2,
    "product_id": 1,
    "user_id": 1,
    "rating": 5,
    "comment": "Excellent product!"
  }
  \`\`\`

### 更新评论
- **URL:** /comments/:id
- **方法:** PUT
- **描述:** 更新指定评论的详细信息。
- **请求参数:**
  - id: 评论 ID
- **请求体:**
  \`\`\`json
  {
    "rating": 4,
    "comment": "Good product."
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "product_id": 1,
    "user_id": 1,
    "rating": 4,
    "comment": "Good product."
  }
  \`\`\`

### 删除评论
- **URL:** /comments/:id
- **方法:** DELETE
- **描述:** 删除指定评论。
- **请求参数:**
  - id: 评论 ID
- **响应示例:**
  \`\`\`json
  {
    "message": "Comment deleted successfully."
  }
  \`\`\`

EOL

# 写入购物车接口
cat <<EOL >> $FILE_PATH
## 购物车接口

### 获取购物车内容
- **URL:** /cart
- **方法:** GET
- **描述:** 获取当前用户的购物车内容。
- **请求参数:**
  - 无
- **响应示例:**
  \`\`\`json
  {
    "items": [
      {
        "product_id": 1,
        "quantity": 2
      }
    ],
    "total": 200.0
  }
  \`\`\`

### 添加商品到购物车
- **URL:** /cart
- **方法:** POST
- **描述:** 将商品添加到购物车。
- **请求体:**
  \`\`\`json
  {
    "product_id": 1,
    "quantity": 2
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "message": "Product added to cart."
  }
  \`\`\`

### 更新购物车商品数量
- **URL:** /cart/:product_id
- **方法:** PUT
- **描述:** 更新购物车中指定商品的数量。
- **请求参数:**
  - product_id: 商品 ID
- **请求体:**
  \`\`\`json
  {
    "quantity": 3
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "message": "Cart updated."
  }
  \`\`\`

### 删除购物车中的商品
- **URL:** /cart/:product_id
- **方法:** DELETE
- **描述:** 从购物车中删除指定商品。
- **请求参数:**
  - product_id: 商品 ID
- **响应示例:**
  \`\`\`json
  {
    "message": "Product removed from cart."
  }
  \`\`\`

EOL

# 写入订单项接口
cat <<EOL >> $FILE_PATH
## 订单项接口

### 创建订单项
- **URL:** /order-items
- **方法:** POST
- **描述:** 创建一个新订单项。
- **请求体:**
  \`\`\`json
  {
    "order_id": 1,
    "product_id": 1,
    "quantity": 2,
    "price": 100.0
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "order_id": 1,
    "product_id": 1,
    "quantity": 2,
    "price": 100.0
  }
  \`\`\`

### 更新订单项
- **URL:** /order-items/:id
- **方法:** PUT
- **描述:** 更新指定订单项的详细信息。
- **请求参数:**
  - id: 订单项 ID
- **请求体:**
  \`\`\`json
  {
    "quantity": 3
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "order_id": 1,
    "product_id": 1,
    "quantity": 3,
    "price": 100.0
  }
  \`\`\`

### 删除订单项
- **URL:** /order-items/:id
- **方法:** DELETE
- **描述:** 删除指定订单项。
- **请求参数:**
  - id: 订单项 ID
- **响应示例:**
  \`\`\`json
  {
    "message": "Order item deleted successfully."
  }
  \`\`\`

EOL

# 写入支付接口
cat <<EOL >> $FILE_PATH
## 支付接口

### 创建支付
- **URL:** /payments
- **方法:** POST
- **描述:** 创建支付记录。
- **请求体:**
  \`\`\`json
  {
    "order_id": 1,
    "amount": 200.0,
    "method": "credit_card"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "order_id": 1,
    "amount": 200.0,
    "method": "credit_card"
  }
  \`\`\`

### 获取支付记录
- **URL:** /payments/:order_id
- **方法:** GET
- **描述:** 获取指定订单的支付记录。
- **请求参数:**
  - order_id: 订单 ID
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "order_id": 1,
    "amount": 200.0,
    "method": "credit_card"
  }
  \`\`\`

EOL

# 写入配送接口
cat <<EOL >> $FILE_PATH
## 配送接口

### 创建配送记录
- **URL:** /deliveries
- **方法:** POST
- **描述:** 创建配送记录。
- **请求体:**
  \`\`\`json
  {
    "order_id": 1,
    "address": "123 Street, City",
    "status": "pending"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "order_id": 1,
    "address": "123 Street, City",
    "status": "pending"
  }
  \`\`\`

### 更新配送状态
- **URL:** /deliveries/:id
- **方法:** PUT
- **描述:** 更新指定配送记录的状态。
- **请求参数:**
  - id: 配送记录 ID
- **请求体:**
  \`\`\`json
  {
    "status": "shipped"
  }
  \`\`\`
- **响应示例:**
  \`\`\`json
  {
    "id": 1,
    "order_id": 1,
    "address": "123 Street, City",
    "status": "shipped"
  }
  \`\`\`

EOL

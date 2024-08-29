// app/Middleware/ConvertEmptyStringsToNull.js

class ConvertEmptyStringsToNull {
  async handle ({ request }, next) {
    const body = request.only(['field1', 'field2']) // 只列出需要处理的字段

    Object.keys(body).forEach(key => {
      if (body[key] === '') {
        body[key] = null
      }
    })

    request.body = body

    await next()
  }
}

module.exports = ConvertEmptyStringsToNull

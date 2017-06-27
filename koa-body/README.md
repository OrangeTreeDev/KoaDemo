koa-body 特征
  可以处理处理三种类型的请求：
     。multipart/form-data
     。application/x-www-urlencoded
     。application/json

  默认，koa-body 不处理'Content-Type' 属性值为 'multipart/form-data'的请求，
  初始化koa-body传入参数{multipart:true}, 即可

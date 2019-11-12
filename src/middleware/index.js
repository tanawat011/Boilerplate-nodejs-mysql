const LoggerMiddleware = (req, res, next) => {
  console.log('\x1b[36m%s\x1b[0m', `Logged  ${req.url}  ${req.method} -- ${new Date()}`)
  next()
}

const setHeaderMiddleware = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `${global.env.access_allow}`)
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', `${global.env.allow_header}`)
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
}

export default app => {
  app.use(LoggerMiddleware, setHeaderMiddleware)
}

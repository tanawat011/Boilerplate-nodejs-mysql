import dotenv from 'dotenv'
dotenv.config()

const config = require('./env.json')
const defaultConfig = config.development
const environment = process.env.NODE_ENV || 'development'
const environmentConfig = config[environment]
const finalConfig = {
  ...defaultConfig,
  ...environmentConfig,
  NODE_ENV: environment
}

global.env = finalConfig

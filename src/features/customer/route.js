import * as Customers from './controller'
import { routerCustomer } from '../../constants'

const prefix = routerCustomer

export default app => {
  app.post(`${prefix}`, Customers.create)
  app.get(`${prefix}`, Customers.getAll)
  app.get(`${prefix}/:id`, Customers.getOne)
  app.put(`${prefix}/:id`, Customers.updateById)
  app.delete(`${prefix}/:id`, Customers.deleted)
  app.delete(`${prefix}`, Customers.deletedAll)
}

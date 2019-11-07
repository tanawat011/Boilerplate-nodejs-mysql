import * as Customers from './controller'
import { routerCustomer } from '../../constants'

const prefix = routerCustomer

export default app => {
  app.post(`${prefix}`, Customers.create)
  app.get(`${prefix}`, Customers.getAll)
  app.get(`${prefix}/:customerId`, Customers.getOne)
  app.put(`${prefix}/:customerId`, Customers.updateById)
  app.delete(`${prefix}/:customerId`, Customers.deleted)
  app.delete(`${prefix}`, Customers.deletedAll)
}

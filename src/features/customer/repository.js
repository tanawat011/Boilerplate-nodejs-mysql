import { tableCustomer } from '../../constants'
import { query } from '../../utils'

export const create = body => {
  const q = `INSERT INTO ${tableCustomer} SET ?`
  return query(q, body)
}

export const getById = id => {
  const q = `SELECT * FROM ${tableCustomer} WHERE id = ${id}`
  return query(q)
}

export const getAll = () => {
  const q = `SELECT * FROM ${tableCustomer}`
  return query(q)
}

export const updateById = (id, body) => {
  const q = `UPDATE ${tableCustomer} SET email = ?, name = ?, active = ? WHERE id = ?`
  return query(q, [body.email, body.name, body.active, id])
}

export const deleted = (id,) => {
  const q = `DELETE FROM ${tableCustomer} WHERE id = ?`
  return query(q, id)
}

export const deletedAll = () => {
  const q = `DELETE FROM ${tableCustomer}`
  return query(q)
}

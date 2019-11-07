import sql from '../../../config/db.config'
import { tableCustomer } from '../../constants'

export const create = (newCustomer, result) => {
  const queryStr = `INSERT INTO ${tableCustomer} SET ?`
  sql.query(queryStr, newCustomer, (err, res) => {
    if (err) {
      result(err, null)
      return
    }
    result(null, { id: res.insertId, ...newCustomer })
  })
}

export const getById = (customerId, result) => {
  const queryStr = `SELECT * FROM ${tableCustomer} WHERE id = ${customerId}`
  sql.query(queryStr, (err, res) => {
    if (err) {
      result(err, null)
      return
    }

    if (res.length) {
      result(null, res[0])
      return
    }

    result({ kind: 'not_found' }, null)
  })
}

export const getAll = result => {
  const queryStr = `SELECT * FROM ${tableCustomer}`
  sql.query(queryStr, (err, res) => {
    if (err) {
      result(err, null)
      return
    }
    result(null, res)
  })
}

export const updateById = (id, customer, result) => {
  const queryStr = `UPDATE ${tableCustomer} SET email = ?, name = ?, active = ? WHERE id = ?`
  sql.query(
    queryStr,
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        result(err, null)
        return
      }

      if (res.affectedRows == 0) {
        result({ kind: 'not_found' }, null)
        return
      }
      result(null, { id: id, ...customer })
    }
  )
}

export const deleted = (id, result) => {
  const queryStr = `DELETE FROM ${tableCustomer} WHERE id = ?`
  sql.query(queryStr, id, (err, res) => {
    if (err) {
      result(err, null)
      return
    }

    if (res.affectedRows == 0) {
      result({ kind: 'not_found' }, null)
      return
    }
    result(null, res)
  })
}

export const deletedAll = result => {
  const queryStr = `DELETE FROM ${tableCustomer}`
  sql.query(queryStr, (err, res) => {
    if (err) {
      result(err, null)
      return
    }
    result(null, res)
  })
}

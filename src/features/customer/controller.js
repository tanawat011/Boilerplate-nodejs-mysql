import * as service from './service'
import response from '../../utils/response'

export const create = ({ body }, res) => {
  if (!Object.keys(body).length) {
    response({ code: 400 }, res, null)
  }

  service.create(body, (err, data) => {
    if (err) response({ ...err, code: 500 }, res, null)
    else response({ code: 201 }, res, data)
  })
}

export const getAll = (req, res) => {
  service.getAll((err, data) => {
    if (err) response({ ...err, code: 500 }, res, null)

    if (data.length === 0) response({ code: 204 }, res, null)
    else response({ code: 200 }, res, data)
  })
}

export const getOne = ({ params: { customerId } }, res) => {
  service.getById(customerId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Customer with id ${customerId}.`
        })
      } else {
        res.status(500).send({
          message: `Error retrieving with id ${customerId}`
        })
      }
    } else res.send(data)
  })
}

export const updateById = ({ body, params: { customerId } }, res) => {
  if (!body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
  }

  service.updateById(customerId, body, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found with id ${customerId}.`
        })
      } else {
        res.status(500).send({
          message: `Error updating with id ${customerId}`
        })
      }
    } else res.send(data)
  })
}

export const deleted = ({ params: { customerId } }, res) => {
  service.deleted(customerId, err => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found with id ${customerId}.`
        })
      } else {
        res.status(500).send({
          message: `Could not delete with id ${customerId}`
        })
      }
    } else res.send({ message: `Data was deleted successfully!` })
  })
}

export const deletedAll = (req, res) => {
  service.deletedAll(err => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred.'
      })
    else res.send({ message: `All Data were deleted successfully!` })
  })
}

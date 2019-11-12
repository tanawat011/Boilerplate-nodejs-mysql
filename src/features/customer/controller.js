import * as service from './service'
import {
  responseSuccess,
  responseCreated,
  responseDataNotFound,
  responseBadRequest,
  responseInternalServerError
} from '../../utils/response'

export const create = ({ body }, res) => {
  if (!Object.keys(body).length)
    return responseBadRequest({ message: 'Content can not be empty!' }, res)

  service.create(body, (err, data) => {
    if (err) responseInternalServerError(err, res)
    else responseCreated(res, data)
  })
}

export const getAll = (req, res) => {
  service.getAll((err, data) => {
    if (err) return responseInternalServerError(err, res)

    if (data.length === 0) responseDataNotFound(res, data)
    else responseSuccess(res, data)
  })
}

export const getOne = ({ params: { id } }, res) => {
  service.getById(id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found')
        return responseDataNotFound(res, data, `Not found data with id ${id}.`)
      else responseInternalServerError(err, res)
    } else responseSuccess(res, data)
  })
}

export const updateById = ({ body, params: { id } }, res) => {
  if (!body) return responseBadRequest('Content can not be empty!', res)

  service.updateById(id, body, (err, data) => {
    if (err) {
      if (err.kind === 'not_found')
        return responseDataNotFound(res, data, `Not found data for updating with id ${id}.`)
      else responseInternalServerError(err, res)
    } else responseSuccess(res, data)
  })
}

export const deleted = ({ params: { id } }, res) => {
  service.deleted(id, err => {
    if (err) {
      if (err.kind === 'not_found')
        return responseDataNotFound(res, null, `Not found data for delete with id ${id}.`)
      else responseInternalServerError(err, res)
    } else responseSuccess(res, null, `Data was deleted successfully!`)
  })
}

export const deletedAll = (req, res) => {
  service.deletedAll(err => {
    if (err) {
      if (err.kind === 'not_found')
        return responseDataNotFound(res, null, `Not found data for delete.`)
      return responseInternalServerError(err, res)
    } else responseSuccess(res, null, `All Data were deleted successfully!`)
  })
}

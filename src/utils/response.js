import {
  responseStatusCodeSuccess,
  responseStatusCodeCreated,
  responseStatusCodeBadRequest,
  responseStatusCodeNotFound,
  responseStatusCodeInterServerError
} from '../constants'

export const responseSuccess = (res, data, msg) => {
    res.status(responseStatusCodeSuccess).send({
      data,
      is_error: false,
      status: 'Success',
      message: msg || 'Response success'
    })
  },
  responseCreated = (res, data, msg) => {
    res.status(responseStatusCodeCreated).send({
      data,
      is_error: false,
      status: 'Created',
      message: msg || 'Created done'
    })
  },
  responseDataNotFound = (res, data, msg) => {
    res.status(responseStatusCodeSuccess).send({
      data,
      is_error: false,
      status: 'Not Found',
      message: msg || 'Data not found'
    })
  },
  responseBadRequest = (err, res) => {
    res.status(responseStatusCodeBadRequest).send({
      data: undefined,
      is_error: true,
      status: 'Bad Request',
      message: (err ? err : err.message) || 'Bad Request'
    })
  },
  responseUrlNotFound = (err, res) => {
    res.status(responseStatusCodeNotFound).send({
      data: undefined,
      is_error: true,
      status: 'Url Not Found',
      message: (err ? err : err.message) || 'Url not found'
    })
  },
  responseInternalServerError = (err, res) => {
    res.status(responseStatusCodeInterServerError).send({
      data: undefined,
      is_error: true,
      status: 'Internal Server Error',
      message: (err ? err : err.message) || 'Internal server errror'
    })
  }

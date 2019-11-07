import {
  responseStatusCodeSuccess,
  responseStatusCodeCreated,
  responseStatusCodeNoContent,
  responseStatusCodeBadRequest,
  responseStatusCodeNotFound,
  responseStatusCodeInterServerError
} from '../constants'

export default (err, res, data) => {
  switch (err.code) {
    case responseStatusCodeCreated:
      res.status(responseStatusCodeCreated).send(data)
      break
    case responseStatusCodeNoContent:
      res.status(responseStatusCodeNoContent).send()
      break
    case responseStatusCodeBadRequest:
      res.status(responseStatusCodeBadRequest).send({
        is_error: true,
        status: 'Bad Request',
        message: ''
      })
      break
    case responseStatusCodeNotFound:
      res.status(responseStatusCodeNotFound).send({
        is_error: true,
        status: 'Not Found',
        message: ''
      })
      break
    case responseStatusCodeInterServerError:
      res.status(responseStatusCodeInterServerError).json({
        is_error: true,
        status: 'Internal Service Error',
        message: err
      })
      break
    default:
      res.status(responseStatusCodeSuccess).send(data)
      break
  }
  return
}

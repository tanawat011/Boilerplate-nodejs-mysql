import db from '../../config/db.config'

exports.query = (queryString, body) => {
  return new Promise((resolve, reject) => {
    db.query(queryString, body, (error, data) => {
      if (error) {
        return reject(error)
      }
      return resolve(data)
    })
  })
}

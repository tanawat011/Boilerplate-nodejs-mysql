import * as repo from './repository'

export const create = async (body, result) => {
  repo.create(body).then(data => {
    return result(null, { id: data.insertId, result: body, ...data })
  }).catch(err => {
    if (err) return result(err, null)
  })
}

export const getById = async (id, result) => {
  repo.getById(id).then(data => {
    if (data.length === 0) return result({ kind: 'not_found' }, null)
    return result(null, data[0])
  }).catch(err => {
    if (err) return result(err, null)
  })
}

export const getAll = async result => {
  repo.getAll().then(data => {
    return result(null, data)
  }).catch(err => {
    if (err) return result(err, null)
  })

}

export const updateById = async (id, body, result) => {
  repo.updateById(id, body).then(data => {
    return result(null, { id: id, result: body, ...data })
  }).catch(err => {
    if (err) return result(err, null)
  })

}

export const deleted = async (id, result) => {
  repo.deleted(id).then(data => {
    if (data.affectedRows === 0) return result({ kind: 'not_found' }, null)
    return result(null, data)
  }).catch(err => {
    if (err) return result(err, null)
  })
}

export const deletedAll = async result => {
  repo.deletedAll().then(data => {
    if (data.affectedRows === 0) return result({ kind: 'not_found' }, null)
    return result(null, data)
  }).catch(err => {
    if (err) return result(err, null)
  })
}

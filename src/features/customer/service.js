import * as repo from './repository'

export const create = (body, result) => {
  repo.create(body, result)
}

export const getById = (customerId, result) => {
  repo.getById(customerId, result)
}

export const getAll = result => {
  repo.getAll(result)
}

export const updateById = (id, body, result) => {
  repo.updateById(id, body, result)
}

export const deleted = (id, result) => {
  repo.deleted(id, result)
}

export const deletedAll = result => {
  repo.deletedAll(result)
}

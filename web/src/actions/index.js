import * as types from '../constants/ActionTypes'

export const setPagination = (control) => ({
  type: types.SET_PAGINATION,
  control
})

export const filterByName = (term) => ({
  type: types.FILTER_BY_NAME,
  term
})

export const sortBy = (field) => ({
  type: types.SORT_BY,
  field
})

export const pinItem = (itemId) => ({
  type: types.PIN_ITEM,
  itemId
})

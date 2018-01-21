import _ from 'lodash'
import config from '../config'
import { paginationControls } from '../utils/pagination'
import { filteringControls } from '../utils/filtering'
import { sortingControls } from '../utils/sorting'
import { bookmarkControls } from '../utils/bookmarking'
import {
  GET_PROJECTS,
  SORT_BY,
  PIN_ITEM,
  FILTER_BY_NAME,
  SET_PAGINATION
} from '../constants/ActionTypes'

const { itemsPerPage } = config.data
const data = config.api.host

const initialState = {
  items: data,
  order: 'asc',
  pinnable: true,
  pagination: {
    pages: _.size(data) / itemsPerPage,
    items: _.slice(data, 0, itemsPerPage),
    currentPage: 0,
    startIndex: 0,
    endIndex: itemsPerPage,
  },
}

export default (state = initialState, action) => {
  const pinnedItems = _.filter({ ...state.items }, ['pinned', true])
  const unpinnedItems = _.filter({ ...state.items }, ['pinned', false])
  const combinedItems = _.union(pinnedItems, unpinnedItems)

  switch (action.type) {
    case GET_PROJECTS:
      return state
    case SET_PAGINATION:
      const newPagination = paginationControls(action.control, {...state.pagination}, itemsPerPage)
      if (!newPagination) {
        return {
          ...state,
          pagination: {
            ...state.pagination,
            pages: _.floor(_.size(data) / itemsPerPage),
            items: _.slice(combinedItems, state.pagination.startIndex, state.pagination.endIndex)
          }
        }
      }
      const { startIndex, endIndex } = newPagination
      const nextIndex = (startIndex + _.size(pinnedItems))
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...newPagination,
          items: _.union(pinnedItems, _.slice(unpinnedItems, nextIndex, endIndex)),
        }
      }

    case FILTER_BY_NAME:
      const filteredResults = filteringControls({ ...state.items }, action.term)
      return {
          ...state,
          pagination: {
            ...initialState.pagination,
            items: _.slice(filteredResults, 0, itemsPerPage)
          }
      }

    case SORT_BY:
      const formatteditems = sortingControls(pinnedItems, unpinnedItems, state.order, action.field)
      return {
          ...state,
          items: formatteditems.items,
          order: formatteditems.order,
          pagination: {
            ...initialState.pagination,
            items: _.slice(formatteditems.items, 0, itemsPerPage),
          }
      }

    case PIN_ITEM:
      const selectedItem = _.find(combinedItems, ['rank', action.itemId])
      const bookmarked = bookmarkControls(selectedItem, { ...state.items })

      return {
        ...state,
        pinnable: bookmarked
      }

    default:
      return state
  }
}

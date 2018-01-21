import _ from 'lodash'

export const paginationControls = (control, pagination, itemsPerPage) => {
  let nextIndex = pagination.startIndex
  let prevIndex = pagination.endIndex
  let pageIndex = pagination.currentPage

  switch(control) {
    case 'next':
      nextIndex += itemsPerPage
      prevIndex += itemsPerPage
      pageIndex = pageIndex + 1
      break
    case 'prev':
      nextIndex -= itemsPerPage
      prevIndex -= itemsPerPage
      pageIndex = pageIndex - 1
      break
    default:
      return false
  }

  return {
      currentPage: pageIndex,
      startIndex: nextIndex,
      endIndex: prevIndex,
  }
}

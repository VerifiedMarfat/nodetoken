import _ from 'lodash'

export const sortingControls = (pinnedItems, unpinnedItems, order, field) => {
  const reverseOrder = (order === 'asc') ? 'desc' : 'asc'
  const sortField = field || 'name'
  const orderedPinnedItems = _.orderBy(pinnedItems, [sortField], [reverseOrder])
  const orderedUnpinnedItems = _.orderBy(unpinnedItems, [sortField], [reverseOrder])

  return {
    order: reverseOrder,
    items: _.union(orderedPinnedItems, orderedUnpinnedItems)
  }
}

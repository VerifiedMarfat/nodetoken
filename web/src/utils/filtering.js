import _ from 'lodash'

export const filteringControls = (items, term) => {
  const filteredResults = _.reduce(items, (result, item) => {
    if (_.includes(_.toLower(item.name), term)) result.push(item)
    return result
  }, [])

  const pinnedItems = _.filter(filteredResults, ['pinned', true])
  const unpinnedItems = _.filter(filteredResults, ['pinned', false])

  return  _.union(pinnedItems, unpinnedItems)
}

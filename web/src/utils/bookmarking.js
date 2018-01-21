import _ from 'lodash'

// @TODO add ability to unmark all
const allMarks = ['#primary', '#secondary', '#tertiary', '#quaternary', '#quinary', '#senary']

export const bookmarkControls = (selectedItem, items) => {
  const setMark = (mark = null) => {
    _.set(selectedItem, 'mark', mark)
    _.set(selectedItem, 'pinned', !selectedItem.pinned)
    return true
  }

  if (selectedItem.pinned) return setMark()

  const marksUsed = _.reduce(items, (result, item) => {
    if (item.mark) result.push(item.mark)
    return result
  }, [])
  
  const availableMarks = _.difference(allMarks, marksUsed)
  const nextMark = _.head(availableMarks)

  if (!_.size(availableMarks)) return false
  if (_.size(availableMarks) > 1) return setMark(nextMark)

  setMark(nextMark)
  return false
}

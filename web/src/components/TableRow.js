import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class TableRow extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    rank: PropTypes.number.isRequired,
    pinnable: PropTypes.bool,
    pinItemAction: PropTypes.func.isRequired
  }

  render() {
    const { rank, item, pinItemAction } = this.props
    return (
      <tr key={item.id}>
        <td>
          {rank}
        </td>
        <td>
          <button
            onClick={() => pinItemAction(item.rank)}
            disabled={(this.props.pinnable) ? true : false}
          >
            {(!item.pinned) ? 'Bookmark' : 'Remove'}
          </button>
        </td>
        <td>
          {item.mark}
        </td>
        <td>
          {item.name}
        </td>
      </tr>
    )
  }
}

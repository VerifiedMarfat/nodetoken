import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pagination extends Component {
  static propTypes = {
    setPagination: PropTypes.func.isRequired,
    pagination: PropTypes.object.isRequired,
  }

  render() {
    const { setPagination, pagination: { currentPage, pages } } = this.props
    return (
      <div>
        <button
          onClick={() => setPagination('prev')}
          disabled={(currentPage <= 0)}
        >
          previous
        </button>
        <button
          onClick={() => setPagination('next')}
          disabled={(currentPage >= pages)}
        >
          next
        </button>
      </div>
    )
  }
}
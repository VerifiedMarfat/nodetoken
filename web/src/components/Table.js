import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import TableRow from './TableRow'
import Search from './Search'
import Pagination from './Pagination'

export default class Table extends Component {
  static propTypes = {
    pagination: PropTypes.object.isRequired,
    pinnable: PropTypes.bool.isRequired,
    sortBy: PropTypes.func.isRequired,
    pinItem: PropTypes.func.isRequired,
    filterByName: PropTypes.func.isRequired,
    setPagination: PropTypes.func.isRequired,
  }

  getAllItems() {
    return _.filter(this.props.pagination.items, ['pinned', false])
  }

  getBookmarks() {
    return _.filter(this.props.pagination.items, 'pinned')
  }

  render() {
    return (
      <section>
        <Search filterByName={this.props.filterByName} />

        <table>
          <thead>
            <tr>
              <th onClick={() => this.props.sortBy('rank')} >Rank ^ </th>
              <th>Status</th>
              <th>Pin</th>
              <th></th>
              <th onClick={() => this.props.sortBy('name')} >Name ^ </th>
            </tr>
          </thead>
          <tbody>
            {_.map(this.getBookmarks(), (item, index) => (
              <TableRow key={index} rank={item.rank} item={item} pinItemAction={this.props.pinItem} />
            ))}
            <tr className="divider">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {_.map(this.getAllItems(), (item, index) => (
              <TableRow key={index} rank={item.rank} item={item} pinItemAction={this.props.pinItem}  pinnable={!this.props.pinnable} />
            ))}
          </tbody>
        </table>
        {/* @TODO display the page numbers and ability to jump between between them */}
        <Pagination setPagination={this.props.setPagination} pagination={this.props.pagination} />

      </section>
    )
  }
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoTextInput extends Component {
  static propTypes = {
    filterByName: PropTypes.func.isRequired,
  }

  state = {
    text: this.props.text || ''
  }

  handleChange = e => {
    const text = e.target.value.trim()
    this.props.filterByName(text)
    this.setState({ text })
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Filter by name"
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}
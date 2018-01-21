import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Search from '../components/Search'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import * as Actions from '../actions'

const App = ({data, actions}) => (
  <header>
    <h1>Verified Application</h1>
    <Link to="/projects">View projects</Link>
  </header>
)

App.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  data: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Table from '../components/Table'
import * as Actions from '../actions'

const Projects = ({data, actions}) => (
  <main>
    <h2>Verified Projects</h2>
    <Link to="/">Back to Dashboard</Link>
    <Table pagination={data.pagination} pinnable={data.pinnable}  {...actions} />
  </main>
)

Projects.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  data: state.projects
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)

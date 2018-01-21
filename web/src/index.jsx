import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import reducer from './reducers'

import { setPagination } from './actions'
import App from './containers/App'
import Projects from './containers/Projects'

import './styles/app.scss'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.dispatch(setPagination())

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/projects' component={Projects} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

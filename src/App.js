import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Dashboard from './containers/Dashboard'
import rootReducer from './reducers'

import './App.css'

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
  }
}

export default App

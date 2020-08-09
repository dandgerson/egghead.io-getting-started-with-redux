import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from 'store'

import App from 'components/App'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/:filter?' render={() => <App />} />
    </BrowserRouter>
  </Provider>
)

export default Root

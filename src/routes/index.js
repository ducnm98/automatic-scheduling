import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/login' exact component={LoginPage} />
      <Route path='/signup' exact component={SignupPage} />
    </Switch>
  </BrowserRouter>
)

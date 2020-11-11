import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import HomePage from '../components/Homepage'

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  )
}

export default AppRouter

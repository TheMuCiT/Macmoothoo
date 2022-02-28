import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

import Main from './pages/main/Main'
import Blog from './pages/blog/Blog'
import FAQ from './pages/faq/FAQ'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/Blog' component={Blog} />
        <Route exact path='/About' component={Main} />
        <Route exact path='/FAQ' component={FAQ} />
        <Route exact path='/Skills' component={Main} />
      </Switch>
    </Router>
  )
}

export default App

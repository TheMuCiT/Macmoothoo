import React from 'react'

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

import Main from './pages/main/Main'
import Blog from './pages/blog/Blog'
import FAQ from './pages/faq/FAQ'
import About from './pages/about/About'
import Skills from './pages/skills/Skills'
import Terms from './pages/terms/Terms'
import Policy from './pages/policy/Policy'
import BlogOne from './pages/blogOne/BlogOne'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/Blog' component={Blog} />
        <Route exact path='/Blog/:id' component={BlogOne} />
        <Route exact path='/About' component={About} />
        <Route exact path='/FAQ' component={FAQ} />
        <Route exact path='/Skills' component={Skills} />
        <Route exact path='/Terms' component={Terms} />
        <Route exact path='/Privacy' component={Policy} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import PostsForm from './components/PostsForm'
import Review from './components/Review'
import Posts from './components/Posts'
import XSSTester from './components/XSSTester'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function Header () {
  return (
    <nav className='nav'>
      <Link to='/'>View All Reviews</Link>
      <span> | </span>
      <Link to='/write-review'>New Review</Link>
    </nav>
  )
}

function App () {
  return (
    <Router>
      <Header />
      <Switch className='Content'>
        <Route exact path='/' component={Posts} />
        <Route path='/write-review' component={PostsForm} />
        <Route path='/review/:id' component={Review} />
        <Route path='/testXSS' component={XSSTester} />
        <Route component={ () => {return <h1>404: not found</h1>} } />
      </Switch>
    </Router>
  )
}

export default App
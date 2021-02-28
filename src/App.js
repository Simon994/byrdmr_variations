import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Hero from './components/Hero'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Hero} />
        <Route path = '/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

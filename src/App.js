import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Hero from './components/Hero'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/contact' component={Contact} />
        <Route exact path='/' component={Hero} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

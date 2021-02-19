import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Hero from './components/Hero'
import HeroDesktopNavbar from './components/HeroDesktopNavbar'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Hero} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

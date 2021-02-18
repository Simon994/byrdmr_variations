import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Hero from './components/Hero'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/hero' component={Hero} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

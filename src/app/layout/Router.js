import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Projects from '../Projects'

const Router = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
    </Switch>
);

export default Router
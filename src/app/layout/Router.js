import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Projects from '../Projects'
import i18n from "i18next";

class Router extends React.Component {
    render() {
        return <Switch>
            <Route exact path='/' render={() => {
                return <Home locale={i18n.language}/>;
            }}/>
            <Route exact path='/projects' render={() => {
                return <Projects locale={i18n.language}/>;
            }}/>
        </Switch>
    }
};

export default Router
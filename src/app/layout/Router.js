import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProjectsPage from '../pages/ProjectsPage'
import i18n from "i18next";
import AppAdmin from "../pages/AppAdmin";
import ProjectPage from "../pages/ProjectPage";

class Router extends React.Component {
    render() {
        return <Switch>
            <Route exact path='/' render={() => {
                return <Home locale={i18n.language}/>;
            }}/>
            <Route exact path='/projects' render={() => {
                return <ProjectsPage locale={i18n.language}/>;
            }}/>
            <Route exact path='/projects/:id' render={(props) => {
                return <ProjectPage match={props.match} locale={i18n.language}/>;
            }}/>
            <Route exact path='/admin' render={() => {
                return <AppAdmin/>;
            }}/>
        </Switch>
    }
};

export default Router
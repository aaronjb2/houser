import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/dashboard/dashboard.js';
import Wizard from './component/wizard/wizard.js';

export default (
    <Switch>
        <Route exact path= '/' component = {Dashboard}/>
        <Route exact path= '/wizard' component = {Wizard}/>
    </Switch>
)
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import  App  from './App'
import SignIn from './components/signIn'
import {Tables} from './components/tables'

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/Home" component={App} />
                <Route exact path="/">
                <Redirect to="/Home" />
                </Route>
                <Route exact path="/signIn" component={SignIn} />
                <Route exact path="/tables" component={Tables} />
            </Switch>
        </div>
    )
}

export default Routes;
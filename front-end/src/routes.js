
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import NewSpot from './pages/newSpot';



function Routes() {
    return (
        // TO call routes
        <BrowserRouter>
            
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/newspot" component={NewSpot} /> 
            </Switch>


        </BrowserRouter>
    );
}

export default Routes;

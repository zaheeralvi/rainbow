import React, { Component } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../components/home/home';

class MyRouting extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/*'>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default MyRouting;
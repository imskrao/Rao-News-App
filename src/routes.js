import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home';
import Layout from './HOC/layout/layout';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

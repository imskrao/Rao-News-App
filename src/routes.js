import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home';
import Layout from './HOC/layout/layout';
import NewsArticles from './components/articles/news/post/index';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/articles/:id" component={NewsArticles}/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

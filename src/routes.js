import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home';
import Layout from './HOC/layout/layout';
import NewsArticles from './components/articles/news/post/index';
import VideoArticles from './components/articles/videos/video/index';
import NewsMain from './components/articles/news/main/index';
import VideoMain from './components/articles/videos/main';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/news" exact component={NewsMain}/>
                        <Route path="/articles/:id" exact component={NewsArticles}/>
                        <Route path="/videos/:id" exact component={VideoArticles} />
                        <Route path="/videos" exact component={VideoMain}/>
                    </Switch>
                </Layout>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Classes from './index.module.css'
import PostHeader from './postheader';

export default class NewsArticles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            article: [],
            team: []
        }
    }

    UNSAFE_componentWillMount() {
        fetch(`http://localhost:3004/articles?id=${this.props.match.params.id}`)
        .then(response => response.json())
        .then(json => {
            let article = json[0]
            // console.log(article)

            fetch(`http://localhost:3004/teams?id=${article.team}`)
            .then(response => response.json())
            .then(json => this.setState({
                article: article,
                team: json
            }))
        })




    }

    render() {
        return (
            <div className={Classes.newsArticles}>
                <PostHeader
                    teamData={this.state.team[0]}
                    date={this.state.article.date}
                    author={this.state.article.author}
                />
                <div className={Classes.articleBody}>
                    <h1>{this.state.article.title}</h1>
                    <div className={Classes.articleImage}
                        style={{background: `url('/images/articles/${this.state.article.image}')`}}
                    ></div>
                    <div className={Classes.articleText}>
                        {this.state.article.body}
                    </div>
                </div>
            </div>
        )
    }
}

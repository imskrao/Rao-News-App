import React, { Component } from 'react'
import Classes from './index.module.css'
import Header from './header';
import VideoRelated from '../../../widgets/videos_list/videorelated/videorelated';

export default class VideoArticles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: [],
            team: [],
            teams: [],
            related: []
        }
    }

    UNSAFE_componentWillMount() {
        fetch(`http://localhost:3004/videos?id=${this.props.match.params.id}`)
        .then(response => response.json())
        .then(json => {
            let article = json[0]
            // console.log(article)

            fetch(`http://localhost:3004/teams?id=${article.team}`)
            .then(response => response.json())
            .then(json => this.setState({
                article: article,
                team: json
            }));

            this.getRelated();
        })
    }

    getRelated = () => {
        fetch('http://localhost:3004/teams')
        .then(response => response.json())
        .then(json => {
            let teams = json;

            fetch(`http://localhost:3004/videos?q=${this.state.team[0].city}&_limit=3`)
            .then(response => response.json())
            .then(json => this.setState({
                teams,
                related: json
            }))
        })
    }

    render() {
        // console.log(this.state.team)
        // console.log(this.state.related);
        // console.log(this.state.teams);
        return (
            <div className={Classes.videoArticle}>
                <Header teamData={this.state.team[0]}/>
                <div className={Classes.videoWrapper}>
                    <h1>{this.state.article.title}</h1>
                    <iframe
                        title="Video Player"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${this.state.article.url}`}
                    >
                    </iframe>
                </div>
                <VideoRelated
                    data={this.state.related}
                    teams={this.state.teams}
                />
            </div>
        )
    }
}

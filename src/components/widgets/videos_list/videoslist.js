import React, { Component } from 'react'
import Classes from './videoslist.module.css'
import { Link } from 'react-router-dom'
import VideosTemplate from './videostemplate';

export default class VideosList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: [],
            videos: [],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount
        }
    }

    UNSAFE_componentWillMount() {
        this.request(this.state.start, this.state.end);
    }

    request = (start, end) => {
        if(this.state.teams.length < 1) {
            fetch(`http://localhost:3004/teams`)
            .then(response => response.json())
            .then(json => this.setState({
                teams: json
            }))
        }

        fetch(`http://localhost:3004/videos?_start=${start}&_end=${end}`)
        .then(response => response.json())
        .then(json => this.setState({
            videos: [...this.state.videos, ...json]
        }))
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end)
    }

    renderVideos = () => {
        let template = null;
            if(this.state.videos.length && this.state.teams.length) {
                switch(this.props.type) {
                    case('card'):
                        template = <VideosTemplate videos={this.state.videos} teams={this.state.teams} />
                        break;
                    default:
                        template = null;
                }
            }

        return template;
    }

    renderTitle = () => {
        return this.props.title ? <h3><strong>Rao</strong> Videos</h3> : null;
    }

    renderButton = () => {
        return this.props.loadmore ? (<button className={Classes.loadMore} onClick={() => this.loadMore()}>Load More</button>) : <button className={Classes.loadMoreBtn}>
            <Link to="/videos">Load More Videos</Link>
        </button>;
    }

    render() {
        // console.log(this.state.videos);

        return (
            <div className={Classes.videoslist_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}

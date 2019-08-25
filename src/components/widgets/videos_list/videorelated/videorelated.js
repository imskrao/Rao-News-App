import React, { Component } from 'react'
import Classes from './videorelated.module.css'
import VideosTemplate from '../videostemplate';

export default class VideoRelated extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className={Classes.videorelated}>
                <VideosTemplate
                    videos={this.props.data}
                    teams={this.props.teams}
                />
            </div>
        )
    }
}

import React, { Component } from 'react'
import SlidderTemplates from './slidder_templates';

export default class NewsSlidder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
        }
    }

    UNSAFE_componentWillMount() {
        fetch(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.end}`)
        .then(response => response.json())
        .then(json => this.setState({
            news: json
        }))
    }

    render() {
        // console.log(this.state.news)
        return (
            <div>
                <SlidderTemplates data={this.state.news} type={this.props.type} />
            </div>
        )
    }
}

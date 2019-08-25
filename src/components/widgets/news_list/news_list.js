import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import Classes from './news_list.module.css'
import CardInfo from '../card_info/cardinfo';

export default class NewsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: [],
            items: [],
            start: this.props.start,
            end: this.props.start + this.props.amount,
            amount: this.props.amount
        }
    }

    UNSAFE_componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        if(this.state.teams.length < 1) {
            fetch(`http://localhost:3004/teams`)
            .then(response => response.json())
            .then(json => this.setState({
                teams: json
            }))
        }

        fetch(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
        .then(response => response.json())
        .then(json => this.setState({
            items: [...this.state.items, ...json]
        }))
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end,end)
    }

    renderNews = (type) => {
        let template = null;

        switch(type) {
            case('card'):
                template = this.state.items.map((item, i) => {
                    return (
                        <CSSTransition
                            key={i}
                            classNames={{
                                enter: Classes.new_list_wrapper,
                                enterActive: Classes.new_list_wrapper_enter
                            }}
                            timeout={500}
                        >
                            <div className={Classes.new_list_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </CSSTransition>
                    )
                })
                break;
            case('cardMain'):
                template = this.state.items.map((item, i) => {
                    return (
                        <CSSTransition
                            key={i}
                            classNames={{
                                enter: Classes.new_list_wrapper,
                                enterActive: Classes.new_list_wrapper_enter
                            }}
                            timeout={500}
                        >
                            <div className={Classes.new_list_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <div className={Classes.flex_wrapper}>
                                        <div
                                            className={Classes.left}
                                            style={{background: `url('/images/articles/${item.image}')`}}
                                        >
                                            <div></div>
                                        </div>
                                        <div className={Classes.right}>
                                            <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                            <h2>{item.title}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </CSSTransition>
                    )
                })
                break;
            default:
                template = null;
        }

        return template;
    }


    render() {
        // console.log(this.state.teams)
        return (
            <div>
                <TransitionGroup component="div" className={Classes.list}>
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <button onClick={() => this.loadMore()} className={Classes.loadMoreBtn}>
                    LOAD MORE NEWS
                </button>
            </div>
        )
    }
}

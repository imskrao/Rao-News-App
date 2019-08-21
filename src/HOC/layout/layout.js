import React, { Component } from 'react'
import './layout.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showNav: false
        }
    }

    toggleSideNav = (action) => {
        this.setState({
            showNav: action
        })
    }

    render() {
        return (
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSideNav(false)}
                    onOpenNav={() => this.toggleSideNav(true)}
                />
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

import React from 'react'
import Classes from './header.module.css'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import SideNavigation from './sidenav';

export default function Header(props) {
    const navBar = () => {
        return (
            <div className={Classes.navBar} onClick={props.onOpenNav}>
                <FontAwesome name="bars" />
            </div>
        )
    }
    const logo = () => {
        return (
            <div>
                <Link to="/" className={Classes.logo}>
                    {/* <img alt="Rao logo" src="/images/rao_logo.png"/> */}
                    <h2>Rao</h2>
                </Link>
            </div>
        )
    }

    return (
        <div className={Classes.header}>
            <SideNavigation {...props} />
            <div className={Classes.headerOptions}>
                {navBar()}
                {logo()}
            </div>
        </div>
    )
}

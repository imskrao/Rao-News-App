import React from 'react'
import SideNav from 'react-simple-sidenav'
import Classes from './sidenav.module.css'
import SideNavItems from './sidenavitems';

export default function SideNavigation(props) {
    return (
        <div>
            <SideNav showNav={props.showNav} onHideNav={props.onHideNav} navStyle={{maxWidth: '240px'}}>
                <div className={Classes.SideNav}>
                    <SideNavItems/>
                </div>
            </SideNav>

        </div>
    )
}

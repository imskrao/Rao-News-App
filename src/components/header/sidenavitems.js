import React from 'react'
import Classes from './sidenavitems.module.css'
import FontAwesom from 'react-fontawesome'
import { Link } from 'react-router-dom'

export default function SideNavItems() {
    const items = [
        {
            type: Classes.options,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: Classes.options,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: Classes.options,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: Classes.options,
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: Classes.options,
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]

    const ShowItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesom name={item.icon} />
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {ShowItems()}
        </div>

    )
}

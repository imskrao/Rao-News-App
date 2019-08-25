import React from 'react'
import Classes from './teaminfo.module.css'

export default function TeamInfo(props) {
    return (
        <div className={Classes.teaminfo}>
            <div
                className={Classes.left}
                style={{background: `url('/images/teams/${props.team.logo}')`}}
            >
                <div></div>
            </div>
            <div className={Classes.right}>
                <div>
                    <span>{props.team.city}</span>
                    <span>{props.team.name}</span>
                </div>
                <div>
                    <strong>W{props.team.stats[0].wins} - L{props.team.stats[0].defeats}</strong>
                </div>
            </div>
        </div>
    )
}

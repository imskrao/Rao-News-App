import React from 'react'
import Classes from './cardinfo.module.css'
import FontAwesome from 'react-fontawesome'

export default function CardInfo (props) {
    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.id === team
        });

        if(data) {
            return data.name;
        }
    }

    return (
        <div className={Classes.cardinfo}>
            <span className={Classes.teamName}>
                {teamName(props.teams, props.team)}
            </span>
            <span className={Classes.date}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
}

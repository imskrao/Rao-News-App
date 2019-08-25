import React from 'react'
import TeamInfo from '../../elements/teaminfo';

export default function Header(props) {
    const teamInfo = (team) => {
        return team ? (<TeamInfo team={team}/>) : null;
    }

    return (
        <div>
            {teamInfo(props.teamData)}
        </div>
    )
}

import React from 'react'
import Classes from './videostemplate.module.css'
import { Link } from 'react-router-dom'

export default function VideosTemplate(props) {
    // console.log("----------------",props)
    return props.videos.map((item, i) => {
        return (
        <Link to={`/videos/${item.id}`} key={i}>
            <div className={Classes.videostemplate}>
                <div className={Classes.left}
                    style={{background: `url(/images/videos/${item.image})`}}
                >
                    <div></div>
                </div>
                <div className={Classes.right}>
                    <div className={Classes.dateTeam}>
                        <span className={Classes.teamName}>
                            {teamName(props.teams, item.id)}
                        </span>
                        <span className={Classes.date}>
                            {item.date}
                        </span>
                    </div>
                    <h2>
                        {item.title}
                    </h2>



                </div>
            </div>
        </Link>
        )
    })
}


function teamName (teams, key){
    let currentTeam = teams.filter((teamItem)=>{
        return teamItem.id === key
    })
    return currentTeam[0]['name'];
}
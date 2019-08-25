import React from 'react'
import TeamInfo from '../../elements/teaminfo';
import PostData from '../../elements/postdata';

export default function PostHeader(props) {
    const teamInfo = (team) => {
        return team ? (<TeamInfo team={team}/>) : null;
    }

    const postData = (date, author) => {
        return (
            <PostData date={date} author={author} />
        )
    }

    return (
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date, props.author)}
        </div>
    )
}

import React from 'react'
import VideosList from '../../../widgets/videos_list/videoslist';

export default function VideoMain() {
    return (
        <div>
            <VideosList type="card" title={false} loadmore={true} start={0} amount={8}/>
        </div>
    )
}

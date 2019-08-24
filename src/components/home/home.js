import React, { Component } from 'react'
import NewsSlidder from '../widgets/news_slidder/slidder';
import NewsList from '../widgets/news_list/news_list';
import VideosList from '../widgets/videos_list/videoslist';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NewsSlidder type="featured" start={0} end={4}/>
                <NewsList type="card" loadmore={true} start={3} amount={3}/>
                <VideosList type="card" title={true} loadmore={false} start={0} amount={3}/>
            </div>
        )
    }
}

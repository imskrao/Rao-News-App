import React, { Component } from 'react'
import NewsSlidder from '../../../widgets/news_slidder/slidder';
import NewsList from '../../../widgets/news_list/news_list';

export default class NewsMain extends Component {
    render() {
        return (
            <div>
                <NewsSlidder type="featured" start={0} end={4}/>
                <NewsList type="cardMain" loadmore={true} start={4} amount={10}/>
            </div>
        )
    }
}

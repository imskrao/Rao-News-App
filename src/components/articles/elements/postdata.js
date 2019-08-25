import React from 'react'
import Classes from './articlepostdata.module.css'

export default function PostData(props) {
    return (
        <div className={Classes.articlepostdata}>
            <div>
                Date: <span>{props.date}</span>
            </div>
            <div>
                Author: <span>{props.author}</span>
            </div>
        </div>
    )
}

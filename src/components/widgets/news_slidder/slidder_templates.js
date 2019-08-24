import React from 'react'
import Slick from 'react-slick'
import Classes from './slidder_templates.module.css'
import { Link } from 'react-router-dom'

export default function SlidderTemplates(props) {
    let template = null;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

      switch(props.type) {
          case('featured'):
            template = props.data.map((item, i) => {
                return (
                    <div key={i}>
                        <div className={Classes.featured_item}>
                            <div
                                className={Classes.featured_image}
                                 style={{background: `url(../images/articles/${item.image})`}}>
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={Classes.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
          break;
          default:
            template = null;
      }

    return (
        <div>
            <Slick {...settings} >
                {template}
            </Slick>
        </div>
    )
}

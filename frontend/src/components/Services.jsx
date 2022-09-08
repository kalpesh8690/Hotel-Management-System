import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free Soda",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "To walk in nature is to witness a thousand miracles...'Anonymous'"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Free Shuttle Service Between West Phase and East Phase"
            },
            {
                icon:<FaBeer/>,
                title: "Unlimited Coffee",
                info: "Good communication is just as stimulating as black coffee, and just as hard to sleep after."
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}
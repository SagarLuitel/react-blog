import React from 'react'
import { RecentProjects } from '../recentprojects/RecentProjects'
import { Subscription } from '../subscriptiom/Subscription'
import { Upcoming } from '../upcomingposts/Upcoming'


export const FeaturedPost = () => {
    return (
        <div className="featuredPostContainer">
            <div className="featuredPost">
                
                <h4> Featured Post </h4>
                <h5>Title</h5>
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80" alt="img" />
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</h6>
        </div>
        <div className="upComing Posts">
            <Upcoming />
            <RecentProjects/>
            <Subscription />
        </div>
        </div>
    )
}

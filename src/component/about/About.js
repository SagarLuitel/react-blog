import "./about.css"
import { Subscription } from "../subscriptiom/Subscription"
import { Upcoming } from "../upcomingposts/Upcoming"
import { RecentProjects } from "../recentprojects/RecentProjects"

export const About = () => {
    return (
        <div className="about">
            <div className="about-container">
           <p> Hi, i am Sagar. I am a recent Information System graduate with minor in software engineering. I am in look out for associate/graduate software development role. I specialize in MERN Stack as well as in Java. </p>
           <h3>Why software engineering?</h3>
           <p>I never realised that coding will be something i would love to do. It really took me a long time to figure it out. Working for 3 years in bank, plus 2 more years in IT support, while doing my Masters, i used to think i would i'd work on IT support in a financial institution or a fintech. But in last four five months, i have fallen in love with coding. I feel that programmers are like artists. Artist mix different colors and styles to create art. Programmers also in a way do the same. With a laptop as their canvas, programmers can create wonderful applications. Software designing gives me this exact freedom to create whatever i want.  </p>
           <h3> A brief history on my career</h3>
           <p>I started my professional journey from Nepal in a Commercial Bank. I initially worked as a trainee on various projects as business analyst and associate project manager. I am thankful to this role as it brought out the extovert in me. Juggling multiple projects and managing stakeholders gave me strenght to work under pressure. All in all, i grew a lot. Just like people level up in games, i also leveled up through this role during my three year career.</p> 
            <h3>Journey to Australia</h3>
            <p>I also realised the role of tech in banking as well as any industry as the company i was working for started to lunch technology transformation projects. I also realised other competitors were strongly adopting new technology to gain competitive advantage. This made me ralise that i had to upskill myself.</p>
            <h3>Whats next</h3>
            <p>This blog is my second application that i built myself. I hope to continue to post interesting contents that will both help and inspire people. </p>

            <h3>There is much for me to learn and discover. As Buzz Lightyear would say.."to infinity ...and beyond!"</h3>
        </div>
        <div>
            <Upcoming />
            <RecentProjects />
            <Subscription />
            </div>

        </div>
    )
}

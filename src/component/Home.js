import { Categories } from "./categories/Categories"
import { FeaturedPost } from "./featuredComponent/FeaturedPost"
import { Navbar } from "./nav_component/Navbar"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { About } from "./about/About"
import { Recentpost } from "./recent/Recentpost"
import { Subscription } from "./subscriptiom/Subscription"
import { Blog } from "./blog/Blog"
import { Blogpage } from "./blogpage/Blogpage"


export const Home = () => {
    return (
        <Router>
        <div className="home">
        <Navbar />
            <Switch>
                <Route exact path="/"> 
                    <FeaturedPost />
                    <Categories />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/recent">
                    <Recentpost />
                </Route>
                <Route exact path="/joinnewsletter">
                    <Subscription />
                </Route>
                <Route exact path="/blog/:id">
                    <Blogpage/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

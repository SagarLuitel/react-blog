import React from 'react'
import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
       
        <div className="navbar">
            <div className="container">
                <div className="left">
                    {/* <img src="nav_component/bloglogo.png" alt="Dev-Blog"/> */}
                    <span>
                        <Link to ="/">Homepage</Link>
                    </span>
                    <span>
                         <Link to="/recent">Recent Posts</Link></span>
                    <span> 
                        <Link to="/about">About Me</Link>
                    </span>

                </div>
                <div className="right">
                    <span> 
                        <SearchIcon className="logo" /> 
                        </span>
                    <span> 
                    <Link to="/joinnewsletter"><SubscriptionsSharpIcon className="logo"/> </Link>
                    </span>

                </div>
            </div>
            <hr />
        </div>
    )
}

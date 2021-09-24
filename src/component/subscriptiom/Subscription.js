import React from 'react'

export const Subscription = () => {
    return (
        <div className="subscriptionContainer">
            <p> Join the Newsletter</p>
            <h6>Get new contents on software design topics</h6>
            <form className="subscriptionform">
                <input type="text" placeholder="Name" name="name" required />
                <input type="text" placeholder="Email address" name="mail" required />
                <input type="submit" value="Subscribe" />
            </form>
        </div>
    )
}
import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/">
                <p>Pokedex</p>
            </Link>
            <Link to="/myteam">
                <p>My Team</p>
            </Link>
        </div>
    )
}

export default Nav
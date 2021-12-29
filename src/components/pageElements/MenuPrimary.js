import React from "react"
import { Link } from "gatsby"
import "../../styles/menuPrimary.scss"


class MenuPrimary extends React.Component {

    render() {

        return (
            <div className="menu-primary">
                 <ul>
                    <li><Link to="/">Home</Link></li>
                     <li><Link to="/start">Getting Started</Link></li>
                     <li><Link to="/tot-life">Tot Life Magazine</Link></li>
                     <li><Link to="/help">Help Center</Link></li>
                 </ul>
            </div>
        )
    }
}


export default MenuPrimary;
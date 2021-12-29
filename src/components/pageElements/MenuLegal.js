import React from "react"
import { Link } from "gatsby"

class MenuLegal extends React.Component {

    render() {

        return (
            <div className="menu-legal footnote">
                <ul>
                    <li><a href="https://www.affirmxh.com/conditions-of-use" target="_blank" rel="noreferrer">Conditions of Use</a></li>
                    <li><a href="https://www.affirmxh.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                    <li><Link to="/cookies">Cookies</Link></li>
                </ul>
            </div>

        )
    }
}


export default MenuLegal;

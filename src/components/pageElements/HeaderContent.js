import React from "react"
import { Link } from "gatsby"
import "../../styles/headerContent.scss"
import Sidebar from "./Sidebar"
import logo from "../../assets/images/welltot_logo.svg"


class HeaderContent extends React.Component {

  render() {

    return (
      <div className="header-content">
          <div className="header-logo">
            <Link to="/"><img src={logo} alt="Welltot Logo" /></Link>
          </div>
          <div className="header-sidebar">
              <Sidebar/>
          </div>
      </div>
    )
  }
}

export default HeaderContent;
import React from "react"
import { Link } from "gatsby"
import "../../styles/footerContent.scss"


class FooterContent extends React.Component {

  render() {

    var currentYear = new Date().getFullYear();

    return (
      <div className="footerContent">
          <div className="footer1">
              <div className="footer1Content question">
                  <div className="container">
                      <h4>Have a question?</h4>
                      <p><Link to="/help">Visit Help Center</Link></p>
                      <p><a href="mailto:help@welltot.com" target="_blank" rel="noreferrer">help@welltot.com</a></p>
                  </div>
              </div>
              <div className="footer1Content links">
                  <div className="container">
                      <ul>
                          <li><Link to="/getting-started">Getting Started</Link></li>
                          <li><Link to="/tot-life">Tot Life Magazine</Link></li>
                          <li><a href="https://www.amazon.com" target="_blank" rel="noreferrer">Buy Now from Amazon</a></li>
                      </ul>
                  </div>
              </div>
              <div className="footer1Content affirmxh">
                  <div className="container">
                      <p><small>Welltot is an AffirmXH company<br />
                          <a href="https://www.affirmxh.com" target="_blank" rel="noreferrer">www.AffirmXH.com</a></small></p>
                  </div>
              </div>
          </div>
        <div className="footer2">
            <Link to="/privacy">Privacy Policy</Link> | <Link to="/conditions-of-use">Conditions of Use</Link>
            <p><small>Copyright&copy; {currentYear} AffirmXH. All rights reserved.</small></p>
        </div>
      </div>
    )
  }
}


export default FooterContent;

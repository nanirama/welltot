import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from "../components/layouts/LayoutMain"
import CookiePolicyFullContent from "../components/cookiePolicy/CookiePolicyFullContent"


class CookiePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showheadline:1
    }
  }


  render() { 
    return (
      <LayoutMain>
        <Helmet>
          <title>Cookies</title>
          <meta
            name="cookies"
            content="Information on cookies for AffirmXH"
          />
        </Helmet>

        <div className="container-cookie">

          <CookiePolicyFullContent />

        </div>
      </LayoutMain>
    )
  }
}

export default CookiePage

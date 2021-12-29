import React from "react";
import { Helmet } from "react-helmet";
import LayoutMain from "../components/layouts/LayoutMain"

class pageNotFound extends React.Component {

  render() {
    return (
      <LayoutMain>
        <Helmet>
          <title>AffirmXH</title>
          <meta
            name="description"
            content="Page not found"
          />
        </Helmet>

        <div>
          <h3>This page can not be found.</h3>
        </div>


      </LayoutMain>
    )
  }
}
export default pageNotFound;
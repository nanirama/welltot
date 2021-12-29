import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from "../components/layouts/LayoutMain"
import "../styles/pageGettingStarted.scss"


const GettingStartedPage = (props) => (

    <LayoutMain>
        <Helmet>
            <title>Getting Started</title>
            <meta
                name="description"
                content="Getting Started"
            />
            <bodyAttributes
                className="theme1"
            />
        </Helmet>


        <div className="container-gettingStarted">

            <div className="gettingStarted">
                <h1>Getting Started</h1>

            </div>

        </div>


    </LayoutMain>
)

export default GettingStartedPage




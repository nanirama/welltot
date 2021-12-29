import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from "../components/layouts/LayoutMain"
import "../styles/pageHelpCenter.scss"


const HelpCenterPage = (props) => (

    <LayoutMain>
        <Helmet>
            <title>Help Center</title>
            <meta
                name="description"
                content="Help center"
            />
            <bodyAttributes
                className="theme1"
            />
        </Helmet>


        <div className="container-helpCenter">

            <div className="helpCenter">
                <h1>Help Center</h1>

            </div>

        </div>


    </LayoutMain>
)

export default HelpCenterPage




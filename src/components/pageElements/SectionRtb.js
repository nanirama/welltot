import React from "react"
import "../../styles/sectionRtb.scss"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../../assets/images/welltot_logo.svg";


class SectionRtb extends React.Component {

    render() {
        return (

            <div className="sectionRtb">
                <div className="img1">
                    <StaticImage
                        src="../../assets/images/page-images/boy-wearing-affirmxh.jpg"
                        alt="Boy wearing AffirmXH Patch"
                        placeholder="blurred"
                        layout="fullWidth"
                        quality={100}
                    />
                </div>
                <div className="wellTotLogo">
                    <img src={logo} alt="Welltot Logo" />
                </div>

                <div className="rtb">
                    <div className="copy rtb1">
                        <h3>Over 50 trended temperature readings per hour</h3>
                    </div>
                    <div className="copy rtb2">
                        <h3>Mobile phone connected</h3>
                    </div>
                    <div className="copy rtb3">
                        <h3>6-month disposable patch</h3>
                    </div>
                </div>


            </div>

        )
    }
}

export default SectionRtb







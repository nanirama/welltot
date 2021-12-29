import React from "react"
import "../../styles/sectionBillboard.scss"
import { StaticImage } from "gatsby-plugin-image"


class SectionBillboard extends React.Component {

    render() {
        return (

            <div className="sectionBillboard">
                <div className="img1">
                    <StaticImage
                        src="../../assets/images/page-images/mom-and-child.jpg"
                        alt="Welltot"
                        placeholder="blurred"
                        layout="fullWidth"
                        quality={100}
                    />
                </div>
                <div className="copyMain">
                    <h1>Compassionate Love</h1>
                    <h2>Welltot supports you with continuous fever monitoring, so you can focus on being your child's mom.</h2>
                </div>
                <div className="phrase phrase1">
                    <p>Holding your crying child</p>
                </div>
                <div className="phrase phrase2">
                    <p>Letting them sleep</p>
                </div>
                <div className="phrase phrase3">
                    <p>3rd time you have been up</p>
                </div>
                <div className="phrase phrase4">
                    <p>101-degree temperatures</p>
                </div>
                <div className="phrase phrase5">
                    <p>Knowing when the Tylenol kicks in</p>
                </div>
            </div>

        )
    }
}

export default SectionBillboard







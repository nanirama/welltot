import React from "react"
import "../../styles/sectionHowItWorks.scss"


class SectionHowItWorks extends React.Component {

    render() {
        return (

            <div className="sectionHowItWorks">
                <div className="sectionHeader">
                    <h2>How it works</h2>
                </div>
                <div className="steps">
                    <ol>
                        <li>Download the app & connect the patch</li>
                        <li>Have your child wear the fever monitor patch (either by the chest harness or the adhesive tabs)</li>
                        <li>Place an iPhone (or another iOS device) with the app installed by the child to receive the readings</li>
                        <li>Monitor fever from any iPhone.*</li>
                    </ol>
                </div>
                <div className="copyFootnote">
                    <small>*This can be the same phone as the one near the child, or multiple phones logged into the same account.  We are always looking at different devices that can act as a hub near the child.</small>
                </div>
            </div>
        )
    }
}

export default SectionHowItWorks







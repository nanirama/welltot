import React from "react"
import FormContact from './FormContact'
import "../../styles/sectionContact.scss"


class SectionContact extends React.Component {

    render() {
        return (

            <div className="contactSection">

                <div className="contactMessage">
                    <h2>Contact Us</h2>
                    <p>We love to hear from people interested in helping us change the world.  Leave us a message, and we will get back to you.</p>
                </div>
                <div className="contactForm">
                    <FormContact/>
                </div>

            </div>

        )
    }
}

export default SectionContact

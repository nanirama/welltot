import React from "react"
import FormContact from './FormContact'
import "../../styles/sectionContact.scss"
import Typography from "@material-ui/core/Typography";

class SectionContact extends React.Component {
    render() {
        return (
            <div className="contactSection">
                <div className="contactMessage">
                    <Typography variant="h2" color="textsecondary">Contact Us</Typography>
                    <Typography variant="body1" color="textsecondary">We love to hear from people interested in helping us change the world.  Leave us a message, and we will get back to you.</Typography>
                </div>
                <div className="contactForm">
                    <FormContact/>
                </div>
            </div>
        )
    }
}
export default SectionContact

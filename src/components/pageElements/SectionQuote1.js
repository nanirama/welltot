import React from "react"
import "../../styles/sectionQuote1.scss"
import Typography from "@material-ui/core/Typography";

class SectionQuote1 extends React.Component {
    render() {
        return (
            <div className="sectionQuote1">
                <div className="quoteCopy">
                    <blockquote>&ldquo;I am glad I didn't have to wake my daughter again to take her temperature.&rdquo;</blockquote>
                </div>
                <div className="byLine">
                    <Typography variant="body1" color="textsecondary">Heather, mom of a 2-year-old</Typography>
                </div>
            </div>
        )
    }
}
export default SectionQuote1
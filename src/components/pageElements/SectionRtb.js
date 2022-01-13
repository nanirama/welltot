import React from "react"
import "../../styles/sectionRtb.scss"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../../assets/images/welltot_logo.svg";
import Typography from "@material-ui/core/Typography";
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
         <Typography variant="h3" color="textPrimary">Over 50 trended temperature readings per hour</Typography>
      </div>
      <div className="copy rtb2">
         <Typography variant="h3" color="textPrimary">Mobile phone connected</Typography>
      </div>
      <div className="copy rtb3">
         <Typography variant="h3" color="textPrimary">6-month disposable patch</Typography>
      </div>
   </div>
</div>
)
}
}
export default SectionRtb

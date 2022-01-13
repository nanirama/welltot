import React from "react"
import "../../styles/sectionBillboard.scss"
import { StaticImage } from "gatsby-plugin-image"
import Typography from "@material-ui/core/Typography";
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
      <Typography variant="h1"  color="textPrimary">Compassionate Love</Typography>
      <Typography variant="h2" color="textWhite">Welltot supports you with continuous fever monitoring, so you can focus on being your child's mom.</Typography>
   </div>
   <div className="phrase phrase1">
      <Typography variant="body1">Holding your crying child</Typography>
   </div>
   <div className="phrase phrase2">
      <Typography variant="body1">Letting them sleep</Typography>
   </div>
   <div className="phrase phrase3">
      <Typography variant="body1">3rd time you have been up</Typography>
   </div>
   <div className="phrase phrase4">
      <Typography variant="body1">101-degree temperatures</Typography>
   </div>
   <div className="phrase phrase5">
      <Typography variant="body1">Knowing when the Tylenol kicks in</Typography>
   </div>
</div>
)
}
}
export default SectionBillboard
import React from "react"
import "../../styles/sectionProductImages.scss"
import { StaticImage } from "gatsby-plugin-image"
class SectionProductImages extends React.Component {
render() {
return (
<div className="sectionProductImages">
   <div className="productImage image1">
      <StaticImage
         src="../../assets/images/page-images/holding-smartphone.jpg"
         alt="Welltot"
         placeholder="blurred"
         layout="fullWidth"
         quality={100}
         />
   </div>
   <div className="productImage image2">
      <StaticImage
         src="../../assets/images/page-images/baby-wearing-affirmxh.jpg"
         alt="Welltot"
         placeholder="blurred"
         layout="fullWidth"
         quality={100}
         />
   </div>
   <div className="productImage image3">
      <StaticImage
         src="../../assets/images/page-images/holding-smartphone-2.jpg"
         alt="Welltot"
         placeholder="blurred"
         layout="fullWidth"
         quality={100}
         />
   </div>
</div>
)
}
}
export default SectionProductImages

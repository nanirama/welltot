import React from "react"
import "../../styles/sectionBuyNow.scss"
import Button from '@material-ui/core/Button'
import makeStyles from "@material-ui/core/styles/makeStyles";
const SectionBuyNow = () => { 
const useStyles = makeStyles({
button: {
    paddingTop:0,
    paddingBottom:0,
    textTransform: 'none',
    fontSize: '1.3rem',
},
});
const classes = useStyles();
return (
<div className="sectionBuyNow">
   <Button href="https://www.amazon.com" target="_blank" rel="noreferrer" color="primary" variant="button" className={classes.button}>Buy a Welltot Monitor</Button>
</div>
)
}
export default SectionBuyNow
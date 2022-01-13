import React from "react"
import { Link } from "gatsby"
import "../../styles/footerContent.scss"
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const FooterContent = () => {
var currentYear = new Date().getFullYear();
const useStyles = makeStyles({
title: {
    fontSize:'1.3rem',
    marginBottom:'14px'
},
text: {
    marginBottom:'1rem'
},
listitems:{
    display:'flex',
    justifyContent:'center'
}
});
const classes = useStyles();
return (
<div className="footerContent">
   <div className="footer1">
      <div className="footer1Content question">
         <div className="container">
            <Typography variant="h4" className={classes.title}>Have a question?</Typography>
            <Typography variant="body1" className={classes.text}>
               <Link to="/help">
               Visit Help Center</Link>
            </Typography>
            <Typography variant="body1"><a href="mailto:help@welltot.com" target="_blank" rel="noreferrer">help@welltot.com</a></Typography>
         </div>
      </div>
      <div className="footer1Content links">
         <div className="container">
            <List>
               <ListItem className={classes.listitems}>
                  <Link to="/getting-started">
                  Getting Started</Link>
               </ListItem>
               <ListItem className={classes.listitems}>
                  <Link to="/tot-life">
                  Tot Life Magazine</Link>
               </ListItem>
               <ListItem className={classes.listitems}>
                  <Link to="https://www.amazon.com" target="_blank" rel="noreferrer">
                  Buy Now from Amazon</Link>
               </ListItem>
            </List>
         </div>
      </div>
      <div className="footer1Content affirmxh">
         <div className="container">
            <Typography variant="body1"><small>Welltot is an AffirmXH company<br />
               <a href="https://www.affirmxh.com" target="_blank" rel="noreferrer">www.AffirmXH.com</a></small>
            </Typography>
         </div>
      </div>
   </div>
   <div className="footer2">
      <Typography variant="body1">
         <Link to="/privacy">
         Privacy Policy</Link> | 
         <Link to="/conditions-of-use">
         Conditions of Use</Link>
      </Typography>
      <Typography variant="body1"><small>Copyright&copy; {currentYear} AffirmXH. All rights reserved.</small></Typography>
   </div>
</div>
)
}
export default FooterContent;
import React from "react"
import { Link } from "gatsby"
import "../../styles/headerContent.scss"
import Sidebar from "./Sidebar"
import logo from "../../assets/images/welltot_logo.svg"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainNavigation from "./mainnavigation"
const HeaderContent = () => {
const useStyles = makeStyles({
appbar: {
  backgroundColor:'#fff',
  boxShadow:'none',
  padding:'0 10px 0 30px',
  backgroundImage:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 98%, rgba(0, 0, 0, 0.3) 100%)',
},
toolbar: {
  display:'flex',
  justifyContent: 'space-between',
},
logo: {
  width:'100px',
  height:'100px',
},
});
const classes = useStyles();
return (
//<div className="header-content">
   //   {/* <Button color="primary" typography="fontFamily" variant="contained">Sleep More</Button> */}
   //  <div className="header-logo">
      //  <Link to="/">   <img src={logo} alt="Welltot Logo" /></Link>
      // </div>
   // <div className="header-sidebar">
      //<Sidebar/>
      // </div>
   //</div>
<>
<AppBar position="static" className={classes.appbar}>
   <Toolbar className={classes.toolbar}>
      <Link to="/">
      <img className={classes.logo} src={logo} alt="Welltot Logo" /></Link>
      <MainNavigation/>
   </Toolbar>
</AppBar>
</>
)
}
export default HeaderContent;
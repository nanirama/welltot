import React from "react"
import "../../styles/cookie-policy.scss"
import Typography from "@material-ui/core/Typography";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from '@material-ui/core/Button'

// works with Google Tag Manager
// allow-analytics-cookies
// allow-marketing-cookies
// allow-performance-cookies


class CookiePolicy extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      AllowAnalyticsCookies: null,
      AllowMarketingCookies: null,
      AllowPerformanceCookies: null,
    }


    this.getCookies = this.getCookies.bind(this)
    this.allowAllCookies = this.allowAllCookies.bind(this)
    this.togglePerformanceCookie = this.togglePerformanceCookie.bind(this)
    this.toggleAnalyticsCookie = this.toggleAnalyticsCookie.bind(this)
    this.toggleMarketingCookie = this.toggleMarketingCookie.bind(this)
  }

  componentDidMount() {
    // Check the cookies
    this.getCookies()
  }

  getCookies() {
    // Check the cookies
    this.setState({
      AllowAnalyticsCookies: getCookie('allow-analytics-cookies'),
      AllowMarketingCookies: getCookie('allow-marketing-cookies'),
      AllowPerformanceCookies: getCookie('allow-performance-cookies'),
    });
  }


  allowAllCookies() {
    document.cookie = getCookieString("allow-analytics-cookies", "yes")
    document.cookie = getCookieString("allow-marketing-cookies", "yes")
    document.cookie = getCookieString("allow-performance-cookies", "yes")
    this.getCookies();
  }


  togglePerformanceCookie() {
    if (this.state.AllowPerformanceCookies === 'no') {
      document.cookie = getCookieString("allow-performance-cookies", "yes")
    } else {
      document.cookie = getCookieString("allow-performance-cookies", "no")
    }
    this.getCookies();
  }

  toggleAnalyticsCookie() {
    if (this.state.AllowAnalyticsCookies === 'no') {
      document.cookie = getCookieString("allow-analytics-cookies", "yes")
    } else {
      document.cookie = getCookieString("allow-analytics-cookies", "no")
    }
    this.getCookies();
  }

  toggleMarketingCookie() {
    if (this.state.AllowMarketingCookies === 'no') {
      document.cookie = getCookieString("allow-marketing-cookies", "yes")
    } else {
      document.cookie = getCookieString("allow-marketing-cookies", "no")
    }
    this.getCookies();
  }

  render() {

    let classSwitchPerformance = 'switch';
    classSwitchPerformance += ' cookie-performance-switch';
    if (this.state.AllowPerformanceCookies === 'yes') {
      classSwitchPerformance += ' checked'
    } else if (this.state.AllowPerformanceCookies === 'no') {
      classSwitchPerformance += ' unchecked'
    } else {
      classSwitchPerformance += ' null';
    }


    let classSwitchAnalytics = 'switch';
    classSwitchAnalytics += ' cookie-analytics-switch';
    if (this.state.AllowAnalyticsCookies === 'yes') {
      classSwitchAnalytics += ' checked';
    } else if (this.state.AllowAnalyticsCookies === 'no') {
      classSwitchAnalytics += ' unchecked'
    } else {
      classSwitchAnalytics += ' null';
    }

    let classSwitchMarketing = 'switch';
    classSwitchMarketing += ' cookie-marketing-switch';
    if (this.state.AllowMarketingCookies === 'yes') {
      classSwitchMarketing += ' checked';
    } else if (this.state.AllowMarketingCookies === 'no') {
      classSwitchMarketing += ' unchecked'
    } else {
      classSwitchMarketing += ' null';
    }


// const useStyles = makeStyles({
//   heading:{
//  marginBottom:'10px'
// }    
// });

// const classes = useStyles();


    return (
      <div className="cookie-policy-content cookie-policy">

        <div className='cookie-policy-heading'>
          <Typography variant="h3" color="textsecondary">Cookie Information</Typography>
          <Typography variant="body1" color="textsecondary">Cookies for this website are classified into four categories.</Typography>
            {/* <button className='cookie-policy-button' onClick={() => this.allowAllCookies()}>Allow All Cookies</button> */}
            <Button color="primary" variant="button" className='cookie-policy-button' onClick={() => this.allowAllCookies()}>Allow All Cookies</Button>
       
       
        </div>


        <div className='cookie-necessary-header cookies-header'>
          <Typography variant="h4" color="textsecondary">Necessary Cookies</Typography>
        </div>
        <div className="cookie-necessary-description">
          <Typography variant="body1" color="textsecondary">These cookies are essential in order to enable you to move around the website and use its features, such as accessing secure areas of the website. Without these cookies services you have asked for, like shopping baskets or e-billing, cannot be provided.</Typography>
        </div>


        <div className='cookie-performance-header cookies-header'>
          <Typography variant="h4" color="textsecondary">Performance Cookies</Typography>
        </div>        
        <div className={classSwitchPerformance}>
          <span className="slider" onClick={() => this.togglePerformanceCookie()}></span>
        </div>
        <div className="cookie-performance-description">
          <Typography variant="body1" color="textsecondary">These cookies collect information about how you use a website, like which pages you visited and which links you clicked on. None of this information can be used to identify you. It is all aggregated and, therefore, anonymized. Their sole purpose is to improve website functions.</Typography>
        </div>


        <div className='cookie-analytics-header cookies-header'>
          <Typography variant="h4" color="textsecondary">Analytics Cookies</Typography>
        </div>        
        <div className={classSwitchAnalytics}>
          <span className="slider" onClick={() => this.toggleAnalyticsCookie()}></span>
        </div>
        <div className="cookie-analytics-description">
          <Typography variant="body1" color="textsecondary">A set of cookies to collect information and report about website usage statistics.</Typography>
        </div>


        <div className='cookie-marketing-header cookies-header'>
          <Typography variant="h4" color="textsecondary">Marketing Cookies</Typography>
        </div>        
        <div className={classSwitchMarketing}>
          <span className="slider" onClick={() => this.toggleMarketingCookie()}></span>
        </div>
        <div className="cookie-marketing-description">
          <Typography variant="body1" color="textsecondary">Any cookies used specifically to collect user personal data via analytics, ads, other embedded contents.</Typography>
        </div>


      </div>
    )
  }
}

export default CookiePolicy;

function getCookieString(name, value){
  return (name + "=" + value + "; expires=" + new Date(new Date().setFullYear(new Date().getFullYear() + 1)) + "; path=/");
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}








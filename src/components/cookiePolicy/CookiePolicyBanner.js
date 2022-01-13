import React from "react"
import { Link } from "gatsby"
import "../../styles/cookie-policy.scss"
import CookiePolicyFullContent from "./CookiePolicyFullContent"
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

// works with Google Tag Manager
// allow-analytics-cookies
// allow-marketing-cookies
// allow-performance-cookies

class CookiePolicyBanner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showCookiePolicyBanner: false,
      showCookiePolicyModal: false,
    }

    this.allowAllCookies = this.allowAllCookies.bind(this)
  }


  componentDidMount() {
    // Check the cookies
    if (getCookie('allow-performance-cookies') === '' ||  getCookie('allow-analytics-cookies') === '' || getCookie('allow-marketing-cookies') === '') {
      this.setState({
        showCookiePolicyBanner: true,
      });
    }
    
  }


  allowAllCookies() {
    document.cookie = getCookieString("allow-analytics-cookies", "yes")
    document.cookie = getCookieString("allow-marketing-cookies", "yes")
    document.cookie = getCookieString("allow-performance-cookies", "yes")

    this.setState({
      showCookiePolicyBanner: false,
    });

  }



  render() {

    let classNameBanner = 'cookie-banner';
    if (this.state.showCookiePolicyBanner === true) {
      classNameBanner += ' cookie-banner-show';
    } else {
      classNameBanner += ' cookie-banner-hide';
    }

    let classNameModal = 'cookie-modal';
    if (this.state.showCookiePolicyModal) {
      classNameModal += ' cookie-modal-show';
    } else {
      classNameModal += ' cookie-modal-hide';
    }


    return (
      <div className="cookie-policy">
        <div className={classNameBanner}>
          <div className="cookie-policy-copy">
            <Typography variant="body1" color="textsecondary">We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept Cookies”, you consent to the use of all the cookies. However you may visit <Link to="/cookies">Cookie Settings</Link> to provide a controlled consent.</Typography>
          </div>
          <div className="cookie-policy-buttons">

            {/* <button className='cookie-policy-button' onClick={() => this.allowAllCookies()}>Accept Cookies</button> */}
            <Button color="primary" variant="button" className='cookie-policy-button' onClick={() => this.allowAllCookies()}>Accept Cookies</Button>

          </div>
        </div>
        <div className={classNameModal}><CookiePolicyFullContent /></div>
      </div>
    )
  }
}

export default CookiePolicyBanner;






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





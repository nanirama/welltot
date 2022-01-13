import React from "react"
import { Helmet } from "react-helmet"
import LayoutMain from "../components/layouts/LayoutMain"
import "../styles/conditionsOfUse.scss"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const ConditionsOfUsePage = (props) => {
  const useStyles = makeStyles({
    container:{
        maxWidth: '1157px',
        padding:'0 15px',
    },
    heading:{
      fontSize:'2rem',
      marginBottom:'15px',
    },
    title:{
      marginBottom:'15px',
    },
    text:{
      marginBottom:'15px',
    },
});
    const classes = useStyles();
    return(
      <LayoutMain>
        <Helmet>
          <title>AffirmXH Conditions of Use</title>
          <meta
            name="description"
            content="AffirmXH conditions of use"
          />
          <bodyAttributes
            className="theme1"
          />
        </Helmet>

        <div className="container-conditions-use padding-standard bgColorLight">

          <div className="conditionsUse">

            <Typography variant="h1" color="textSecondary" className={classes.heading}>CONDITIONS OF USE</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>Last Updated: January 15, 2021</Typography>

            <Typography variant="body1" color="textSecondary" className={classes.text}>AffirmXH, Inc. and/or their affiliates ("AffirmXH") provide features and other products and services to you when you visit AffirmXH.com (the "AffirmXH Website"), use AffirmXH devices, products, or services, use AffirmXH applications, or use software provided by AffirmXH in connection with any of the foregoing (collectively "AffirmXH Services"). AffirmXH provides the AffirmXH Services to you subject to the conditions set out on this page.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>PRIVACY</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>Please see our Privacy Notice on the AffirmXH Website to understand how we collect and process your personal information through AffirmXH Services.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>ELECTRONIC COMMUNICATIONS</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>When you use AffirmXH Services, or send e-mails, text messages, and other communications from your device to us, you may be communicating with us electronically. You consent to receive communications from us electronically, such as e-mails, texts, mobile push notices, or notices and messages through AffirmXH Services, and you can retain copies of these communications for your records. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>DATA RECEPTION AND TRANSMISSION</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>Some AffirmXH services will receive and transmit AffirmXH information that is in proximity to a physical device with AffirmXH services installed.  The physical device will receive data from a AffirmXH device and transmit this data to the AffirmXH servers.  Any encrypted data will pass through without decryption. AffirmXH is not responsible for any costs due to bandwidth or data reception and transmission.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>COPYRIGHT</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>All content included in or made available through any of the AffirmXH Services, such as text, graphics, logos, and software is the property of AffirmXH or its content suppliers and protected by United States and international copyright laws. The compilation of all content included in or made available through any of the AffirmXH Services is the exclusive property of AffirmXH and protected by U.S. and international copyright laws.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>TRADEMARKS</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>Graphics, logos, button icons, and scripts, included in or made available through any of the AffirmXH Services are trademarks or trade dress of AffirmXH in the U.S. and other countries. AffirmXH's trademarks and trade dress may not be used in connection with any product or service that is not AffirmXH 's, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits AffirmXH. All other trademarks not owned by AffirmXH that appear in any of the AffirmXH Services are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by AffirmXH.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>PATENTS</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>One or more patents owned by AffirmXH apply to the AffirmXH Services and to the features and services accessible via the AffirmXH Services. Portions of the AffirmXH Services operate under license of one or more patents.</Typography>

            <Typography variant="h2" color="textSecondary" className={classes.title}>FEEDBACK</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>You may provide written or verbal feedback, suggestions, comments, or input to us relating to AffirmXH Services, Software Apps, AffirmXH Products, User Devices, or other opportunities for our existing or future activities ("Feedback"). By providing Feedback to us, you grant to us the worldwide, nonexclusive, unrestricted, perpetual, irrevocable (on any basis whatsoever), royalty free right for us to use such Feedback in any way we determine, including through third parties, without any obligation to you for compensation, attribution, accounting or otherwise. You will only provide to us Feedback for which you have the right to grant to us the rights listed in the preceding sentence.</Typography>

            <Typography variant="body1" color="textSecondary" className={classes.text}>DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>THE AFFIRMXH SERVICES AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) AND OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE AffirmXH SERVICES ARE PROVIDED BY AffirmXH ON AN "AS IS" AND "AS AVAILABLE" BASIS, UNLESS OTHERWISE SPECIFIED IN WRITING. AffirmXH MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE AffirmXH SERVICES, OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE AffirmXH SERVICES, UNLESS OTHERWISE SPECIFIED IN WRITING. YOU EXPRESSLY AGREE THAT YOUR USE OF THE AffirmXH SERVICES IS AT YOUR SOLE RISK.</Typography>

            <Typography variant="body1" color="textSecondary" className={classes.text}>TO THE FULL EXTENT PERMISSIBLE BY LAW, AffirmXH DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. AffirmXH DOES NOT WARRANT THAT THE AffirmXH SERVICES, INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE AffirmXH SERVICES, AffirmXH'S SERVERS OR ELECTRONIC COMMUNICATIONS SENT FROM AffirmXH ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. TO THE FULL EXTENT PERMISSIBLE BY LAW, AffirmXH WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF ANY AffirmXH SERVICE, OR FROM ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH ANY OF THE AffirmXH SERVICES, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES, UNLESS OTHERWISE SPECIFIED IN WRITING.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>DISPUTES</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>Any dispute or claim relating in any way to your use of any of the AffirmXH Services, or to any products or services sold or distributed by AffirmXH will be resolved by binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify. The Federal Arbitration Act and federal arbitration law apply to this agreement.</Typography>

            <Typography variant="body1" color="textSecondary" className={classes.text}>There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages) and must follow the terms of these Conditions of Use as a court would.</Typography>

            <Typography variant="body1" color="textSecondary" className={classes.text}>The arbitration will be conducted by the American Arbitration Association (AAA) under its rules, including the AAA's Supplementary Procedures for Consumer-Related Disputes. The AAA's rules are available at www.adr.org or by calling 1-800-778-7879. Payment of all filing, administration and arbitrator fees will be governed by the AAA's rules.</Typography>

            <Typography variant="body1" color="textSecondary" className={classes.text}>We each agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated or representative action. If for any reason a claim proceeds in court rather than in arbitration, we each waive any right to a jury trial. We also both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>APPLICABLE LAW</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>By using any AffirmXH Services, you agree that the Federal Arbitration Act, applicable federal law, and the laws of the state of California, without regard to principles of conflict of laws, will govern these Conditions of Use and any dispute of any sort that might arise between you and AffirmXH.</Typography>

            <Typography variant="body1" color="textSecondary" className={classes.text}>The AffirmXH Services are controlled, operated and administered by AffirmXH from offices within the USA. If you access AffirmXH Services from a location outside the USA, you are responsible for compliance with all local laws. You agree that you will not use the content accessed through the AffirmXH Services in any country or in any manner prohibited by any applicable laws, restrictions or regulations.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>SITE POLICIES, MODIFICATION, AND SEVERABILITY</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>Please review our other policies posted on the AffirmXH Website. These policies also govern your use of AffirmXH Services. We reserve the right to make changes to our AffirmXH Website, policies, and these Conditions of Use at any time. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.</Typography>


            <Typography variant="h2" color="textSecondary" className={classes.title}>CONTACT INFORMATION</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>AffirmXH, Inc.<br/>
            4304 Endcliffe Drive<br/>
            Austin, TX 78731</Typography>
            <Typography variant="body1" color="textSecondary" className={classes.text}>Email Address: hello@AffirmXH.com</Typography>
         </div>
        </div>
      </LayoutMain>
    )
    }
export default ConditionsOfUsePage




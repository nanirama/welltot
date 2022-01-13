import React from "react"
import "../../styles/sectionHowItWorks.scss"
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

    const SectionHowItWorks = () => {
        const useStyles = makeStyles({
            links:{
                listStyleType:'decimal',
            },
            listitems:{
                fontSize: '1.35rem',
                lineHeight: '1.5rem',
                padding: '20px 0',
                listStyleType:'decimal',
            },
            });
            const classes = useStyles();
        return (

            <div className="sectionHowItWorks">
                <div className="sectionHeader">
                    <Typography variant="h2" color="textsecondary">How it works</Typography>
                </div>
                <div className="steps">
                <List className={classes.links}>
               <ListItem className={classes.listitems}>1.&nbsp; Download the app & connect the patch</ListItem>
               <ListItem className={classes.listitems}>2.&nbsp; Have your child wear the fever monitor patch (either by the chest harness or the adhesive tabs)</ListItem>
               <ListItem className={classes.listitems}>3.&nbsp; Place an iPhone (or another iOS device) with the app installed by the child to receive the readings</ListItem>
               <ListItem className={classes.listitems}>4.&nbsp; Monitor fever from any iPhone.*</ListItem>
               </List>

                    {/* <ol>
                        <li>Download the app & connect the patch</li>
                        <li>Have your child wear the fever monitor patch (either by the chest harness or the adhesive tabs)</li>
                        <li>Place an iPhone (or another iOS device) with the app installed by the child to receive the readings</li>
                        <li>Monitor fever from any iPhone.*</li>
                    </ol> */}
                </div>
                <div className="copyFootnote">
                <Typography variant="body1" color="textsecondary"> <small>*This can be the same phone as the one near the child, or multiple phones logged into the same account.  We are always looking at different devices that can act as a hub near the child.</small></Typography>
                </div>
            </div>
        )
}

export default SectionHowItWorks

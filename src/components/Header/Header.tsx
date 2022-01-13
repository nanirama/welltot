import React from 'react';
import * as styles from './Header.module.scss';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const useStyles = makeStyles({
    subtitle: {
      fontSize:'1.3rem'
      },
});
    const classes = useStyles();
  return (
    <div {...props}>
      <Typography variant="h2" className={classes.title} color="textSecondary">Tot Life</Typography >
      <Typography variant="h4" className={classes.subtitle} color="textSecondary">A Welltot Magazine</Typography >
    </div>
  );
};

export default Header;

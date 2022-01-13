import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Card, CardMedia, CardContent} from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";
import * as styles from './ArticleSummary.module.scss';
const ArticleSummary = ({ node: { data, url } }: ArticleSummary) => {
const alt = data?.blog_image?.alt ?? '';
const image = data?.blog_image?.gatsbyImageData
? getImage(data.blog_image.gatsbyImageData)
: undefined;
const useStyles = makeStyles (theme =>({
container: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
},
card: {
  maxWidth: 800,
  display: 'flex',
  backgroundColor: "transparent",
  boxShadow:"none",
  margin:"2rem -1rem 1rem -1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection:'column',
  },
},
media: {
  minWidth: 240,
  padding:'16px'
}, 
title:{
},
title:{
  marginBottom:'15px',
  display:"inline-block",
  fontSize:'1.75rem',
  color: '#4183c4',
}, 
cardcontent:{ 
},
fiCardContentTextSecondary: {
  color: "rgba(255,255,255,0.78)"
}
}));
const classes = useStyles();
return (
<Card className={classes.card}>
   <CardMedia className={classes.media}>
      <GatsbyImage image={image} alt={alt} loading="lazy" width={140} />
   </CardMedia>
   <CardContent className={classes.cardcontent}>
      <Typography variant="h3">
         <Link to={url ?? ''} className={classes.title}>
         {data?.title?.text}
         </Link>
      </Typography>
      <Typography className={styles.trim} variant="body1" color="textSecondary">{data?.body?.text}</Typography>
   </CardContent>
</Card>
);
};

// INFO: Create Article summary fragment, this query will not run in Gatsby
export const query = graphql`
  fragment ArticleSummary on PrismicWelltotBlogBlogEdge {
    node {
      id
      url
      data {
        title {
          text
        }
        body {
          text
        }
        blog_image {
          alt
          gatsbyImageData(
            imgixParams: { crop: "edges", fit: "crop" }
            width: 300
            aspectRatio: 1.333
          )
        }
      }
    }
  }
`;

export default ArticleSummary;

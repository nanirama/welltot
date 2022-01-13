import React from 'react';
import Grid from "@material-ui/core/Grid";
import { BlogPageQuery } from '../../../graphql-types';
import ArticleRelatedItem from './ArticleRelatedItem';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

type Props = { articles: BlogPageQuery['allPrismicWelltotBlogBlog']['edges'] };

const ArticleRelated = ({ articles }: Props) => {
  const useStyles = makeStyles({
    title: {
      textAlign:'center',
      },
});
    const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" color="textsecondary" className={classes.title}>
        Related
      </Typography>

      <Grid stackable columns={3}>
        {articles.map((article, index) => (
          <ArticleRelatedItem
            key={index}
            title={article.node.data?.title?.text ?? ''}
            imageAlt={article.node.data?.blog_image?.alt ?? ''}
            imageData={article.node.data?.blog_image?.gatsbyImageData}
            url={article.node.url!}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ArticleRelated;

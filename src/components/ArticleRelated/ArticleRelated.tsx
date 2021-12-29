import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { BlogPageQuery } from '../../../graphql-types';
import ArticleRelatedItem from './ArticleRelatedItem';

type Props = { articles: BlogPageQuery['allPrismicBlog']['edges'] };

const ArticleRelated = ({ articles }: Props) => {
  return (
    <div>
      <Header as="h2" textAlign="center">
        Related
      </Header>

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

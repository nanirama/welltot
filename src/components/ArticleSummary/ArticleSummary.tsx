import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { ArticleSummaryFragment } from '../../../graphql-types';
import * as styles from './ArticleSummary.module.scss';

const ArticleSummary = (props: PageProps) => {
  //console.log('aritlc Props', props)
  const { node } = props;
  const { data } = node;
  console.log('aritlc Props', data)
  const alt = data?.blog_image?.alt ?? '';
  const image = data?.blog_image?.gatsbyImageData
     ? getImage(data.blog_image.gatsbyImageData)
     : undefined;
  const url = node.url ? node.url : ''
  return (
    <Grid stackable className={styles.container} columns={2}>
      {image && (
        <Grid.Column width={5}>
          <GatsbyImage image={image} alt={alt} loading="lazy" />
        </Grid.Column>
      )}

      <Grid.Column width={11}>
        <h3>
          <Link to={url} className={styles.title}>
            {data?.title?.text}
          </Link>
        </h3>

        <p className={styles.trim}>{data?.body?.text}</p>
      </Grid.Column>
    </Grid>
  );
};

export default ArticleSummary;
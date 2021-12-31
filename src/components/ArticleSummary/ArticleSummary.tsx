import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { ArticleSummaryFragment } from '../../../graphql-types';
import * as styles from './ArticleSummary.module.scss';

const ArticleSummary = ({ node: { data, url } }: ArticleSummaryFragment) => {
  const alt = data?.blog_image?.alt ?? '';
  const image = data?.blog_image?.gatsbyImageData
    ? getImage(data.blog_image.gatsbyImageData)
    : undefined;

  return (
    <Grid stackable className={styles.container} columns={2}>
      {image && (
        <Grid.Column width={5}>
          <GatsbyImage image={image} alt={alt} loading="lazy" />
        </Grid.Column>
      )}

      <Grid.Column width={11}>
        <h3>
          <Link to={url ?? ''} className={styles.title}>
            {data?.title?.text}
          </Link>
        </h3>

        <p className={styles.trim}>{data?.body?.text}</p>
      </Grid.Column>
    </Grid>
  );
};

// INFO: Create Article summary fragment, this query will not run in Gatsby
export const query = graphql`
  fragment ArticleSummary on PrismicBlogEdge {
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

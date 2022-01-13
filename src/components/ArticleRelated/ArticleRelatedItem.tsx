import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { Grid, Header, Segment } from '@material-ui/core';

type Props = {
  title: string;
  imageData?: IGatsbyImageData;
  imageAlt: string;
  url: string;
};

const ArticleRelatedItem = ({ title, url, imageData, imageAlt }: Props) => {
  const image = imageData ? getImage(imageData) : undefined;

  return (
    <Grid.Column>
      <Link to={url}>
        <Segment>
          {image && <GatsbyImage image={image} alt={imageAlt} />}
          <Header as="h3">{title}</Header>
        </Segment>
      </Link>
    </Grid.Column>
  );
};

export default ArticleRelatedItem;

import cls from 'classnames';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
//import { BlogPageQuery } from '../../graphql-types';
import ArticleRelated from '../components/ArticleRelated/ArticleRelated';
import LayoutMain from '../components/layouts/LayoutMain';
import SEO from '../components/SEO';
import * as styles from './TotLifeBlog.module.scss';

type PageContext = { uid: string; tags: string[] };

const TotLifeBlog = ({ data }: PageProps<BlogPageQuery, PageContext>) => {
  const { allPrismicWelltotBlogBlog, prismicWelltotBlogBlog } = data;
  const image = getImage(prismicWelltotBlogBlog?.data?.blog_image?.gatsbyImageData);
  const description = useMemo(() => {
    const firstParagraph = prismicWelltotBlogBlog?.data?.body?.raw.find(
      ({ type }: { type: string }) => type === 'paragraph',
    );
    return firstParagraph?.text ?? '';
  }, [prismicWelltotBlogBlog]);

  const title = prismicWelltotBlogBlog?.data?.title?.text ?? '';

  return (
    <LayoutMain>
      <SEO article title={title} description={description} />

      {/* Blog title and published date */}
      <Container as="section" textAlign="center" className={cls(styles.container, styles.header)}>
        <h1>{prismicWelltotBlogBlog?.data?.title?.text}</h1>
        <p>Published on {prismicWelltotBlogBlog?.last_publication_date}</p>
      </Container>

      {/* Blog content and topics */}
      <Container as="section" className={styles.container}>
        {image && (
          <GatsbyImage
            image={image}
            alt={prismicWelltotBlogBlog?.data?.blog_image?.alt ?? ''}
            className={styles.image}
          />
        )}

        <Grid doubling columns={2}>
          <Grid.Column as="article" className={styles.content} width={12}>
            <div dangerouslySetInnerHTML={{ __html: prismicWelltotBlogBlog?.data?.body?.html }} ></div>
          </Grid.Column>

          <Grid.Column as="aside" width={4} textAlign="center">
            <Header as="h1" className={styles.topicHeader}>
              Topics
            </Header>

            {prismicWelltotBlogBlog?.data?.tags1?.map((tag, index) => (
              <Header key={index}>
                <Link to={tag?.tags?.document?.url!} className={styles.link}>
                  {tag?.tags?.document?.data?.topic_name?.text}
                </Link>
              </Header>
            ))}
          </Grid.Column>
        </Grid>
      </Container>

      {/* Blod related content */}
      <Container as="section" className={styles.container}>
        <ArticleRelated articles={allPrismicWelltotBlogBlog.edges} />
      </Container>
    </LayoutMain>
  );
};

export const query = graphql`
  query BlogPage($uid: String, $tags: [ID]) {
    prismicWelltotBlogBlog(uid: { eq: $uid }) {
      last_publication_date(formatString: "LL")
      data {
        title {
          text
        }
        body {
          raw
          html
          text
        }
        blog_image {
          alt
          gatsbyImageData(
            width: 1200
            aspectRatio: 1.333
          )
        }
        tags1 {
          tags {
            document {
              ... on PrismicWelltotBlogBlogTopic {
                url
                data {
                  topic_name {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
    # Get title and image of latest 3 blogs with same tags (but not the article itself)
    allPrismicWelltotBlogBlog(
      filter: { data: { tags1: { elemMatch: { tags: { id: { in: $tags } } } } }, uid: { ne: $uid } }
      limit: 3
      sort: { fields: last_publication_date, order: DESC }
    ) {
      edges {
        node {
          url
          data {
            title {
              text
            }
            blog_image {
              alt
              gatsbyImageData(
                width: 400
                aspectRatio: 1.333
              )
            }
          }
        }
      }
    }
  }
`;

export default TotLifeBlog;

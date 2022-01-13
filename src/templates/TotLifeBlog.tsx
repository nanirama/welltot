import cls from 'classnames';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';
import Grid from "@material-ui/core/Grid";
import ArticleRelated from '../components/ArticleRelated/ArticleRelated';
import LayoutMain from '../components/layouts/LayoutMain';
import SEO from '../components/SEO';
import * as styles from './TotLifeBlog.module.scss';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
 const useStyles = makeStyles({
        container:{
            maxWidth: '1157px',
            padding:'0 15px',
        },
        topcontent:{
          textAlign:'center',
          margin:'2rem 0',
        },
        heading:{
          fontSize:'2rem',
        },
         heading2:{
          fontSize:'2rem',
          marginBottom:'55px',
        },
        published:{
          fontStyle:'italic',
        },
        sidebar:{
          textAlign:'center',
        },
        link:{
          fontSize:'18px',
          marginBottom:'20px',
        },
    });
        const classes = useStyles();
  return (
    <LayoutMain>
      <SEO article title={title} description={description} />

      {/* Blog title and published date */}
       <Container maxWidth="lg" className={classes.container}>
      <div className={classes.topcontent}>
        <Typography variant="h1" color="textSecondary" className={classes.heading}>{prismicWelltotBlogBlog?.data?.title?.text}</Typography>
        <Typography variant="body1" color="textSecondary" className={classes.published}>Published on {prismicWelltotBlogBlog?.last_publication_date}</Typography>
      </div>

      {/* Blog content and topics */}
      <Grid>
        {image && (
          <GatsbyImage
            image={image}
            alt={prismicWelltotBlogBlog?.data?.blog_image?.alt ?? ''}
            className={styles.image}
          />
        )}

 <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={9} className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: prismicWelltotBlogBlog?.data?.body?.html }} ></div>
          </Grid>

 <Grid item xs={12} sm={12} md={3} className={classes.sidebar}>
            <Typography variant="h1" color="textSecondary" className={classes.heading2}>
              Topics
            </Typography>

            {prismicWelltotBlogBlog?.data?.tags1?.map((tag, index) => (
              <Typography variant="h2" color="textSecondary" className={classes.link} key={index}>
                <Link to={tag?.tags?.document?.url!} className={styles.link}>
                  {tag?.tags?.document?.data?.topic_name?.text}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Blod related content */}
      <Grid className={styles.container}>
        {/* <ArticleRelated articles={allPrismicWelltotBlogBlog.edges} /> */}
      </Grid>
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

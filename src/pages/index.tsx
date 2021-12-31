import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { IndexPageQuery } from '../../graphql-types';
import LayoutMain from '../components/layouts/LayoutMain';
import SectionBillboard from '../components/pageElements/SectionBillboard';
import SectionBuyNow from '../components/pageElements/SectionBuyNow';
import SectionHowItWorks from '../components/pageElements/SectionHowItWorks';
import SectionProductImages from '../components/pageElements/SectionProductImages';
import SectionQuote1 from '../components/pageElements/SectionQuote1';
import SectionRtb from '../components/pageElements/SectionRtb';
import SectionTotLifeSummary from '../components/pageElements/SectionTotLifeSummary';
import SectionWhyChooseWelltot from '../components/pageElements/SectionWhyChooseWelltot';
import SEO from '../components/SEO';

import '../styles/homepage.scss';

const IndexPage = ({ data: { allPrismicBlog } }: PageProps<IndexPageQuery>) => {
  return (
    <LayoutMain>
      <SEO bodyClassname="homepage" />

      <div className="container-homepage">
        <div className="homepage-sectionBillboard">
          <SectionBillboard />
        </div>
        <div className="homepage-sectionRtb">
          <SectionRtb />
        </div>
        <div className="homepage-sectionWhyChooseWelltot">
          <SectionWhyChooseWelltot />
        </div>
        <div className="homepage-sectionProductImages">
          <SectionProductImages />
        </div>
        <div className="homepage-sectionHowItWorks">
          <SectionHowItWorks />
        </div>
        <div className="homepage-sectionQuote1">
          <SectionQuote1 />
        </div>
        <div className="homepage-sectionTotLifeSummary">
          <SectionTotLifeSummary blogs={allPrismicBlog} />
        </div>
        <div className="homepage-sectionBuyNow">
          <SectionBuyNow />
        </div>
      </div>
    </LayoutMain>
  );
};

export const query = graphql`
  query IndexPage {
    allPrismicBlog(sort: {fields: last_publication_date, order: DESC}) {
      group(field: data___tags1___tags___uid) {
        edges {
          node {
            id
            uid
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
                gatsbyImageData(layout: CONSTRAINED, width: 300, aspectRatio: 1.333)
              }
            }
          }
        }
        fieldValue
      }
      edges {
        node {
          id
          uid
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
              gatsbyImageData(layout: CONSTRAINED, width: 300, aspectRatio: 1.333)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

import React from 'react';
import { graphql, PageProps } from 'gatsby';


import HeaderFaq from '../components/Header/HeaderFaq';
import LayoutMain from '../components/layouts/LayoutMain';
import SectionFaq from '../components/pageElements/SectionFaq';
import SEO from '../components/SEO';

import '../styles/faqpage.scss';

const FaqPage = (props: PageProps) => {
  const { data } = props
  return (
    <LayoutMain>
      <SEO title="Tot Life Faq" description="Tot Life Faq"  bodyClassname="faqpage" />

      <div className="container-faqpage">
        <HeaderFaq className="headCopy" style={{margin:"50px 0px"}} />
         <SectionFaq data={data.allPrismicWelltotIfuInstruction} />
      </div>
    </LayoutMain>
  );
};

export const query = graphql`
  query FaqPage {
    allPrismicWelltotIfuInstruction(sort: {fields: last_publication_date, order: DESC}) {
        edges {
          node {
            uid
            data {
              title {
                text
              }
              body {
                html
              }
            }
          }
        }
    }
  }
`;
export default FaqPage;

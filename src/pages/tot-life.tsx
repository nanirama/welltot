import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { TotLifePageQuery } from '../../graphql-types';
import ArticleSummary from '../components/ArticleSummary';
import Header from '../components/Header';
import LayoutMain from '../components/layouts/LayoutMain';
import SEO from '../components/SEO';
import TopicList from '../components/TopicList';

const TotLifePage = ({ data: { allPrismicBlog } }: PageProps<TotLifePageQuery>) => {
  return (
    <LayoutMain>
      <SEO title="Tot Life" description="Tot Life" />

      <div className="sectionTotLifeSummary">
        <Header className="headCopy" />

        <div className="topics">
          <TopicList topicId="" />
        </div>

        <div className="articleSummaries">
          {allPrismicBlog.edges.map(({ node }) => (
            <ArticleSummary key={node.id} node={node} />
          ))}
        </div>
      </div>
    </LayoutMain>
  );
};

export const query = graphql`
  query TotLifePage {
    allPrismicBlog(sort: { fields: last_publication_date, order: DESC }) {
      edges {
        ...ArticleSummary
      }
    }
  }
`;

export default TotLifePage;

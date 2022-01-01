import { graphql, PageProps } from 'gatsby';
import React from 'react';
import ArticleSummary from '../components/ArticleSummary';
import Header from '../components/Header';
import LayoutMain from '../components/layouts/LayoutMain';
import SEO from '../components/SEO';
import TopicList from '../components/TopicList';

type PageContext = { uid: string; title: string };

const TotLifeCategory = ({ data, pageContext }: PageProps<TopicPageQuery, PageContext>) => {
  return (
    <LayoutMain>
      <SEO title={`${pageContext.title} Category`} />

      <div className="sectionTotLifeSummary">
        <Header className="headCopy" />

        <div className="topics">
          <TopicList topicId={pageContext.uid} />
        </div>

        <div className="articleSummaries">
          {data.allPrismicBlog.edges.map(({ node }) => (
            <ArticleSummary key={node.id} node={node} />
          ))}
        </div>
      </div>
    </LayoutMain>
  );
};

export const query = graphql`
  query TopicPage($uid: String) {
    allPrismicBlog(filter: { data: { tags1: { elemMatch: { tags: { uid: { eq: $uid } } } } } }) {
      edges {
        ...ArticleSummary
      }
    }
  }
`;

export default TotLifeCategory;

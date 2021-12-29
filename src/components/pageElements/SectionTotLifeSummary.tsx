import React, { useMemo, useState } from 'react';
import { IndexPageQuery } from '../../../graphql-types';
import ArticleSummary from '../ArticleSummary';
import Header from '../Header';
import TopicList from '../TopicList';

import '../../styles/sectionTotLifeSummary.scss';

type Props = { blogs: IndexPageQuery['allPrismicBlog'] };

const SectionTotLifeSummary = ({ blogs }: Props) => {
  const [topicId, setTopicId] = useState('');

  const filteredBlogs = useMemo(() => {
    if (!topicId) return blogs.edges;

    const group = blogs.group.find((group) => group.fieldValue === topicId);

    return group?.edges ?? blogs.edges;
  }, [topicId]);

  return (
    <div className="sectionTotLifeSummary">
      <Header className="headCopy" />

      <div className="topics">
        <TopicList topicId={topicId} onTopicClick={(newTopic) => setTopicId(newTopic)} />
      </div>

      <div className="articleSummaries">
        {filteredBlogs.map(({ node }) => (
          <ArticleSummary key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
};

export default SectionTotLifeSummary;

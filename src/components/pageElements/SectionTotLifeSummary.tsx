import React, { useMemo, useState } from 'react';
import { IndexPageQuery } from '../../../graphql-types';
import ArticleSummary from '../ArticleSummary';
// import ArticlesSection from '../ArticleSummary/articles';
import Header from '../Header';
import TopicList from '../TopicList';
import makeStyles from "@material-ui/core/styles/makeStyles";

import '../../styles/sectionTotLifeSummary.scss';

type Props = { blogs: IndexPageQuery['allPrismicWelltotBlogBlog'] };

const SectionTotLifeSummary = ({ blogs }: Props) => {
  const [topicId, setTopicId] = useState('');

  const filteredBlogs = useMemo(() => {
    if (!topicId) return blogs.edges;

    const group = blogs.group.find((group) => group.fieldValue === topicId);

    return group?.edges ?? blogs.edges;
  }, [topicId]);


  const useStyles = makeStyles({
    aricles: {
     padding:'0 15px',
    },
    
    });
    const classes = useStyles();
  return (
    <>
    <div className={classes.aricles}>
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
     </div>
     </>
  );
};

export default SectionTotLifeSummary;

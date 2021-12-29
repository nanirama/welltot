import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import cls from 'classnames';
import { TopicListQuery } from '../../graphql-types';
import * as styles from './TopicList.module.scss';

type Props = {
  // Prismic blog topic ID
  topicId: string;
  onTopicClick?: (newTopic: string, topicUrl: string) => void;
};

const TopicList = ({ topicId, onTopicClick }: Props) => {
  const { allPrismicBlogTopic } = useStaticQuery<TopicListQuery>(query);

  const handleClick =
    (newTopic: string, topicUrl: string) =>
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!onTopicClick) return;

      e.preventDefault();
      onTopicClick(newTopic, topicUrl);
    };

  return (
    <ul className={styles.container}>
      <li>
        <Link
          to="/tot-life"
          className={cls(styles.link, topicId === '' && styles.active)}
          onClick={handleClick('', '/tot-life')}
        >
          All
        </Link>
      </li>
      {allPrismicBlogTopic.nodes.map(({ data, uid, url }) => (
        <li key={data?.topic_name?.text}>
          <Link
            to={url ?? ''}
            className={cls(styles.link, topicId === uid && styles.active)}
            onClick={handleClick(uid, url ?? '')}
          >
            {data?.topic_name?.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const query = graphql`
  query TopicList {
    allPrismicBlogTopic {
      nodes {
        uid
        url
        data {
          topic_name {
            text
          }
        }
      }
    }
  }
`;

export default TopicList;

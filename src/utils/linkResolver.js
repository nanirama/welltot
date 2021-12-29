/**
 * @type import("prismic-reactjs").LinkResolver
 */
exports.linkResolver = ({ type, uid }) => {
  switch (type) {
    case 'blog':
      return `/tot-life/articles/${uid}`;
    case 'blog_topic':
      return `/tot-life/topics/${uid}`;

    // Backup for all other types
    default:
      return '/';
  }
};

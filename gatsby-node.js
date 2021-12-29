const path = require(`path`);

/**
 * @type import("gatsby").GatsbyNode['onCreateWebpackConfig']
 */
exports.onCreateWebpackConfig = ({ stage, actions, getConfig, loaders, plugins }) => {
  const config = getConfig();
  const miniCssExtractPluginIndex = config.plugins.findIndex(
    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
  );

  if (miniCssExtractPluginIndex > -1) {
    // remove miniCssExtractPlugin from plugins list
    config.plugins.splice(miniCssExtractPluginIndex, 1);

    // re-add mini-css-extract-plugin
    if (stage === 'build-javascript') {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].[contenthash].css`,
          chunkFilename: `[name].[contenthash].css`,
          ignoreOrder: true,
        }),
      );
    } else {
      config.plugins.push(
        plugins.extractText({
          filename: `[name].css`,
          chunkFilename: `[id].css`,
          ignoreOrder: true,
        }),
      );
    }
  }
  actions.replaceWebpackConfig(config);
};

/**
 * @type import("gatsby").GatsbyNode['createPages']
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createIndividualBlogPage(graphql, createPage);
  await createIndividualTopics(graphql, createPage);
};

const createIndividualBlogPage = async (graphql, createPage) => {
  const { data, errors } = await graphql(`
    query PrismicBlogPage {
      allPrismicBlog {
        edges {
          node {
            url
            uid
            data {
              tags1 {
                tags {
                  id
                }
              }
            }
          }
        }
      }
    }
  `);

  if (errors) throw errors;

  const component = path.resolve(`src/templates/TotLifeBlog.tsx`);
  data.allPrismicBlog.edges.forEach((edge) => {
    createPage({
      component,
      path: edge.node.url,
      context: {
        uid: edge.node.uid,
        tags: edge.node.data.tags1.map(({ tags }) => tags.id), // Get all tag ids
      },
    });
  });
};

const createIndividualTopics = async (graphql, createPage) => {
  const { data, errors } = await graphql(`
    query PrismicBlogTopic {
      allPrismicBlogTopic {
        edges {
          node {
            url
            uid
            data {
              topic_name {
                text
              }
            }
          }
        }
      }
    }
  `);
  if (errors) throw errors;
  const component = path.resolve(`src/templates/TotLifeTopic.tsx`);
  data.allPrismicBlogTopic.edges.forEach((edge) => {
    createPage({
      component,
      path: edge.node.url,
      context: {
        uid: edge.node.uid,
        title: edge.node.data.topic_name.text,
      },
    });
  });
};

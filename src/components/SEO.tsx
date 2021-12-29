import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { SeoQuery } from '../../graphql-types';

type Props = {
  title?: string;
  description?: string;
  article?: boolean;
  bodyClassname?: string;
};

const SEO = ({ title, description, article = false, bodyClassname }: Props) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery<SeoQuery>(query);

  const seo = {
    title: title || site?.siteMetadata?.defaultTitle!,
    description: description || site?.siteMetadata?.defaultDescription!,
    url: `${site?.siteMetadata?.siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      htmlAttributes={{ lang: 'en' }}
      bodyAttributes={{ class: bodyClassname }}
    >
      <meta name="description" content={seo.description} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
      }
    }
  }
`;

export default SEO;

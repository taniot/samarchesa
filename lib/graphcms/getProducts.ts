import { gql } from 'graphql-request';

import graphcms from './client';

export const getProducts = async (locale: string) => {
  const query = gql`
    query getProducts($locales: [Locale!]!) {
      products(locales: $locales) {
        productName
        color {
          hex
        }
        shortDescription
        description {
          html
        }
        images {
          url
        }
      }
    }
  `;

  const variables: { locales: string[] } = {
    locales: [locale],
  };

  const data = await graphcms.request(query, variables);

  return data;
};

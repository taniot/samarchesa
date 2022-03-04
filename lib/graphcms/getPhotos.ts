import { gql } from 'graphql-request';

import graphcms from './client';

export const getPhotos = async (locale: string) => {
  const query = gql`
    query getPage($locales: [Locale!]!, $id: ID) {
      page(where: { id: $id }, locales: $locales) {
        title
        subtitle
        images {
          id
          url
          mimeType
          locale
          fileName
          height
          width
        }
      }
    }
  `;

  const variables: { locales: string[]; id: string } = {
    locales: [locale],
    id: 'cl0aruola2lh70cxqs7ttvfur',
  };

  const data = await graphcms.request(query, variables);

  return data?.page;
};

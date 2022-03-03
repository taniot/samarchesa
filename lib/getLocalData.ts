import LocalData from '../data/translations.json';

export const getLocalData = (language: 'it' | 'en', content: string): any => {
  const data = LocalData[language];
};

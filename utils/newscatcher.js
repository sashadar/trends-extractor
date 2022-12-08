/* import { read } from 'to-vfile'; */
import { toString } from 'nlcst-to-string';
import { retext } from 'retext';
import retextPos from 'retext-pos';
import retextKeywords from 'retext-keywords';

import fetch from 'node-fetch';

const BASE_URL = 'https://api.newscatcherapi.com/v2/latest_headlines?lang=en';
const API_KEY = 'RmZ9zOUNFDks77GkQdX9eXWQjhkprmkpYdvfTPvu5I8';

const processResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
};

const getArticles = async () => {
  const result = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'x-api-key': API_KEY,
    },
  })
    .then(processResponse)
    .then((res) => {
      console.log('=====================================================');
      console.log(res);
      console.log(res.articles[0].title);
      return res.articles[0].title;
    });

  const file = await retext()
    .use(retextPos) // Make sure to use `retext-pos` before `retext-keywords`.
    .use(retextKeywords)
    .process(result);

  console.log('Keywords:');
  file.data.keywords.forEach((keyword) => {
    console.log(toString(keyword.matches[0].node));
  });
};

export { getArticles };

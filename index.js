import { read } from 'to-vfile';
import { toString } from 'nlcst-to-string';
import { retext } from 'retext';
import retextPos from 'retext-pos';
import retextKeywords from 'retext-keywords';

import fetch from 'node-fetch';

import natural from 'natural';
/* import wordnet from 'wordnet-db'; */

const BASE_URL = 'https://api.newscatcherapi.com/v2/latest_headlines?lang=en';
const API_KEY = 'RmZ9zOUNFDks77GkQdX9eXWQjhkprmkpYdvfTPvu5I8';

let someText = '';

(async () => {
  var wordnet = new natural.WordNet();

  await wordnet.lookup('security incident', function (results) {
    results.forEach(function (result) {
      console.log('------------------------------------');
      /* console.log(result.synsetOffset); */
      /* console.log(result.pos); */
      console.log('lemma:\n' + result.lemma);
      console.log('synonyms:\n' + result.synonyms);
      /* console.log(result.pos); */
      console.log('gloss:\n' + result.gloss);
    });
  });

  // const result = await fetch(BASE_URL, {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'x-api-key': API_KEY,
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log('=====================================================');
  //     console.log(res.articles[0].title);
  //     return res.articles[0].title;
  //   });

  // const file = await retext()
  //   .use(retextPos) // Make sure to use `retext-pos` before `retext-keywords`.
  //   .use(retextKeywords)
  //   .process(result);

  // console.log('Keywords:');
  // file.data.keywords.forEach((keyword) => {
  //   console.log(toString(keyword.matches[0].node));
  // });

  // console.log();
  // console.log('Key-phrases:');
  // file.data.keyphrases.forEach((phrase) => {
  //   console.log(phrase.matches[0].nodes.map((d) => toString(d)).join(''));
  // });
})();

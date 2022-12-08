import express from 'express';
//Helmet helps you secure your Express apps by setting various HTTP headers.
//It's not a silver bullet, but it can help!
import helmet from 'helmet';
import cors from 'cors';

import { DB_ADDRESS } from './utils/constants.js';
import { getArticles } from './utils/newscatcher.js';

const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet());
app.use(cors());
app.options('*', cors());

//temporary solution to check that requests to API work
getArticles().catch((err) => {
  console.log(`Error:     ${err}`);
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});

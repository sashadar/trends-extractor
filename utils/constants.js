export const { NODE_ENV, SERVERDB_ADDRESS } = process.env;
export const DB_ADDRESS =
  NODE_ENV === 'production'
    ? SERVERDB_ADDRESS
    : 'mongodb://localhost:27017/newsexplorerdb';

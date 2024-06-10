const dbConfig = {
  production: {
    DB_HOST: '127.0.0.1:27017',
    DB_NAME: 'rhappdb_prod',
  },
  development: {
    DB_HOST: '127.0.0.1:27017',
    DB_NAME: 'rhappdb_dev',
  },
  test: {
    DB_HOST: '127.0.0.1:27017',
    DB_NAME: 'rhappdb_test',
  },
};

module.exports = dbConfig;

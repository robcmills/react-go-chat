module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'data/dev-db.sqlite3'
  },
  test: {
    dialect: 'sqlite',
    storage: 'data/test-db.sqlite3'
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: 'ebdb',
    port: process.env.RDS_PORT,
    host: process.env.RDS_HOSTNAME,
    dialect: 'mysql'
  }
};

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'react-go-chat-dev',
    dialect: 'sqlite',
    storage: 'data/react-go-chat-dev.sqlite3'
  },
  test: {
    dialect: 'sqlite',
    storage: 'data/test-db.sqlite3'
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: 'react-go-chat-prod',
    port: process.env.RDS_PORT,
    host: process.env.RDS_HOSTNAME,
    dialect: 'mysql'
  }
};

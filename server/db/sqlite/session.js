import session from 'express-session';

const SQLiteStore = require('connect-sqlite3')(session);

export default () => new SQLiteStore();

require("dotenv").config();

const { Pool } = require("pg");

const dbAdminUserPool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_ADMIN_USER,
    password: process.env.POSTGRES_ADMIN_PASSWORD,
    database: process.env.POSTGRES_DB,
    max: 20,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0,
});

const dbAppUserPool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_APP_USER,
    password: process.env.POSTGRES_APP_PASSWORD,
    database: process.env.POSTGRES_DB,
    max: 20,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0,
});

module.exports = {
    dbAdminUserPool,
    dbAppUserPool,
};

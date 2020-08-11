require("dotenv").config();
const knex = require("knex");

const db = knex({
    client: "pg",
    connection:
        process.env.DATABASE_URL ||
        `postgress://${porcess.env.USER}@127.0.0.1:5432/nekowallet`,
        searchPath: "public",
});

module.exports = db;
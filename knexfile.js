require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgress://${process.env.USER}@127.0.0.1:5432/nekowallet`,
    searchPath: "public"
  },
  staging: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgress://${process.env.USER}@127.0.0.1:5432/nekowallet`,
    searchPath: "public",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  production: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgress://${process.env.USER}@127.0.0.1:5432/nekowallet`,
    searchPath: "public",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
}
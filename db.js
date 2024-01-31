const pg = require("pg");
const client = new pg.Client(process.env.DATABASE_URL || "postgres://localhost/intro_db");

module.exports = {
  client,
};

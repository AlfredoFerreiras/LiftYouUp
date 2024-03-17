const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
  `postgres://postgres:Steph0796@localhost:5432/liftyouup`,
  config
);
module.exports = db;

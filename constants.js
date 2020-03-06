const path = require('path')
const envPath =
  process.env.APP_ENV === "production"
    ? ".env.prod"
    : process.env.APP_ENV === "demo"
    ? ".env.demo"
    : ".env.dev";

require("dotenv").config({
  path: path.join(__dirname, envPath)
});

module.exports = {
  FANCY: process.env.FANCY,
  APP_ENV: process.env.APP_ENV,
  GAE_APPLICATION: process.env.GAE_APPLICATION,
  GAE_ENV: process.env.GAE_ENV,
  GAE_SERVICE: process.env.GAE_SERVICE
};

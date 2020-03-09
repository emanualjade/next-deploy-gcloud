module.exports = {
  FANCY: exists(process.env.FANCY) ? process.env.FANCY : "Local default value",
  SOME_NUMBER: exists(process.env.SOME_NUMBER) ? parseInt(process.env.SOME_NUMBER, 10) : 100,
  GRAPHQL_BACKEND_ENDPOINT: process.env.GRAPHQL_BACKEND_ENDPOINT,
  APP_VERSION: process.env.APP_VERSION,
};

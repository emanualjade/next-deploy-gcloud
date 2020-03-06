function exists (val) {
  return val !== undefined
}
module.exports = {
  FANCY: exists(process.env.FANCY) ? process.env.FANCY : "Local default value",
  SOME_NUMBER: exists(process.env.SOME_NUMBER) ? parseInt(process.env.SOME_NUMBER, 10) : 100
};

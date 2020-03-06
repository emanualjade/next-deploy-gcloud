const constants = require("./constants");

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      ...constants
    }
  };
};

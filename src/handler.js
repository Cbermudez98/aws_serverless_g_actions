'use strict';
const { generateNumber } = require("./controller/randomNumber");

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: generateNumber(),
      }
    ),
  };
};

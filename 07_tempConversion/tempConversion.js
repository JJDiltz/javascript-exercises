const convertToCelsius = function(num) {
  let ferToCel = (num - 32) * .5556;
  return Math.round(ferToCel * 10) / 10;
};

const convertToFahrenheit = function(num) {
  let celToFer = (num * 1.8) + 32;
  return Math.round(celToFer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

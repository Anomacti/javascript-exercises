const convertToCelsius = function(fahren) {
  let number = ((fahren - 32) * 5) / 9;
  return Math.round(number * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let number = (celsius * 1.8) + 32;
  return Math.round(number * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

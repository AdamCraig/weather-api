toCelsius = function (temp){
  var celTemp = temp - 273.15;
  return celTemp.toPrecision(3);
};

toFar = function (temp){
  var farTemp = (temp * 1.8) - 459.67;
  return farTemp.toPrecision(3);
};

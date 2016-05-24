var apiKey = require('./../.env').apiKey;
var humidity;
var kelvinTemp;

$(document).ready(function(){
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showCity').text("The city you have chosen is " + city + ". ");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text('Humidity: ' + response.main.humidity + '%. Temperature: '  + toFar(response.main.temp) + ' degrees Fahrenheit.');
      kelvinTemp = response.main.temp;
      humidity = response.main.humidity;
    }).fail(function(error){
      $('.showWeather').text(error.responseJSON.message);
    });
    $('#celButt').fadeIn();
  });

   $('#farButt').click(function() {
     $('.showWeather').text('Humidity: ' + humidity + '%. Temperature: '  + toFar(kelvinTemp) + ' degrees Fahrenheit.');
     $('#farButt').hide();
     $('#celButt').fadeIn();
   });

   $('#celButt').click(function() {
     $('.showWeather').text('Humidity: ' + humidity + '%. Temperature: '  + toCelsius(kelvinTemp) + ' degrees Celsius.');
     $('#celButt').hide();
     $('#farButt').fadeIn();
   });
});

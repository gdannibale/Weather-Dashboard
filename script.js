var cityName = document.querySelector("#cityName");
var searchButton = $("#searchButton");
var temperature = ("");
var humidity = ("");
var windSpeed = ("");
var uvIndex = ("");
var city = ("");
var date = ("");
var pressure = ("")



function search() {
  var cityText = $("#cityName").val();

  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" + cityText + "&units=imperial&appid=5e9d927b0c1db047906ff51b126d3a19";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    //get values from response
    temperature = response["main"]["temp"]; 
    city = response["name"];
    humidity = response["main"]["humidity"];
    windSpeed = response["wind"]["speed"];
    //populate values to web page
    document.getElementById("temperature").innerHTML="Temperature=" + " " + temperature;  
    document.getElementById("city").innerHTML=city + " " + date; 
    document.getElementById("humidity").innerHTML="Humidity =" + " " + humidity;
    document.getElementById("windSpeed").innerHTML="Wind Speed =" + " " + windSpeed;
    console.log(response["main"]["temp"]);
  });
  

}

$(searchButton).click(function() {
  search()
});


   
    

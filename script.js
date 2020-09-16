


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var cityInput = document.querySelector("#city-text");
var cityForm = document.querySelector("#city-form");
var cityName = document.querySelector("#city-name");
var cityList = document.querySelector("#city-list");
var cityCountSpan = document.querySelector("#city-count");
var searchButton = document.getElementById("#searchButton");

rendercityName();

function rendercityName() {
  // Clear todoList element and update todoCountSpan
  cityList.innerHTML = "";
  cityCountSpan.textContent = cityName.length;

  // Render a new li for each todo
  for (var i = 0; i < cityName.length; i++) {
    var cityName = cityNames[i];

    var li = document.createElement("li");
    li.textContent = cityName;
    cityList.appendChild(li);
  }
}

cityForm.addEventListener("submit", function(event) {
      event.preventDefault();
    
      var cityText = cityInput.value.trim();
    
      // Return from function early if submitted todoText is blank
      if (cityText === "") {
        return;
      }
    
      // Add new todoText to todos array, clear the input
      cityNames.push(cityText);
      cityInput.value = "";
    
      // Re-render the list
      rendercityNames();
    });







  const apiKey = "b6c7f7286dmshe0fc483e2db26bep1bc0a7jsnd6369187e5c8"
    function searchButton() {
        let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityText + "&units=imperial&appid=b6c7f7286dmshe0fc483e2db26bep1bc0a7jsnd6369187e5c8";
           
        $.ajax({
            url: queryURL,
            dataType: "jsonp",
            method: "GET"
        }).then(function(response) {
            console.log(response);

        })


      }
      $("#searchButton").on("click", searchButton);
 


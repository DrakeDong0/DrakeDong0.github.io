const apiKey = 'ec85b7a569f34ea38ce211649240902';
const query = 'Toronto, Ontario';
const aqi = 'no';

function fetchWeatherData() {
  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=${aqi}`)
    .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      let weather_state = data.current.condition.text.toLowerCase();
      let current_time = data.location.localtime;
      let day_night = current_time.substring(current_time.indexOf(" ") + 1, current_time.lastIndexOf(":"));
      let tempc = data.current.temp_c;
      let city = data.location.name;
      let province = data.location.region;
      let weather_icon = document.getElementById('weather_icon');

      document.getElementById('temp').innerHTML = tempc + '°C';
      document.getElementById('location-text').innerHTML = city + ', ' + province;
      
      if((day_night > 18) || (day_night <= 5)){
        document.getElementById('title-text').innerHTML ='Good Evening.';
      }
      else if((day_night >= 6) && (day_night < 12)){
        document.getElementById('title-text').innerHTML ='Good Morning.';
      }
      else if((day_night >= 12) && (day_night <= 18)){
        document.getElementById('title-text').innerHTML ='Good Afternoon.';
      }

      if((day_night >= 18) || (day_night <= 5)){
        console.log("night");
        weather_icon.innerHTML = '<span id = "weather_icon" class="material-symbols-outlined">nights_stay</span>';
      } else {
          if(weather_state.includes("rain") || weather_state == "thunderstorm"){
            console.log("raining");
            weather_icon.innerHTML = '<span id = "weather_icon" class="material-symbols-outlined">rainy</span>';
          }
          else if(weather_state.includes("snow")){
              console.log("Snowing");
              weather_icon.innerHTML = '<span id = "weather_icon" class="material-symbols-outlined">weather_snowy</span>';
          }
          else if(weather_state == "clear" || weather_state == "sunny"){
              console.log("Sun");
              weather_icon.innerHTML = '<span id = "weather_icon" class="material-symbols-outlined">sunny</span>';
          }
          else if(weather_state.includes("cloud") || weather_state == "overcast"){
              console.log("Clouding");
              weather_icon.innerHTML = '<span id = "weather_icon" class="material-symbols-outlined">cloud</span>';
          }
          else{
              console.log("else");
              weather_icon.innerHTML = '<span  id = "weather_icon" class="material-symbols-outlined">sunny</span>';
        }
      }
    })
    .catch(error => {
      console.error('Error making the API request:', error);
    });
}

fetchWeatherData();

setInterval(fetchWeatherData, 600000); 
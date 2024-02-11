import React, { useEffect, useState } from "react";
import "./Homepage.css";
import "../../Components/style.css";
import "../../pages/Homepage/text-animation.css";
import Header from "../../Components/Header/Header";
import ProfilePicture from '../../assets/pfp.jpg';
import bg from '../../assets/bg-video.mp4';

function HomeContent() {
  // State to store weather data
  const [weatherData, setWeatherData] = useState({
    temp: '',
    location: '',
    titleText: '',
    weatherIcon: ''
  });

  // Function to fetch weather data and update state
  const fetchWeatherData = () => {
    const apiKey = 'ec85b7a569f34ea38ce211649240902';
    const query = 'Toronto, Ontario';
    const aqi = 'no';

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=${aqi}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const weatherState = data.current.condition.text.toLowerCase();
        const currentTime = data.location.localtime;
        const dayNight = parseInt(currentTime.substring(currentTime.indexOf(" ") + 1, currentTime.lastIndexOf(":")), 10);
        const tempC = data.current.temp_c;
        const city = data.location.name;
        const province = data.location.region;

        // Determine title text based on time
        let titleText = 'Good Day.';
        if ((dayNight > 18) || (dayNight <= 5)) {
          titleText = 'Good Evening.';
        } else if ((dayNight >= 6) && (dayNight < 12)) {
          titleText = 'Good Morning.';
        } else if ((dayNight >= 12) && (dayNight <= 18)) {
          titleText = 'Good Afternoon.';
        }

        // Determine weather icon
        let weatherIcon = 'sunny'; // Default icon
        if ((dayNight >= 18) || (dayNight <= 5)) {
          weatherIcon = 'nights_stay';
        } else {
          if (weatherState.includes("rain") || weatherState === "thunderstorm") {
            weatherIcon = 'rainy';
          } else if (weatherState.includes("snow")) {
            weatherIcon = 'weather_snowy';
          } else if (weatherState === "clear" || weatherState === "sunny") {
            weatherIcon = 'sunny';
          } else if (weatherState.includes("cloud") || weatherState === "overcast") {
            weatherIcon = 'cloud';
          }
        }

        // Update state with the new weather data
        setWeatherData({
          temp: `${tempC}°C`,
          location: `${city}, ${province}`,
          titleText,
          weatherIcon
        });
      })
      .catch(error => {
        console.error('Error making the API request:', error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 600000); 
    import ('../../js/Homepage.js')
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
            <div id="black-cover"></div>
            <div class="op-container">
                <div class="box">
                    <div class="title">
                        <span class="block"></span>
                        <h1 className="linear-color">{weatherData.titleText}</h1>
                    </div>
                    <div class="role">
                        <div class="block"></div>
                        <p>It's nice to meet you.</p>
                    </div>
                </div>
            </div>
            <div className="weather-info-container">  
                <h1 id="temp">{weatherData.temp}</h1>
                <span className="material-symbols-outlined" id="weather_icon">{weatherData.weatherIcon}</span>
                <div id="location-text">{weatherData.location}</div>
            </div>
            <div className="video-container">
                <video loop autoPlay muted id='bg-video'>
                    <source src={bg} type="video/mp4" />
                </video>
            </div>
            <button>
                <span class="material-symbols-outlined" id="down-arrow">
                    keyboard_arrow_down
                </span>
            </button>
            <div className="profile-container">
                <img id="pfp" src={ProfilePicture} alt='Drake profile picture'></img>
                <div className="title-container">
                    <div class="typewriter">
                        <h1>Hi! My name is Drake.</h1>
                    </div>
                    <div>I'm a first year student at the University of Waterloo.</div>
                    <div>This website is currently under construction!</div>
                </div>
            </div>
        </div>
  );
}

export default function Home() {
  return (
    <>
      <HomeContent />
      <Header />
    </>
  );
}

import React, { useEffect, useState } from "react";

import "./Homepage.css";
import "../../Components/style.css";
import "../../pages/Homepage/text-animation.css";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"
import bg from '../../assets/bg-video.mp4';

import uwPic from '../../assets/uw.jpg';
import ProfilePicture from '../../assets/pfp.jpg';
import desc_pic from '../../assets/pic1.jpg'
import resumePDF from '../../../public/Drake_Dong_Resume.pdf'

import LazyLoad from '../../Components/LazyLoad.jsx';

import img1 from '../../assets/gallery/img1.jpg'
import img2 from '../../assets/gallery/img2.jpg'
import img3 from '../../assets/gallery/img3.jpg'
import img4 from '../../assets/gallery/img4.jpg'
import img5 from '../../assets/gallery/img5.jpg'
import img6 from '../../assets/gallery/img6.jpg'
import img7 from '../../assets/gallery/img7.jpg'
import img8 from '../../assets/gallery/img8.jpg'
import img9 from '../../assets/gallery/img9.jpg'
import img10 from '../../assets/gallery/img10.jpg'
import img11 from '../../assets/gallery/img11.jpg'
import img12 from '../../assets/gallery/img12.jpg'
import img13 from '../../assets/gallery/img13.jpg'
import img14 from '../../assets/gallery/img14.jpg'
import img15 from '../../assets/gallery/img15.jpg'
import img16 from '../../assets/gallery/img16.jpg'

function HomeContent() {
  const [weatherData, setWeatherData] = useState({
    temp: '',
    location: '',
    titleText: '',
    weatherIcon: ''
  });
  

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
        console.log(data);
        console.log(dayNight);


        let titleText = 'Good Day.';
        if ((dayNight >= 18) || (dayNight <= 5)) {
          titleText = 'Good Evening.';
        } else if ((dayNight >= 6) && (dayNight < 12)) {
          titleText = 'Good Morning.';
        } else if ((dayNight >= 12) && (dayNight < 18)) {
          titleText = 'Good Afternoon.';
        }

        let weatherIcon = 'sunny'; 
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
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const section = document.querySelector('#about-me');
        section.scrollIntoView({ behavior: 'smooth' });
    };
    const downArrowElement = document.getElementById('down-arrow');
    downArrowElement.addEventListener('click', handleClick);

    return () => downArrowElement.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionElement = document.querySelector(hash);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
            <div id="about-me"></div>
            <LazyLoad className="profile-container fadeBot">
                <img id="pfp" src={ProfilePicture} alt='Drake profile picture'></img>
                <div className="title-container">
                    <div class="typewriter">
                        <h1>Hi! My name is Drake.</h1>
                    </div>
                    <div className="text">I'm a first year Electrical Engineering student at the University of Waterloo.</div>
                    <div className="options">
                      
                      <button onClick={() => {
                        const element = document.getElementById('about-container');
                        const topPosition = element.getBoundingClientRect().top;
                        window.scrollBy({ 
                          top: topPosition - 105, 
                          behavior: 'smooth' 
                        });
                        }} className="options-container">
                        <div className="options-item">A little more about myself</div><div className="options-item">→</div>
                      </button>

                      <a href={resumePDF} download="Drake_Dong_Resume.pdf" className="options-container">
                        <div className="options-item">Resume</div><div className="options-item">→</div>
                      </a>

                      <button onClick={() => {
                        const element = document.getElementById('contact-container');
                        const topPosition = element.getBoundingClientRect().top;
                        window.scrollBy({ 
                          top: topPosition - 105, 
                          behavior: 'smooth' 
                        });
                        }} className="options-container">
                        <div className="options-item">Credits</div><div className="options-item">→</div>
                      </button>
                      
                      <button onClick={() => {
                        const element = document.getElementById('extras-container');
                        const topPosition = element.getBoundingClientRect().top;
                        window.scrollBy({ 
                          top: topPosition - 10, 
                          behavior: 'smooth' 
                        });
                        }} className="options-container">
                        <div className="options-item">Extras</div><div className="options-item">→</div>
                      </button>
                    </div>
                </div>
            </LazyLoad>
        </div>
  );
}
function AboutMe(){
  return(
    <div id="about-container">
      <div className="title-text fadeBot">A Quick Introduction</div>
      <LazyLoad className="block1 fadeBot">
      <div id="vert-2"></div>
        <div className="desc-text">Before calling Waterloo home, I graduated from Dr. Norman Bethune CI, a small school in Scarborough, Ontario. Today, I try to explore as many areas as possible to get a feel on what I might do in the future. Right now, I'm looking forward to learning more about backend development. I'll admit my projects aren't very impressive, but I'm happy with them anyways.</div>
        <img className="uw img " alt="picture of waterloo university" src={uwPic}></img>
      </LazyLoad>
      <LazyLoad className="block2 fadeBot">
      <img className="img desc-img" alt="picture of waterloo university" src={desc_pic}></img>
        <div id="vert-1"></div>
        <div className="desc-text">Outside of the classroom, you might find me at the gym playing pickup or holed up in my room playing Starcraft. I also love camping and traveling. I really enjoy checking out different cultures and all sorts of foods. Next up on the itinerary is J̶a̶p̶a̶n̶, C̶o̶s̶t̶a̶ R̶i̶c̶a̶, Thailand or Spain.</div>
      </LazyLoad>
    </div>
  );
}
function Credit(){
  return(
    <div id="contact-container" className="section-container">
      <LazyLoad className="title-text fadeBot">Credits</LazyLoad>
      <div className="credits-container">
        <LazyLoad className="desc-text fadeBot">This website was made using ReactJS + Vite. Huge thanks to Vickey Zhou for drawing, and XXXXXXX for animating the art on the home screen!</LazyLoad>
        <LazyLoad className="links-container fadeBot">
            <a className="credit-link" href="https://github.com/DrakeDong0/DrakeDong0.github.io/blob/main/README.md" target="_blank">Resources Used</a>
            <a className="credit-link"href="https://www.youtube.com/" target="_blank">Check out Vickey's work</a>
            {/* <a className="credit-link"href="https://www.youtube.com/" target="_blank">Check out XXXXXX's work</a> */}
        </LazyLoad>
      </div>
    </div>
  );
}
function Extras(){
  const images = import.meta.glob('../../assets/gallery/*.jpg');
  return(
    <div id="extras-container" className="section-container">
      <LazyLoad className="title-text fadeBot">Extras</LazyLoad>
      <div id="gallery-container">
        <div id="column">
          <div><img className="gallery-img" src={img1}></img></div>
          <div><img className="gallery-img" src={img13}></img></div>
          <div><img className="gallery-img" src={img8}></img></div>
          <div><img className="gallery-img" src={img15}></img></div>
        </div>
        <div id="column">
          <div><img className="gallery-img" src={img4}></img></div>
          <div><img className="gallery-img" src={img5}></img></div>
          <div><img className="gallery-img" src={img6}></img></div>
          <div><img className="gallery-img" src={img14}></img></div>
        </div>
        <div id="column">          
          <div><img className="gallery-img" src={img3}></img></div>
          <div><img className="gallery-img" src={img7}></img></div>
          <div><img className="gallery-img" src={img9}></img></div>
          <div><img className="gallery-img" src={img2}></img></div>
        </div>
        <div id="column">          
          <div><img className="gallery-img" src={img10}></img></div>
          <div><img className="gallery-img" src={img11}></img></div>
          <div><img className="gallery-img" src={img12}></img></div>
          <div><img className="gallery-img" src={img16}></img></div>
        </div>
      </div>
      
    </div>
  );
}
export default function Home() {
  return (
    <>
      <HomeContent />
      <AboutMe></AboutMe>
      <Credit></Credit>
      <Extras></Extras>
      <Header></Header>
      <Footer />
    </>
  );
}

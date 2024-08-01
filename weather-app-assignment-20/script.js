// ******************************************************************************************************************
// API key for OpenWeatherMap API
const appId = "6ade34e3eb8496ccb2b350b400d9d522";

// Unit for temperature (metric or imperial)
const unit = "metric"; // use metric units for temperature (e.g. Celsius)

// Get references to HTML elements
const searchInput = document.getElementById("search-input"); // input field for city name
const searchBtn = document.getElementById("search-btn"); // search button
const cityEle = document.getElementById("city"); // element to display city name
const weatherEle = document.getElementById("weather"); // element to display weather description
const temperature = document.getElementById("temp"); // element to display temperature
const max = document.getElementById("max"); // element to display maximum temperature
const min = document.getElementById("min"); // element to display minimum temperature
const forecastList = document.getElementById("forecast-list"); // element to display forecast list
const dayNightEle = document.getElementById("day-night"); // element to display day/night status

// Add event listener to search button
searchBtn.addEventListener("click", fetchWeather); // trigger fetchWeather function when search button is clicked

// Add event listener to search input to enable Enter key press
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    fetchWeather(); // trigger fetchWeather function when Enter key is pressed
  }
});

// Function to fetch weather data from OpenWeatherMap API
function fetchWeather() {
  const city = searchInput.value.trim(); // get the city name from the input field
  
  // Check if city name is empty
  if (!city) {
    searchInput.placeholder = "Please enter a city name"; // display error message if city name is empty
    return;
  }
  
  // Construct API URL with city name and API key
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${appId}`;
  
  // Fetch weather data from API
  fetch(url)
  .then(response => response.json())
  .then(data => {
      const { city: cityData, list } = data;
      const { name, sunrise } = cityData;
      
      // Update HTML elements with weather data
      cityEle.innerHTML = name; // display city name
      const weather = list[0].weather[0];
      weatherEle.innerHTML = weather.description; // display weather description
      temperature.innerHTML = list[0].main.temp + '°'; // display temperature
      max.innerHTML = list[0].main.temp_max; // display maximum temperature
      min.innerHTML = list[0].main.temp_min; // display minimum temperature
      
      // Calculate day/night difference based on sunrise and sunset times
      const cityTimezoneOffset = cityData.timezone; // in seconds
      const sunriseDate = new Date((sunrise + cityTimezoneOffset) * 1000);
      const currentTime = Date.now() / 1000;
      const currentTimeHour = new Date(currentTime * 1000).getHours();
      const currentTimeMinute = new Date(currentTime * 1000).getMinutes();
      
      // if (currentTime >= sunriseDate.getTime() / 1000 && currentTimeHour < 18) {
      //   dayNightEle.innerHTML = `Daytime (${currentTimeHour}:${currentTimeMinute}) ☀️`;
      // } else {
      //   const timeUntilSunrise = Math.floor((sunriseDate.getTime() / 1000 - currentTime) / 60);
      //   dayNightEle.innerHTML = `Nighttime (Sunrise in ${timeUntilSunrise} minutes)  🌕`;
      // }
      
      // Display forecast for each day of the week
      // Display forecast for each day of the week
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date().getDay();

forecastList.innerHTML = ''; // clear the forecast list

for (let i = 0; i < 7; i++) {
  const dayIndex = (today + i) % 7;
  const day = days[dayIndex];
  let forecastData;

  // Find the forecast data for each day
  for (let j = 0; j < list.length; j++) {
    const forecast = list[j];
    const date = new Date(forecast.dt * 1000);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === dayIndex) {
      forecastData = forecast;
      break;
    }
  }

  if (forecastData && forecastData.main && forecastData.weather) {
    const temp = forecastData.main.temp;
    const weatherIcon = forecastData.weather[0].icon;
    const weatherDesc = forecastData.weather[0].description;

    const forecastRow = document.createElement('div');
    forecastRow.className = 'forecast-row';
    forecastRow.innerHTML = `
      <span>${day}:</span>
      <span>${temp}°C</span>
      <i class="fas fa-${weatherIcon} weather-icon" aria-hidden="true"></i>
      <span>${weatherDesc}</span>
    `;

    forecastList.appendChild(forecastRow);
  }
}
    })
    .catch(error => {
      console.error(error);
      searchInput.placeholder = "City not found. Please try again.";
    })
  };
  // Initial fetch for default city (Karachi)
  fetchWeather(); // fetch weather data for default city on page load
//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // const city = "Karachi";
  // const countryCode = "pk";
  // const unit = "metric";
  // const appId = "6ade34e3eb8496ccb2b350b400d9d522";
  
  // const temperature = document.getElementById("temp");
  // const cityEle = document.getElementById("city");
  // const weatherEle = document.getElementById("weather");
  // const max = document.getElementById("max");
  // const min = document.getElementById("min");
  
  // fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=${unit}&APPID=${appId}`
  // )
  //     .then(function (res) {
  //         return res.json();
  //     })
  //     .then(function (data) {
  //         const { name, weather, main } = data;
  //         cityEle.innerHTML = name;
  //         temperature.innerHTML = main.temp + '°';
  //         weatherEle.innerHTML = weather[0].description;
  //         max.innerHTML = main.temp_max;
  //         min.innerHTML = main.temp_min;
  //     });
  
  // ******************************************************************************************************************
  
  // const appId = "6ade34e3eb8496ccb2b350b400d9d522";
  // const unit = "metric"; // use metric units for temperature (e.g. Celsius)
  
  // // Get references to HTML elements
  // const searchInput = document.getElementById("search-input");
  // const searchBtn = document.getElementById("search-btn");
  // const cityEle = document.getElementById("city");
  // const weatherEle = document.getElementById("weather");
  // const temperature = document.getElementById("temp");
  // const max = document.getElementById("max");
  // const min = document.getElementById("min");
  // const dayNightEle = document.getElementById("day-night");
  // const imageEle = document.getElementById("image"); // Add an image element to display the day/night image
  
  // // Add event listener to search button
  // searchBtn.addEventListener("click", fetchWeather);
  
  // function fetchWeather() {
  //   const city = searchInput.value.trim(); // Get the city name from the input field
  //   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${appId}`;
  
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Extract relevant data from API response
  //       const { name, weather, main, sys } = data;
  
  //       // Update HTML elements with weather data
  //       cityEle.innerHTML = name;
  //       weatherEle.innerHTML = weather[0].description;
  //       temperature.innerHTML = main.temp + '°';
  //       max.innerHTML = main.temp_max;
  //       min.innerHTML = main.temp_min;
  
  //       // Calculate day/night difference based on sunrise and sunset times
  //       const sunrise = sys.sunrise;
  //       const sunset = sys.sunset;
  //       const currentTime = new Date().getTime() / 1000;
  //       const cityTimezoneOffset = data.timezone; // in seconds
  //       const cityCurrentTime = currentTime + cityTimezoneOffset;
  
  //       if (cityCurrentTime >= sunrise && cityCurrentTime < sunset) {
  //         dayNightEle.innerHTML = "Day";
  //         imageEle.src = 'day-time.webp'; // Show day time image
  //         imageEle.className = "fas fa-sun weather-icon sun";
  //         imageEle.style.color = "#ffc400";
  //       } else {
  //         dayNightEle.innerHTML = "Night";
  //         imageEle.src = 'night-time.jpg'; // Show night time image
  //         imageEle.className = "fas fa-moon weather-icon moon";
  //         imageEle.style.color = "#d6eaff";
  //       }
  //     })
  //     .catch(error => console.error(error));
  // }
  // // Initial fetch for default city (Karachi)
  // fetchWeather();
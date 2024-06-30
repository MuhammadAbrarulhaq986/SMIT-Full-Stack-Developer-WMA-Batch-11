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
// Define API ID, unit of measurement, and default city and country code
const appId = "6ade34e3eb8496ccb2b350b400d9d522";
const unit = "metric"; // use metric units for temperature (e.g. Celsius)
let city = "Karachi";
let countryCode = "pk"; // Pakistan country code

// Get references to HTML elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const cityEle = document.getElementById("city");
const weatherEle = document.getElementById("weather");
const temperature = document.getElementById("temp");
const max = document.getElementById("max");
const min = document.getElementById("min");
const dayNightEle = document.getElementById("day-night");
const imageEle = document.getElementById("image"); // Add an image element to display the day/night image

// Add event listener to search button
searchBtn.addEventListener("click", fetchWeather);

// Function to fetch weather data
function fetchWeather() {
  // Get city input value and trim whitespace
  city = searchInput.value.trim();

  // If no city is entered, use default city (Karachi)
  if (city === "") {
    city = "Karachi";
    countryCode = "pk";
  } else {
    // Use default country code (Pakistan) for now, update as needed
    countryCode = "pk";
  }

  // Construct API URL with city, country code, unit, and API ID
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=${unit}&APPID=${appId}`
  )
    .then(function (res) {
      // Parse JSON response
      return res.json();
    })
    .then(function (data) {
      // Extract relevant data from API response
      const { name, weather, main, sys } = data;

      // Update HTML elements with weather data
      cityEle.innerHTML = name;
      weatherEle.innerHTML = weather[0].description;
      temperature.innerHTML = main.temp + '°';
      max.innerHTML = main.temp_max;
      min.innerHTML = main.temp_min;

      // Calculate day/night difference based on sunrise and sunset times
      const sunrise = sys.sunrise;
      const sunset = sys.sunset;
      const currentTime = new Date().getTime() / 1000;
      const cityTimezoneOffset = data.timezone; // in seconds
      const cityCurrentTime = currentTime + cityTimezoneOffset;

      if (cityCurrentTime > sunrise && cityCurrentTime < sunset) {
        dayNightEle.innerHTML = "Day";
        imageEle.src = 'day-time.webp'; // Show day time image
        imageEle.className = "fas fa-sun weather-icon sun";
        imageEle.style.color = "#ffc400";
      } else {
        dayNightEle.innerHTML = "Night";
        imageEle.src = 'night-time.jpg'; // Show night time image
        imageEle.className = "fas fa-moon weather-icon moon";
        imageEle.style.color = "#d6eaff";
      }
    });
}

// Initial fetch for default city (Karachi)
fetchWeather();
// ******************************************************************************************************************
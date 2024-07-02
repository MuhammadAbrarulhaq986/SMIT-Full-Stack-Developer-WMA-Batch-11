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
// ******************************************************************************************************************
const appId = "6ade34e3eb8496ccb2b350b400d9d522";
const unit = "metric"; // use metric units for temperature (e.g. Celsius)

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

function fetchWeather() {
  const city = searchInput.value.trim(); // Get the city name from the input field
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${appId}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Extract relevant data from API response
      const { name, weather, main, sys } = data;

      // Update HTML elements with weather data
      cityEle.innerHTML = name;
      if (weather && weather.length > 0) {
        weatherEle.innerHTML = weather[0].description;
      } else {
        weatherEle.innerHTML = "No weather data available";
      }
      temperature.innerHTML = main.temp + '°';
      max.innerHTML = main.temp_max;
      min.innerHTML = main.temp_min;

      // Calculate day/night difference based on sunrise and sunset times
      const sunrise = sys.sunrise;
      const sunset = sys.sunset;
      const currentTime = new Date().getTime() / 1000;
      const cityTimezoneOffset = data.timezone; // in seconds
      const cityCurrentTime = currentTime + cityTimezoneOffset;

      switch (true) {
        case cityCurrentTime >= sunrise && cityCurrentTime <= sunset:

          dayNightEle.innerHTML = "Night <i class='fas fa-moon'></i>";
          imageEle.className = "fas fa-moon weather-icon";
          imageEle.style.color = "#d6eaff";
          break;
        default:
          dayNightEle.innerHTML = "Day <i class='fas fa-sun'></i>";
          imageEle.className = "fas fa-sun weather-icon";
          imageEle.style.color = "#ffc400";
      }
    })
    .catch(error => console.error(error));
}
// Initial fetch for default city (Karachi)
fetchWeather();
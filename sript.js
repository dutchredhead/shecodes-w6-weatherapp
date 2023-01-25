// Feature #1
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day}, ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#change-date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// 2
function handleSubmit(event) {
  event.preventDefault();
  // let searchInput = document.querySelector("#city-input");
  // let h1 = document.querySelector("h1");
  // h1.innerHTML = `${searchInput.value}`;
  // let apiKey = "595abd0ab4cf203e4c406091741d5137";
  let city = document.querySelector("#city-input").value;
  // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // axios.get(apiUrl).then(displayWeatherCondition);
  searchCity(city);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);

// //3
// function changeToFar(event) {
//   event.preventDefault();
//   let currentFarTem = document.querySelector("#current-temp");
//   currentFarTem.innerHTML = "49°";
// }

// let farenheit = document.querySelector("#fahrenheit");
// farenheit.addEventListener("click", changeToFar);

// function changeToCel(event) {
//   event.preventDefault();
//   let currentCelTem = document.querySelector("#current-temp");
//   currentCelTem.innerHTML = "9°";
// }

// let celcius = document.querySelector("#celcius");
// celcius.addEventListener("click", changeToCel);

// week 5
function displayWeatherCondition(response) {
  // console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "595abd0ab4cf203e4c406091741d5137";
  // let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

// function getCurrentLocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchLocation);
// }

// function searchLocation(position) {
//   let apiKey = "595abd0ab4cf203e4c406091741d5137";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
//   console.log(apiUrl);
//   axios.get(apiUrl).then(displayWeatherCondition);
// }

// let currentLocationButton = document.querySelector("#current-location-button");
// currentLocationButton.addEventListener("click", getCurrentLocation);

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");

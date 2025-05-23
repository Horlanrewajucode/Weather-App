const apiKey = "8f651b604754f2ed3a351343af7a867a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style = "display:block";
    document.querySelector(".weather").style = "display:none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assests/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assests/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assests/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assests/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assests/images/mist.png";
    }

      document.querySelector(".weather").style = "display: block";
      document.querySelector(".error").style = "display:none";

  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

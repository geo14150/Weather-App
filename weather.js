// OpenWeather api 

const apiKey = ""
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

// fetch data from the API 
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data = await response.json()
  console.log(data);
  document.querySelector('.weather').style.display = "flex"

  // display data 
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = (Math.round(data.main.temp)-273) + "°c";
  document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
  document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

  // change weather icon 
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "clouds.png"
  }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "rain.png"
  }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "drizzle.png"
  }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "mist.png"
  }else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "clear.png"
  }else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "snow.png"  
  }
}

searchBtn.addEventListener("click", (e) => {
  checkWeather(searchBox.value);
  console.log(e);
});

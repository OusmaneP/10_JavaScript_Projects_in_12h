/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

let cityNameDiv = document.getElementById('city-name');
let weatherTypeDiv = document.getElementById('weather-type');
let tempDiv = document.getElementById('temp');
let minTempDiv = document.getElementById('min-temp');
let maxTempDiv = document.getElementById('max-temp');

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd72c98894cmsh28b3af34c5863e1p19f360jsne4b9c3aa39ec',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };

  return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);




  // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
  //
  // //CODE GOES HERE
  // let response = await fetch(URL);
  // return await response.json();
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  let data = await getWeatherData(city);
  showWeatherData(data);
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  console.log(weatherData);
  cityNameDiv.innerText = weatherData.name;
  weatherTypeDiv.innerText = weatherData.weather[0].main;
  tempDiv.innerText = weatherData.main.temp;
  minTempDiv.innerText = weatherData.main.temp_min;
  maxTempDiv.innerText = weatherData.main.temp_max;
};












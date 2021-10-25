function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}

let apiKey = "caa883a4a60d93878755b08a933f74ea";
let apiUrl =
  "`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

import axios from "axios";

export const getWeather = function () {
     return axios.get('http://api.weatherapi.com/v1/forecast.json?key=6b6d8527e09c4872874151726221709&q=Kamelnitskiy&days=14')
}

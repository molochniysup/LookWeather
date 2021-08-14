const getUrlWeatherByCity = (cityName) => `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6d6b8349b74f44de036f03e54f9f88ce`;
const getUrlWeatherByPosition = ({ coord }) => `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&mode=json&units=metric&appid=6d6b8349b74f44de036f03e54f9f88ce`;
const DEFAULT_CITY = 'Minsk';
const DEFAULT_POSITION = { coord: { lat: 53.897980, lon: 27.556295 } };

export { getUrlWeatherByCity, getUrlWeatherByPosition, DEFAULT_POSITION, DEFAULT_CITY };

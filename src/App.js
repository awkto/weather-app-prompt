import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!location) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const API_KEY = '531a64a5188bfb0d6d4e69305b670916';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please check the city name and try again.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="weather-container">
        <h1>Weather App</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
          />
          <button onClick={fetchWeather} disabled={loading}>
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <div className="weather-details">
              <div className="temp">
                <h3>{Math.round(weatherData.main.temp)}°C</h3>
                <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
              </div>
              <div className="condition">
                <img 
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                  alt={weatherData.weather[0].description} 
                />
                <p>{weatherData.weather[0].description}</p>
              </div>
            </div>
            <div className="additional-info">
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>Wind: {weatherData.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
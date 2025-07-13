import { fetchCurrentWeather, fetchWeatherForecast, getWeatherIcon } from './weatherService.js';
import { updateCurrentWeather, updateForecast, showError } from './ui.js';

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const locationInput = document.getElementById('location-input');
    
    // Default location
    fetchWeather('London');
    
    searchBtn.addEventListener('click', () => {
        const location = locationInput.value.trim();
        if (location) {
            fetchWeather(location);
        }
    });
    
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const location = locationInput.value.trim();
            if (location) {
                fetchWeather(location);
            }
        }
    });
    
    async function fetchWeather(location) {
        try {
            const currentData = await fetchCurrentWeather(location);
            updateCurrentWeather(currentData);
            
            const forecastData = await fetchWeatherForecast(location);
            updateForecast(forecastData);
        } catch (error) {
            showError('Could not fetch weather data. Please try another location.');
            console.error('Error:', error);
        }
    }
});

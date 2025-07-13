function updateCurrentWeather(data) {
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('wind-speed').textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('precipitation').textContent = data.rain ? `${data.rain['1h'] || 0}%` : '0%';
    
    const weatherIcon = document.querySelector('#weather-main .weather-icon i');
    const iconCode = data.weather[0].icon;
    weatherIcon.className = getWeatherIcon(iconCode);
}

function updateForecast(data) {
    const forecastContainer = document.getElementById('forecast-items');
    forecastContainer.innerHTML = '';
    
    for (let i = 0; i < data.list.length; i += 8) {
        const forecast = data.list[i];
        const date = new Date(forecast.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'flex items-center justify-between bg-white bg-opacity-10 rounded-lg p-3';
        forecastItem.innerHTML = 
            `<div class="w-1/4">${dayName}</div>
            <div class="w-1/4 text-center text-2xl">
                <i class="${getWeatherIcon(forecast.weather[0].icon)}"></i>
            </div>
            <div class="w-1/4 text-right">${Math.round(forecast.main.temp_max)}°</div>
            <div class="w-1/4 text-right opacity-70">${Math.round(forecast.main.temp_min)}°</div>`;
        
        forecastContainer.appendChild(forecastItem);
    }
}

function showError(message) {
    alert(message);
}

export { updateCurrentWeather, updateForecast, showError };

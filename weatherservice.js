const apiKey = '10577a9d6d20d50e737bb45bdf0d462f';

async function fetchCurrentWeather(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
    if (!response.ok) {
        throw new Error('Could not fetch weather data');
    }
    return await response.json();
}

async function fetchWeatherForecast(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`);
    if (!response.ok) {
        throw new Error('Could not fetch forecast data');
    }
    return await response.json();
}

function getWeatherIcon(iconCode) {
    const iconMap = {
        '01d': 'fas fa-sun',
        '01n': 'fas fa-moon',
        '02d': 'fas fa-cloud-sun',
        '02n': 'fas fa-cloud-moon',
        '03d': 'fas fa-cloud',
        '03n': 'fas fa-cloud',
        '04d': 'fas fa-cloud',
        '04n': 'fas fa-cloud',
        '09d': 'fas fa-cloud-rain',
        '09n': 'fas fa-cloud-rain',
        '10d': 'fas fa-cloud-showers-heavy',
        '10n': 'fas fa-cloud-showers-heavy',
        '11d': 'fas fa-bolt',
        '11n': 'fas fa-bolt',
        '13d': 'fas fa-snowflake',
        '13n': 'fas fa-snowflake',
        '50d': 'fas fa-smog',
        '50n': 'fas fa-smog'
    };
    
    return iconMap[iconCode] || 'fas fa-question';
}

export { fetchCurrentWeather, fetchWeatherForecast, getWeatherIcon };

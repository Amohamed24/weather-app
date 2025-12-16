
const API_KEY = "4493bae1ad094f41a2352318251412"; 


const cityElement = document.getElementById("city");
const temperatureElement = document.getElementById("temperature");
const searchInput = document.getElementById("citySearch");
const searchBtn = document.getElementById("searchBtn");


async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error detail:", errorText);
            throw new Error("Failed to fetch weather data");
        }
        
        const data = await response.json();
        console.log("Weather data:", data);
        
        cityElement.textContent = data.location.name;
        temperatureElement.textContent = `${Math.round(data.current.temp_f)}°F`;
        
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        cityElement.textContent = "Error";
        temperatureElement.textContent = "Error";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) {
        fetchWeatherData(city);
    }
});

fetchWeatherData("Minneapolis"); 
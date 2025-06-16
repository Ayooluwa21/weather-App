async function fetchWeather() {
    const city = document.getElementById("city").value;
    const display = document.getElementById("display"); 

    const apiKey = "00a583039c2b98acba10e13bc56325be";
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(weatherApi);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        // Display the weather information
        display.innerHTML = `
            <div class="mx-auto rounded p-3 border-dark text-center">
                <h2>Weather Information</h2>
                <h1 class="text-primary">City: ${data.name}</h1>
                <p class="fs-4 text-light">Weather: ${data.weather[0].description}</p>
                <p class="fs-4 text-warning">Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            </div>
        `;
    } catch (error) {
        console.error("Failed to fetch weather data:", error);

        // Display error message
        display.innerHTML = `
            <div class="mx-auto rounded p-3 border-dark text-center text-danger">
                <h2>Error Loading Weather Data</h2>
                <p>${error.message}</p>
            </div>
        `;
    }
}
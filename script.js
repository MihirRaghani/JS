const apiKey = "YOUR_API_KEY_HERE";  

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerHTML = "City not found!";
                return;
            }

            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temperature: ${temperature} °C</p>
                <p>🌥 Condition: ${description}</p>
                <p>💧 Humidity: ${humidity}%</p>
                <p>🌬 Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.log("Error:", error);
            document.getElementById("result").innerHTML = "Something went wrong!";
        });
}

# Weather-App
This App is showing us to weather detail 
Author- Ashutosh Kumar
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="weather-app">
        <h1>Weather App</h1>
        <div class="search-box">
            <input type="text" id="city-input" placeholder="Enter a city">
            <button id="search-button">Search</button>
        </div>
        <div class="weather-info">
            <h2 id="city-name">Weather in City Name</h2>
            <p id="temperature">--°C</p>
            <p id="description">Weather description</p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

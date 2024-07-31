document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '79241e4d9a91012d186179afea674bf9'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').innerText = `Weather in ${data.name}`;
            document.getElementById('temperature').innerText = `${data.main.temp}°C`;
            document.getElementById('description').innerText = data.weather[0].description;
        })
        .catch(error => {
            alert('City not found!');
        });
});

<h1>Weather API Project</h1>
    <p>This project is a simple React-based Weather App that fetches weather information and displays it to the user. The application allows users to search for a city and view real-time weather data.</p>
<h2>Features</h2>
    <ul>
        <li>Displays weather information, including temperature, humidity, and conditions.</li>
        <li>Allows users to search for weather information by city.</li>
        <li>Real-time updates for the weather data.</li>
    </ul>

<h2>Project Structure</h2>
    <pre>
    /src
    ├── components
    │   ├── SearchBox.js
    │   ├── InfoBox.js
    ├── App.js
    ├── WeatherApp.js
    └── index.js
    </pre>

<h2>Technologies Used</h2>
    <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Weather API (e.g., OpenWeatherMap API)</li>
    </ul>



<h2>Components</h2>
    <h3>SearchBox</h3>
    <p>Allows users to search for a city. It accepts an input and triggers the <code>updateInfo</code> function with new weather data.</p>

<h3>InfoBox</h3>
    <p>Displays the weather information, including temperature, humidity, and weather conditions.</p>

   <h2>Usage Example</h2>
   <p>When the user enters a city in the search box, the app fetches the weather data from the Weather API and updates the display with the relevant information.</p>




# Weather App

A simple React weather application that allows users to search for weather information by city name. This is a proof-of-concept created with a simple AI prompt sent through Claude Code cli tool.
Prompt : "Build a weather app using react"

## Features

- Search for weather by city name
- Display current temperature, weather conditions, and additional details
- Responsive design for desktop and mobile devices
- Error handling for failed API requests

## Screenshot
![image](https://github.com/user-attachments/assets/ff6d3710-eda2-41c1-b1a7-64bcff611c6f)


## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) (free tier is available)
4. Open `src/App.js` and replace `YOUR_API_KEY` with your actual OpenWeatherMap API key
5. Start the development server:
   ```
   npm start
   ```

## Technologies Used

- React.js
- Axios for API requests
- OpenWeatherMap API
- CSS for styling

## Project Structure

- `src/App.js`: Main component containing the weather app functionality
- `src/App.css`: Styles for the weather app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Future Improvements

- Add forecast data for upcoming days
- Add geolocation to automatically detect user's location
- Add unit conversion (Celsius/Fahrenheit)
- Implement themes or background changes based on weather conditions

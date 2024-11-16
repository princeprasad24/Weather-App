# Weather App

## Overview

The Weather App allows users to check the current weather of any city around the world. The app fetches data from the [WeatherAPI](https://www.weatherapi.com/), and displays weather information such as:

- Temperature (in Celsius)
- Weather condition (Sunny, Cloudy, Rainy, etc.)
- Humidity percentage
- Wind speed (in km/h)
- A description of the weather with associated mood

The app provides a dynamic user interface that changes based on the weather condition, making it visually interactive.

## Features

- **Enter any city name**: Input the city you want to check the weather for.
- **Weather info display**: Displays detailed weather info, including temperature, humidity, wind speed, and condition.
- **Dynamic background**: Changes the background color depending on the current weather condition (e.g., Sunny, Rainy, etc.).
- **Additional weather details**: Displays a description and mood associated with the weather condition.

## How to Use

1. Enter the **city name** in the input field.
2. Click the **"Get Weather"** button or press **Enter** to fetch the weather information for that city.
3. The app will display the current weather information, including the temperature, weather condition, humidity, wind speed, and a mood description.
4. The background color will change according to the weather condition (e.g., sunny, rainy, etc.).

## Getting Started

To run this app locally on your machine, follow these steps:

### Prerequisites

- A web browser (Google Chrome, Firefox, etc.).
- An internet connection to fetch weather data.

### Clone the Repository

1. Clone the repository to your local machine using Git:
    ```bash
    git clone https://github.com/princeprasad24/Weather-App.git
    ```

2. Navigate into the project directory:
    ```bash
    cd Weather-App
    ```

### Setup

1. Open the `index.html` file in your preferred web browser.
2. Make sure you have an active internet connection to fetch weather data from the API.

### API Key

This app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch weather data. You'll need an API key to access the service.

1. Go to [WeatherAPI](https://www.weatherapi.com/).
2. Sign up for a free account to get an API key.
3. In the `script.js` file, replace the placeholder API key in the `getWeather()` function:

    ```javascript
    let apiKey = "your-api-key-here";
    ```

### Running the App

Once you've set up the API key, simply open the `index.html` file in your browser and start using the app. Enter a city name and click **"Get Weather"** to view the weather information.

## File Structure

- `index.html` - The main HTML structure of the app.
- `style.css` - The CSS file for styling the app (can be edited to customize the design).
- `script.js` - The JavaScript file that handles fetching weather data from the API and displaying it on the page.

## Example

### City: **London**

- **Temperature**: 12°C
- **Condition**: Partly Cloudy
- **Humidity**: 78%
- **Wind Speed**: 10 km/h
- **Description**: A mix of clouds and sunshine.
- **Mood**: Neutral, mild

### City: **New York**

- **Temperature**: 20°C
- **Condition**: Sunny
- **Humidity**: 60%
- **Wind Speed**: 15 km/h
- **Description**: Bright, sunny skies with no clouds.
- **Mood**: Cheerful, warm

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to fork the repository, open issues, and submit pull requests for improvements.

---

Enjoy using the Weather App and stay informed about the weather wherever you are!

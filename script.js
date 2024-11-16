async function getWeather() {
  let city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a city name.");
  } else {
    let apiKey = "a5832fdb17f0495c86543341241611";
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
      let getData = await fetch(url);
      let data = await getData.json();
      displayWeather(data);
    } catch (error) {
      document.getElementById(
        "weatherResult"
      ).innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
  }
}

document.getElementById("line").style.visibility = "visible";

document.getElementById("city").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeather();
    
  }
});

function displayWeather(data) {
  const cityName = data.location.name;
  const country = data.location.country;
  const temperature = data.current.temp_c;
  const iconUrl = data.current.condition.icon;
  const condition = data.current.condition.text;
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_kph;

  const weatherHTML = `
          <h2>${cityName}, ${country}</h2>
          <img src="https:${iconUrl}" alt="${condition}">
          <p><strong>${condition}</strong></p>
          <p>Temperature: ${temperature}°C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${windSpeed} km/h</p>
        `;
  document.getElementById("weatherResult").innerHTML = weatherHTML;
  setWeatherColor(condition);
  setWeatherDetails(condition);
}

function setWeatherColor(condition) {
  const colors = {
    Sunny: "#FFD700",
    "Partly Cloudy": "#B0C4DE",
    Cloudy: "#778899",
    Rainy: "#4682B4",
    Stormy: "#708090",
    Snowy: "#FFFFFF",
    Foggy: "#D3D3D3",
    Hail: "#A9A9A9",
    Windy: "#87CEEB",
    Blizzard: "#F8F8FF",
    Heatwave: "#FF6347",
    "Dust Storm": "#D2B48C",
    Mist: "#C0C0C0",
  };

  document.body.style.backgroundColor = colors[condition] || "#FFFFFF";
}

function setWeatherDetails(condition) {
  const weatherDetails = {
    Sunny: {
      description: "Bright, sunny skies with no clouds.",
      mood: "Cheerful, warm",
    },
    "Partly Cloudy": {
      description: "A mix of clouds and sunshine.",
      mood: "Neutral, mild",
    },
    Cloudy: {
      description: "Overcast skies with little to no sunshine.",
      mood: "Calm, somber",
    },
    Rainy: {
      description: "Rain ranging from light drizzles to heavy downpours.",
      mood: "Refreshing, cozy",
    },
    Stormy: {
      description: "Thunderstorms with lightning, rain, and high winds.",
      mood: "Intense, dramatic",
    },
    Snowy: {
      description:
        "Snowfall ranging from light flurries to heavy accumulation.",
      mood: "Cold, peaceful",
    },
    Foggy: {
      description: "Reduced visibility due to moisture in the air.",
      mood: "Mysterious, calm",
    },
    Hail: {
      description: "Ice pellets falling during severe storms.",
      mood: "Harsh, chaotic",
    },
    Windy: {
      description: "Strong winds, sometimes with gusts, but otherwise clear.",
      mood: "Energetic, brisk",
    },
    Blizzard: {
      description: "Heavy snowstorm with strong winds.",
      mood: "Severe, intense",
    },
    Heatwave: {
      description: "Extremely hot weather, often prolonged.",
      mood: "Intense, sweltering",
    },
    "Dust Storm": {
      description: "Strong winds carrying dust and sand.",
      mood: "Dry, harsh",
    },
    Mist: {
      description: "A light haze reducing visibility, often calm and serene.",
      mood: "Peaceful, dreamy",
    },
  };

  // Fetch the weather details for the given condition
  const details = weatherDetails[condition] || {
    description: "Unknown weather condition.",
    mood: "Neutral",
  };

  // Display the description and mood in your app
  document.getElementById("weatherResult").innerHTML += `
    <h4><strong>Description:</strong> ${details.description}</h4>
    <p><strong>Mood:</strong> ${details.mood}</p>
  `;
}

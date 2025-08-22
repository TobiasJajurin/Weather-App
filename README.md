# Weather App

A beautiful weather application built with React and Vite, featuring real-time weather data from OpenWeatherMap API.

## Features

- 🌤️ Real-time weather information
- 📍 Current location weather
- 🔍 Search for any city worldwide
- 📅 5-day weather forecast
- 🌙 Dark/Light theme toggle
- 🌡️ Celsius/Fahrenheit unit toggle
- 💾 Persistent settings and last search
- 📱 Responsive design
- ⚡ Fast and modern UI

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Wheater
```

2. Install dependencies:
```bash
npm install
```

3. Set up your API key:
   - Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for a free account
   - Get your API key from the dashboard
   - Create a `.env` file in the root directory and add:
   ```
   VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
   ```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── SearchBar/
│   ├── WeatherCard/
│   ├── ForecastList/
│   ├── ErrorMessage/
│   └── LoadingSpinner/
├── contexts/
│   ├── ThemeContext.jsx
│   ├── UnitContext.jsx
│   └── WeatherContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **OpenWeatherMap API** - Weather data
- **CSS Variables** - Theme system
- **LocalStorage** - Data persistence

## Context System

The app uses three main contexts for state management:

- **ThemeContext**: Manages dark/light theme toggle
- **UnitContext**: Handles Celsius/Fahrenheit conversion
- **WeatherContext**: Manages weather data and API calls

## API Usage

The app uses the following OpenWeatherMap API endpoints:
- Current weather: `/weather`
- 5-day forecast: `/forecast`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [DevChallenges.io](https://devchallenges.io/challenge/weather-app) for the design inspiration

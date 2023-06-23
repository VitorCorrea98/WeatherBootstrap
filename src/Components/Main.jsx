import React, { useEffect, useMemo, useState } from "react";
import WeatherForm from "../Utils/WeatherForm";
import WeatherCard from "../Utils/WeatherCard";
import ForecastCard from "../Utils/ForecastCard";
import getWeatherData from "../Utils/WeatherService";
import BeforeFetch from "./BeforeFetch";
import debounce from "lodash.debounce";

const Main = () => {
	const [weather, setWeather] = useState(null);
	const [forecast, setForecast] = useState([]);
	const [city, setCity] = useState("");
	const [fetchError, setFetchError] = useState(false);
	const [inputError, setInputError] = useState(false);
	const [loading, setLoading] = useState(false);

	const Timeout = (time) => setTimeout(() => setLoading(false), time);

	const getWeather = async () => {
		try {
			setLoading(true);
			const weatherData = await getWeatherData(city);
			if (weatherData) {
				setWeather(weatherData);
				setForecast(weatherData.forecast.forecastday);
				setFetchError(false);
			}
		} catch (error) {
			console.log(error);
			setFetchError(true);
		} finally {
			Timeout(2000);
		}
	};

	const debouncedGetWeather = debounce(getWeather, 500); // Debounced function

	useEffect(() => {
		return () => {
			// Cleanup debounce timer
			debouncedGetWeather.cancel();
		};
	}, [debouncedGetWeather]);

	const handleInput = (e) => {
		e.preventDefault();

		if (!city || !/^[a-zA-Z\s]+$/.test(city)) {
			setInputError(true);
			return;
		}

		setInputError(false);

		debouncedGetWeather(); // Call the debounced function
	};

	const memoizedWeatherCard = useMemo(
		() => <WeatherCard weather={weather} />,
		[weather]
	);
	const memoizedForecastCard = useMemo(
		() => <ForecastCard forecast={forecast} />,
		[forecast]
	);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<WeatherForm
				city={city}
				handleInput={handleInput}
				handleCityChange={(e) => setCity(e.target.value)}
			/>
			{inputError ? (
				<div className="error-message">
					Error occurred while inputting the city.
				</div>
			) : fetchError ? (
				<div className="error-message">
					Error occurred while fetching weather data.
				</div>
			) : (
				<>
					{loading ? (
						<div className="loading-indicator">Loading...</div>
					) : forecast.length === 0 ? (
						<BeforeFetch />
					) : (
						<>
							{memoizedWeatherCard}
							{memoizedForecastCard}
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Main;

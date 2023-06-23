import React from "react";

const WeatherCard = ({ weather }) => {
	if (!weather || !weather.location) {
		return null; // or render a loading/error message
	}

	const date = weather.location.localtime;
	const hour = date.split(" ")[1];

	return (
		<div className="d-flex justify-content-around">
			<div>
				<h2>{weather.location.name},</h2>
				<h2>{weather.location.country}</h2>
				<h3>{hour}</h3>
			</div>
			<div className="text-center mx-5">
				<img
					src={weather.current.condition.icon}
					alt={weather.current.condition.text}
				/>
				<h4>{weather.current.condition.text}</h4>
				<h4>{weather.current.temp_c}°C</h4>
			</div>
		</div>
	);
};

export default WeatherCard;

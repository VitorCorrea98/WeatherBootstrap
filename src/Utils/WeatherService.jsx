import axios from "axios";

const getWeatherData = async (city) => {
	try {
		const response = await axios.get(
			`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=3`
		);

		return response.data;
	} catch (error) {
		console.log(error);
		throw new Error("Error occurred while fetching weather data.");
	}
};

export default getWeatherData;

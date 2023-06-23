import React from "react";

const ErrorMessage = ({ errorType }) => {
	let errorMessage = "";
	if (errorType === "input") {
		errorMessage = "Error occurred while inputting the city.";
	} else if (errorType === "fetch") {
		errorMessage = "Error occurred while fetching weather data.";
	}

	return <div className="error-message">{errorMessage}</div>;
};

export default ErrorMessage;

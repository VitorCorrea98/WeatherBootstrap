import React, { useEffect, useState } from "react";

const ForecastCard = ({ forecast }) => {
	const [dayToUse, setDayToUse] = useState([]);

	useEffect(() => {
		const days = forecast.map((day) => {
			const date = new Date(day.date.split("-").join());
			return date.toDateString().split(" ")[0];
		});
		setDayToUse(days);
	}, [forecast]);

	return (
		<div className="">
			<ul className="d-flex text-center justify-content-center">
				{forecast.map((day, index) => (
					<li key={index} className="d-inline-flex p-5">
						<div className="d-block">
							<span>{dayToUse[index]}</span>
							<img
								src={day.day.condition.icon}
								alt={day.day.condition.text}
								className=""
							/>
							<div
								className="d-flex space-x-2"
								id="temp_forecast">
								<span className="">
									{day.day.maxtemp_c}&deg;/
								</span>
								<span className="text-white ">
									{day.day.mintemp_c}&deg;
								</span>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ForecastCard;

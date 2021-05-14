
let appRoot = document.querySelector("#app-root");

fetch("https://api.troposphere.io/forecast/48.5,11.123?token=9df0e3cf695dd168892cc9a71bfb12b8e2ab73b2748917f689")
	.then(response => response.json())
	.then(data => {
		data.data.daily.forEach((day)  => {
			appRoot.append(createForecastCard(day));
		})
	});

	function createForecastCard(day) {
		let forecastContainer = document.createElement("div");
		forecastContainer.classList.add("forecast-card");
		let tempSpan = document.createElement("span");
		let weatherType = document.createElement("div");
		weatherType.classList.add("weather");
		tempSpan.innerText = parseInt(day.temperature, 10) + "°C";
		weatherType.innerText = day.type;
		var str = day.type;
		str = str.replace(/-/g, ' ');
		forecastContainer.append(tempSpan);
		forecastContainer.append(weatherType);
		return forecastContainer;
	}

	
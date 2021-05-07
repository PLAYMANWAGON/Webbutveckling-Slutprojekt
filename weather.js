
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
		weatherType.classList.add("weatherImg");
		tempSpan.innerText = parseInt(day.temperature, 10) + "° C";
		weatherType.innerText = day.type;
		if (weatherType = "rain-showers") {
			var img = document.createElement("img");
			img.src = "rain.svg";
		}
		forecastContainer.append(tempSpan);
		forecastContainer.append(weatherType);
		return forecastContainer;
	}

	
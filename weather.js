
let appRoot = document.querySelector("#app-root");

fetch("https://api.troposphere.io/forecast/48.5,11.123?token=9df0e3cf695dd168892cc9a71bfb12b8e2ab73b2748917f689")
	.then(response => response.json())
	.then(data => {
		data.data.current.forEach((today) => {
			appRoot.append(createCurrentForecast(today));
		})
	})
	.then(data => {
		data.data.daily.forEach((day) => {
			appRoot.append(createForecastCard(day));
		})
	});

	function createCurrentForecast(today) {
		let currentForecastContainer = document.createElement("div");
		currentForecastContainer.classList.add("current-card");
		let currentTemp = document.createElement("span");
		currentTemp.innerText = parseInt(today.temperature, 10) + "° C";
		currentForecastContainer.append(currentTemp);
		return currentForecastContainer;
	}

	function createForecastCard(day) {
		let forecastContainer = document.createElement("div");
		forecastContainer.classList.add("forecast-card");
		let tempSpan = document.createElement("span");
		tempSpan.innerText = parseInt(day.temperature, 10) + "° C";
		forecastContainer.append(tempSpan);
		return forecastContainer;
	}

	
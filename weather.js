fetch("https://api.troposphere.io/forecast/48.5,11.123?token=9df0e3cf695dd168892cc9a71bfb12b8e2ab73b2748917f689")
	.then(response => response.json())
	.then(data => console.log(data));




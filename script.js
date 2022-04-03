"use strict";
let d = [
	{
		MMSI: 367078130,
		LAT: 0.06667,
		LON: -122.3886,
		Length: 40.0,
		Width: 10.0,
	},
	{
		MMSI: 367078130,
		LAT: 0.06667,
		LON: -122.3886,
		Length: 40.0,
		Width: 10.0,
	},
	{
		MMSI: 367078130,
		LAT: 0.06667,
		LON: -122.3886,
		Length: 40.0,
		Width: 10.0,
	},
];

d.forEach((i) => {
	document.querySelector("#vtable").innerHTML +=
		'<tr><th scope="row">' +
		i.MMSI +
		"</th><td>" +
		i.LAT +
		"</td><td>" +
		i.LON +
		"</td><td>" +
		i.Length +
		"</td><td>" +
		i.Width +
		"</td></tr>";
});

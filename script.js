"use strict";
axios.get("http://127.0.0.1:8000/").then(function (response) {
	let d = response.data;
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
});

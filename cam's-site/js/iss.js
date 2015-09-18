var ISS_URL = "http://api.open-notify.org/iss-now.json"

function successFunction(data){
	// console.log('data:', data);
	var latitude = data.iss_position.latitude;
	var longitude = data.iss_position.longitude;
	$("#longitude").html(longitude);
	$("#latitude").html(latitude);
	newMarker(latitude, longitude, map)	
}


function newMarker(latitude, longitude) {
	var marker = new google.maps.Marker({
    		position: {lat: latitude, lng:longitude},
    		map: map,
    		title: 'map'	
		});
}

function locate(){
	console.log(ISS_URL);
	return $.ajax({
		url: ISS_URL,
		type: 'GET',
		dataType: "jsonp",
	})
}

$(document).ready(function(){
	// $("#locate").bind("click", locate)
	setInterval(function(){
		locate().then(successFunction)
	}, 1000);
})
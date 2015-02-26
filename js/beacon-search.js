$(function(){

	function getAddress(){
		$('.map-destination-search').on('click', function(){
			var address=$('input:text').val();
			alert(address)
		})
	}

	function createMap(getAddress){

		var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8,
          disableDefaultUI: true
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
	}

	getAddress();
	createMap()

	// $('.map-destination-input').on('focus', function(){
	// 	alert(address);
	// };

});

//Google API Key: AIzaSyCzi_iLW0XTWeumDAAUpK5MUoo3bVwpuf8
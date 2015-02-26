$(function(){

	function time(){
		var currentDate = new Date();
		var currentTime = currentHour+":"+currentMin;
		var currentHour = currentdate.getHours()
		var currentMin = currentdate.getMinutes()
		if (currentHour >12){
		    currentHour-=12;
		    currentTime+=' pm'
		} else {
		    currentTime+=' am'
		}

		console.log(currentTime);
		return currentTime;
	};

	function placeTime(time){
		$('.clock-dock__time').val(time);
	}

	time();
	placeTime();
	
});
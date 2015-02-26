$(function(){
  function getLatLong(){

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function coords(position) {
          longitude = position.coords.longitude;          
          latitude = position.coords.latitude;
          console.log("Lat Long is : " + longitude +"," + latitude);
          return {"latitude": latitude, "longitude": longitude};
      }, function (error) {
           alert("Error: " + error.code);
        },
      {
        enableHighAccuracy : true,     
        timeout : 10000,                
        maximumAge : 1000           
      });
    } else{
       alert ("GEOLOCATION NOT SUPPORTED....");
    }
  }

  getLatLong()
});
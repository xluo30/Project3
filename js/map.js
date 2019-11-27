var map;
     function initMap() {
        var chongqing = {lat:29.4316, lng:  106.9123};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: chongqing ,
        });
        var marker = new google.maps.Marker({
          position: chongqing,
          map: map
		
        });
      }
  
	  window.addEventListener('load', chongqing);

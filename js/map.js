var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8556217, lng: -87.6358867},
    zoom: 12
  });
  var image = "image/IIT.png";
  var beachMarker = new google.maps.Marker({
    position: {lat: 41.8455552, lng: -87.6283674},
    map: map,
    icon: image
  });

  var image = "image/Lake.png";
  var beachMarker = new google.maps.Marker({
    position: {lat: 41.8443403, lng: -87.5795727},
    map: map,
    icon: image
  });

  var image = "image/Downtown.png";
  var beachMarker = new google.maps.Marker({
    position: {lat: 41.8880741, lng: -87.6357704},
    map: map,
    icon: image
  });
}

window.addEventListener('onload',initMap);
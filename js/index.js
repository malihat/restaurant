// Initialize and add the map
function initMap() {
  const locations = [[40.727730, -73.812900], [40.766670, -73.913100 ]];
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {lat: 40.7675, lng: -73.8331}
  });
  for (var i=0; i<locations.length; i++) {
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
    map: map,
  });
  }
}

document.getElementById('nav-icon3').addEventListener('click', function() {
  this.classList.toggle('open');  
  document.querySelector('.hidden-navbar').classList.toggle('open');
});



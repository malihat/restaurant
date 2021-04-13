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

// $(document).ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

// console.log(document.documentElement.clientWidth);
// console.log(window.screen.availWidth);
// console.log(window.innerWidth);
// window.addEventListener('resize', function() {
//   if (window.innerWidth > 580) {
//     document.querySelector('.hidden-navbar').style.display = 'none';
//   }
// });
// ----------------
// document.getElementById('nav-icon3').addEventListener('click', function() {
//   this.classList.toggle('open');  
//   document.querySelector('.hidden-navbar').style.display = 'none';
//   if (this.classList.contains('open')) {
//       document.querySelector('.hidden-navbar').style.display = 'block';
//   } 
// });
// -------------------------------  https://codepen.io/designcouch/pen/Atyop
document.getElementById('nav-icon3').addEventListener('click', function() {
  this.classList.toggle('open');  
  document.querySelector('.hidden-navbar').classList.toggle('open');
});


// document.getElementById('nav-icon3').addEventListener('click', function() {
//   document.querySelector('.hidden-navbar').style.display = 'block';
// });
// ***************************
// document.querySelector('i.fa.fa-bars').addEventListener('click', function() {
//   document.querySelector('.hidden-navbar').style.display = 'block';
// });
// document.querySelector('i.fa.fa-times').addEventListener('click', function() {
//   document.querySelector('.hidden-navbar').style.display = 'none';
// });

// function initMap() {
//     // The location of Uluru
//     const position = { lat: 40.766670, lng: -73.913100 };
//     // The map, centered at Uluru
//     const secondMap = new google.maps.Map(document.getElementById("map-2"), {
//       zoom: 8,
//       center: position,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//       position: position,
//       map: secondMap,
//     });
// }
// Map

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(59.9992618,30.3648466)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "http://i.neoseeker.com/mgv/499846/846/33/15847_179440563793_179437393793_2772323_4548598_n_icon.jpg";
  var myLatLng = new google.maps.LatLng(59.999,30.364);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
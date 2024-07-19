function drawRoute(origin, dest) {
  var polylineCoordinates = [
    new google.maps.LatLng(origin.lat, origin.long),
    new google.maps.LatLng(dest.lat, dest.long),
  ];

  var polylinePath = new google.maps.Polyline({
    path: polylineCoordinates,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 1.0,
    strokeWeight: 0.6,
  });

  polylinePath.setMap(map);
  polylines.push(polylinePath);
}

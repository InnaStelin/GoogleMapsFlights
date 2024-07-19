function drawRoutes() {
  getUserSelection();
  clearMapAndMenuBar();

  //Filter routes list to get routes for origin, destination selected by the user
  //Route contains origin, stop, and destination stations (airports).
  //For now, we are looking at routes with one stop only.
  var originResult = stations.filter((station) => station.code == originCode);
  origin = originResult[0];

  var destinationResult = stations.filter(
    (station) => station.code == destinationCode
  );
  destination = destinationResult[0];

  //Get stops
  var stopsOnRoute = routes.filter(
    (route) =>
      route.origin == originCode && route.destination == destinationCode
  );
  var stops = [];
  for (let stop of stopsOnRoute) {
    for (let station of stations) {
      if (stop.stops == station.code) {
        stops.push(station);
      }
    }
  }

  //We display station code for origin, destination stations only
  var isOrgDes = true;
  drawMarker(origin, isOrgDes);
  drawMarker(destination, isOrgDes);

  if (stops.length === 0) {
    noFlightsFound = document.getElementById("noFlightsFound");
    noFlightsFound.innerHTML = "No flights found for this route.";
  }

  var isOrgDes = false;
  for (let stop of stops) {
    drawRoute(origin, stop);
    drawMarker(stop, isOrgDes);
    drawRoute(stop, destination);
  }
  recenterMap();
  map.setZoom(3);
}

function getUserSelection() {
  var element, text, start;
  element = document.getElementById("selOrigin");
  text = element.options[element.selectedIndex].text;
  start = text.indexOf("(");
  originCode = text.substr(start + 1, 3);

  var element, text, start;
  element = document.getElementById("selDestination");
  text = element.options[element.selectedIndex].text;
  start = text.indexOf("(");
  destinationCode = text.substr(start + 1, 3);
}

function clearMapAndMenuBar() {
  for (let marker of markers) {
    marker.setMap(null);
  }
  markers = [];
  for (let polyline of polylines) {
    polyline.setMap(null);
  }
  polylines = [];

  attractionsInfo = document.getElementById("attractionsInfo");
  attractionsInfo.innerHTML = "";

  noFlightsFound = document.getElementById("noFlightsFound");
  noFlightsFound.innerHTML = "";
}

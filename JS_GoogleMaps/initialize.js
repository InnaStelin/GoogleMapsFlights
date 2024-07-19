var routes = [];
var stations = [];
var attractions = [];

var originCode;
var destinationCode;
var origin;
var destination;

var map;
var markers = []; //Used to draw origin/destination markes and stop markers
var polylines = []; //Used to draw flight routes

function initialize() {
  loadData();

  //Initially map is centered around Greenwich meridian
  //From wiki: Greenwich meridian is a geographical reference line
  //that passes through the Royal Observatory, Greenwich, in London, England.
  var greenwichMeridian = { lat: 51.49, long: 0.0098 };
  var mapOptions = {
    center: new google.maps.LatLng(
      greenwichMeridian.lat,
      greenwichMeridian.long
    ),
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    //panControl: true,
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  google.maps.event.addListenerOnce(map, "tilesloaded", function () {
    //Populate origin and destination dropdown lists in sidebar
    //They contain origins and destinations of routes loaded in loadData()
    //Set interface is used here since it excludes duplicates
    //We display both name and code in dropdown list, for example: Boston - (BOS)
    var originCodes = new Set();
    var destinationCodes = new Set();

    for (let route of routes) {
      originCodes.add(route.origin);
      destinationCodes.add(route.destination);
    }

    selOrigin = document.getElementById("selOrigin");
    for (let code of originCodes) {
      var station = stations.filter((station) => station.code == code);
      selOrigin.innerHTML +=
        "<option>" + station[0].name + "  - (" + code + ")" + "</option>";
    }

    selDestination = document.getElementById("selDestination");
    for (let code of destinationCodes) {
      var station = stations.filter((station) => station.code == code);
      selDestination.innerHTML +=
        "<option>" + station[0].name + " - (" + code + ")" + "</option>";
    }
  });
}

function onListSelected() {
  //For now, we do nothing if user changed list selection
  //Selection is red in in drawRoutes()
  //console.log("onListSelected");
}

function recenterMap() {
  var bounds = new google.maps.LatLngBounds();
  markers.forEach((marker) => {
    bounds.extend(new google.maps.LatLng(marker.position));
  });

  map.fitBounds(bounds);
}

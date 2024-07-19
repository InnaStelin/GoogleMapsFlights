function drawMarker(location, isOrgDes) {
  var marker;
  if (isOrgDes == true) {
    //This is Origin/Destination marker
    marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.long },
      id: location.code,
      label: {
        text: location.code,
        color: "white",
        fontSize: "9px",
      },
      // url: "https://fonts.googleapis.com/icon?family=Material+Icons",
      //icon: "icons8-google-maps-48.png",
    });
  } else {
    marker = new google.maps.Marker({
      //This is route stop marker
      position: { lat: location.lat, lng: location.long },
      id: location.code,
      // label: {
      //    text: location.code,
      //    color: "black",
      //    fontSize: "7px",
      // },
      // url: "https://fonts.googleapis.com/icon?family=Material+Icons",
      //icon: "icons8-google-maps-40.png",
    });
  }
  marker.setMap(map);
  markers.push(marker);

  google.maps.event.addListener(marker, "click", function () {
    onMarkerSelected(marker);
  });
}
function onMarkerSelected(marker) {
  attractionsInfo = document.getElementById("attractionsInfo");
  attractionsInfo.innerHTML = "";

  var cityAttractions = [];

  cityAttractions = attractions.filter(
    (attractions) => attractions.code == marker.id
  );
  //console.log(cityAttractions);
  //console.log(cityAttractions.length);

  //If we have images for the selected city, display them on the panel
  //Also display link to Wiki page for the city
  if (cityAttractions.length > 0) {
    var cityName = cityAttractions[0].name;
    var cityImagesList = cityAttractions[0].images;
    var cityLink = cityAttractions[0].link;
    // console.log(cityName + cityImages + cityLink);

    //This is html we need to create on the panel
    //<h4>London</h4>
    //<img class='sidebar-img' src='London1.jpg'/>
    //<img class='sidebar-img' src='London1.jpg'/>
    //<img class='sidebar-img' src='London1.jpg'/>
    // <a href='https://en.wikipedia.org/wiki/Big_Ben'>Wikipedia</a>
    var cityImages = cityImagesList.split(",");

    attractionsInfo.innerHTML += "<h4>" + cityName + "</h4>";

    attractionsInfo.innerHTML +=
      "<img class='sidebar-img' src='" + cityImages[0] + "'</img>";
    attractionsInfo.innerHTML +=
      "<img class='sidebar-img' src='" + cityImages[1] + "'</img>";
    attractionsInfo.innerHTML +=
      "<img class='sidebar-img' src='" + cityImages[2] + "'</img>";

    attractionsInfo.innerHTML += "<a href='" + cityLink + "'>Wikipedia</a>";
  }
}

function loadFile(FileName, RespType, FileType, loadFromJSON) {
  //Read data asyncronously in the background
  //using AJAXFileReader()

  AJAXFileReader = new XMLHttpRequest();

  AJAXFileReader.addEventListener(
    "load",
    function Finished() {
      // When reading is finished, send data to this function.
      loadFromJSON(this.FileName, this.response);
    },
    false
  );

  AJAXFileReader.open("GET", FileName, true);
  AJAXFileReader.overrideMimeType(FileType);
  AJAXFileReader.responseType = RespType;
  AJAXFileReader.timeout = 10000; // Setting time-out to 10 s.
  AJAXFileReader.FileName = FileName;

  AJAXFileReader.send();
}

function loadFromJSON(fileName, response) {
  switch (fileName) {
    case "routes.txt":
      routes = JSON.parse(response);
      break;
    case "stations.txt":
      stations = JSON.parse(response);
      break;
    case "attractions.txt":
      attractions = JSON.parse(response);
      break;
    default:
      console.log("Error loading data");
  }
}

function loadData() {
  loadFile("routes.txt", "text", "text/plain;charset=utf-8", loadFromJSON);
  loadFile("stations.txt", "text", "text/plain;charset=utf-8", loadFromJSON);
  loadFile("attractions.txt", "text", "text/plain;charset=utf-8", loadFromJSON);
}

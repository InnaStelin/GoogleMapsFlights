About This Project
		This project draws flight routes on the map using google maps API.
		Origin and destination of each flight are selected by the user in the panel 
		on the right. Flight are drawn with all of its stops and stops are displayed as google maps markers.
		The idea behind the project is that travelers may  want to research routes and 
		potential stops on their itinerary and possibly make plans to visit
		those places on the way to their final destination. In other words, it 
		answers the question what can you see on the way from A to B. Flights are 
		stored in input JSON file and are created from real flight data. 
		User can select a marker that marks a stop and see images for that city 
		as well as Wikipedia link to learn more about the about it.
		Flights data does not contain all real life flights that depart each day
		but rather a small subset of flights to demonstrate how they can be displayed 
		on the map. Flights are loaded from routes text input file. It contains separate  
		object for each origin, destination and stop.
		For example, flights from Boston to Tel Av-iv are stored as:
		{"origin": "BOS", "destination": "TLV", "stops":"IST"},
	   {"origin": "BOS", "destination": "TLV", "stops":"FRA"},
	   {"origin": "BOS", "destination": "TLV", "stops":"EWR"},
	   {"origin": "BOS", "destination": "TLV", "stops":"MUC"},
	   {"origin": "BOS", "destination": "TLV", "stops":"YYZ"},
	   {"origin": "BOS", "destination": "TLV", "stops":"FCO"},
	   {"origin": "BOS", "destination": "TLV", "stops":"JFK"},
	   {"origin": "BOS", "destination": "TLV", "stops":"AMS"},
	   {"origin": "BOS", "destination": "TLV", "stops":"CDG"},
	   {"origin": "BOS", "destination": "TLV", "stops":"LIS"},
	   {"origin": "BOS", "destination": "TLV", "stops":"ZRH"},
	   {"origin": "BOS", "destination": "TLV", "stops":"LHR"}
	   
	Only one-stop flights are considered by the system at the moment.
	In order to place markers on the map coordinates of each airport are required; 
	they are stored in stations file:
	{"code": "BOS", "name": "Boston",   "lat": 42.3656,  "long": -71.0096 }
	
	Attractions of the stop cities are stored  in the file attractions file:
	{
	"code": "CDG", 
	"name": "Paris", 
	"images":"Paris1.jpg, Paris2.jpg, Paris3.jpg", 
	"link":"https://en.wikipedia.org/wiki/Paris"
	}

Built With
       JavaScript, Visual Studio Code, Google Maps API
Usage
	Select origin and destination from left-side panel controls. Controls 
	contain drop-down lists of all possible origins and destinations 
	application has data for.If flight for selected origin,destination does not exist
	message will be displayed on the panel. If any marker for stop on route is selected, 
	information about the stop city is displayed on the left-side panel.

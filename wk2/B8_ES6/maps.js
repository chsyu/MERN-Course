// var myMap = new Map();

// // Set
// myMap.set('name', 'Andrew');

// // Get
// console.log(myMap.get('name'));

// // Has
// myMap.set('age', 25);
// console.log(myMap.has('age'));

// // Delete
// myMap.delete('name');

// // Clear
// myMap.clear();

// // Size
// console.log(myMap.size);

// var user = true;
// myMap.set(user, 'Philadelphia');
// console.log(myMap.get(user));

// var myMap = new Map();

// myMap.set(1, 'Andrew');
// myMap.set(2, 'Jen');
// myMap.set(3, 'Ben');

// console.log([...myMap])
// console.log(myMap.keys())
// console.log(myMap.values())

// Challenge area

var location = {name: 'Philadelphia'};
var secondLocation = {name: 'Oslo'};
var weather = new Map();

function setWeather (location, temp) {
	weather.set(location, temp);
}

function printWeather (location) {
	if (weather.has(location)) {
		console.log(`It's ${weather.get(location)} in ${location.name}`);
	} else {
		console.log(`No weather recorded for ${location.name}`);
	}
}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);
'use strict'
class Person {
	constructor (name) {
		this.name = name;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name}!`);
	}
}

var person1 = new Person('Andrew');
person1.printGreeting();

var person2 = new Person('Mike');
person2.printGreeting();

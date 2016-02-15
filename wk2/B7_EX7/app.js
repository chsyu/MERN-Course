car = "Honda Civic";

var marksGarage = {
  car: "Aston Martin",
  getCar: function(){
    return this.car;
  }
};
console.log(marksGarage.getCar());

var storeGetCarForLater = marksGarage.getCar;
console.log(storeGetCarForLater());

var theRealGetCarFunction = marksGarage.getCar.bind(marksGarage);
console.log(theRealGetCarFunction());

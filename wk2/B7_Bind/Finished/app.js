var person = {
  firstname: 'Chi-Shan',
  lastname: 'Yu',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function() {
  console.log('logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person);
logPersonName();

// closure
var addclosure = (a,b) => {
  return b => {return a+b;};
}
var addclosure5 = addclosure(5);
console.log(addclosure5(3));

// function currying
var addbind = (a,b) => {return a + b;};
var addbind5 = addbind.bind(this, 5);
console.log(addbind5(3));

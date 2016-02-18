array = [1, 2, 3];
// forEach computation
array.forEach((item)=>console.log(`Foreach*3 = ${item*3}`));
// map an array to another array
var array2 = array.map((item)=>item*2);
console.log(`Map*2 = ${array2}`);
// map an array to <li> tag
var list = array.map((item)=>(`<li>${item}</li>`));
console.log(list);

//function declaration
function objname(obj){
	obj.name = "maruthi"
	console.log('obj name', obj.name);
}
var car = {};
car.name = "Honda";
console.log('before func call ==>', car.name);
objname( car );
console.log('after func call ==>', car.name);

//function expression
var square = function(number){
	return number * number;
}
var x = square(2);
console.log('func exp==>', x);

var factorial = function fact(n){
	return n<2 ? 1 : n*fact(n-1);
}
console.log('fact', factorial(3) );
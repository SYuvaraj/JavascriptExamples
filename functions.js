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


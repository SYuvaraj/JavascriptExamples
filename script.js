console.log('hello world');

//hoisting
x = 10;
var x;
console.log(x);

//Prototype
var obj = {};
console.dir(obj);

//function
function functionName(){
	console.log(2 + 3); 
}
functionName();

//closure
function a(){
	var a = 20;
	function inner(){
		console.log("inner", a);
	}
	return inner();
};
a();

//object creation
var obj = {};
console.log(obj);



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
var a1 = 10;
function a(){
	var a2 = 20;
	function inner(){
		console.log("innner", a2);
	}
};
a();
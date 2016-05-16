//Hello World
function greetMe ( name ){
	alert ("Hello " + name);
}
greetMe('Yuvaraj');
console.log('hello world');

//variables
var a = 10;
var str = "Yuvaraj";
var boolval = true;
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

var obj = function (name){
	this.name =  name;

};
var person = new obj("Yuvaraj");
console.log("constructor", person.name);

//protoype
obj.protoype.age;
obj.protoype.sayHi = function(){};




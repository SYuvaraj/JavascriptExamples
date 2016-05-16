//Hello World
function greetMe ( name ){
	console.log ("Hello " + name);
}
greetMe('Yuvaraj');


//Declarations
var val;
console.log('var is undefined', val);

if ( val === undefined){
	console.log('var is underfined');
}
else{
	console.log('var is defined');
}
val = 10;
console.log('var', val);


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




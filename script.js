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


//variable scope
if ( true ){
	var x =10;
}
console.log('vs', x);

if ( true ){
	let y =10;
	console.log('vy', y);
}


//variable hoisting
var myvar = "my value";
(function(){
	console.log('myvar', myvar);
	var myvar = "local value";
})();

//global & const variable
const cv = 10;

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

//array literal
var myList = ['home', 'office', 'restaurants'];

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




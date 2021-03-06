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

//object literal
var cars = { myCar: "Hyundai", getCar:'Tommorow'};
console.log('cars', cars.myCar);

//conditional statements
var ifVal;
if ( ifVal == undefined){
	console.log('undefined val');
}
else{
	console.log('defined val');
}

//switch statement 
var fruits = "orange";
switch(fruits){
	case "orange": console.log('orange');
	break;
	case "others": console.log('Others');
	break;
	default: console.log('fruits');
}

//throw statement


//create an object type user exception
// function userException(message){
// 	this.message = message;
// 	this.name = "User Exception";
// }
// userException.prototype.toString = function(){
// 	return this.name +" "+ this.message+ "";
// }
// //create an instance of the object type and throw it
// throw new userException("value too high");

//try catch exceptions
function getMonthName(mo){
	mo = mo-1;// Adjust month number for array index (1 = Jan, 12 = Dec)
	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
    console.log('month', months[mo]);
    if (months[mo]){
    	return months[mo];
    }
    else{
    	throw "InvalidMonthNo";//throw keyword is used here
    }
}
try{
	monthName = getMonthName(0);
	console.log("months", monthName);
}
catch (e){
	monthName = "unknown";
	console.log(monthName);
	function logMyErrors(e){
		console.log("Exception"+ e);
	}
	logMyErrors(e); //pass exception object to error handler -> your own function
}

//finally

//Error objects
function doSomeThingErrorprone(){
	if ( true ){
		throw ( new Error('The message') );
	} 
	else{
		return;
	}
}
try{
	doSomeThingErrorprone();
}
catch (e){
	console.log(e.name);
	console.log(e.message);
}
//Loops

function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes))
});
//do while
// var i = 0;
// do{
// 	i++;
// 	console.log(i);
// }while(i > 1);

//while loop
// var x = 0;
// var n = 5;
// while(n <= 5){
// 	console.log('true');
// }
var obj = {
	fname: "Yuvaraj",
	lname: "S"
}
for (var x in obj){
	console.log(x);
}
//label, continue, break statment
//for in statement
function dump_props(obj, obj_name) {
  var result = "";
  console.log('obj', obj);
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
     console.log('return', result );
  }
  result += "<hr>";
  return result;
 
};
var car = {
	name: 'mercedes',
	year: 2016
};
dump_props(car, car.name);

//diff b/w for off and for in
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
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

    if (months[mo]){
    	return months[mo];
    	console.log("months", months[mo]);
    }
    else{
    	throw "InvalidMonthNo";//throw keyword is used here
    }
}
try{
	monthName = getMonthName(1);
}
catch (e){
	monthName = "unknown";
	console.log(monthName);
	logMyErrors(e); //pass exception object to error handler -> your own function
}




/*var TAX = 0.18;
function calculateTotal(quantity, price) {
	var total = quantity * price * (1 + TAX);
	var formattedTotal = total.toFixed(2);
	return formattedTotal;	
}

function getGreeting() {
	return "Hello world!";
}
console.log(getGreeting());
const a = getGreeting;
console.log(a());
const arr = [1, 2, 3];
arr[1] = getGreeting;
console.log(arr[1]());
const obj = {};
obj.fu = getGreeting;
console.log(obj.fu());

//function arguments
function avg(item_one, item_two) {
	return (item_one + item_two)/2;
}
const item_one = 5, item_two = 3;
let mid = avg(item_one, item_two);
console.log(mid);

function f(x){
	console.log(`Inside before assignment f: x=${x}`);
	x = 5;
	console.log(`Inside after assignment f: x=${x}`)
}

let x = 3;
console.log (`Before calling f: x=${x}`);
f(x);
console.log (`After calling f: x=${x}`);

function func(j) {
	j.message = `Change in func (previous value: '${j.message}')`;
}
let j = {
	message: "Initial value "
};
console.log(`Before calling func: j.message="${j.message}"`);
func(j);
console.log(`After calling func: j.message="${j.message}"`);

function send(numb) {
	numb.message = "Change in send";
	numb = {
		message: "New object!"
	};
	console.log(`Iside send: numb.message="${send.message}" (Before assignment )`)
}

function getSentence({ subject, verb, object }) {
	return `${subject} ${verb} ${object}`;
}

const myObj = {
	subject: "I",
	verb: "love",
	object: "JavaScript"
};

console.log(getSentence(myObj));

const f1 = function() { return "f1 Hello!";}

const f2 = () => "f2 Hello!";

const f3 = function(name) { name = "Herman"; return `f3 Hello, ${name}!`;}

const f4 = name => name = "Anna"; `f4 Hello, ${name}!`; 

const f5 = function(a, b) { return a + b; }

const f6 = (a,b) => a + b;


console.log( f1(), f2(), f3(),f4(), f5(1,3), f6(1,4) );


let user = {
	name : "Irena",
	age : 25,
};
function greet() {
	console.log(`Hello, ${user.name}!`);
}

function getBirthYear() {
	return new Date.getFullYear() - user.age;
}
console.log('перед блоком');
{
	console.log('внутри блока');
	const x = 3;
	console.log(x);
}
console.log(`за пределами блока; x=${x}`);


{
	let x = { color:"blue"};
	let y = x;
	let z = 3;
	{
		let x = 5;
		console.log(x);
		console.log(y.color);
		y.color = "red";
		console.log(z);
	}
	console.log(x.color);

	console.log(y.color);

	console.log(z);
}
const arr2 = ["b", "c", "d"];
arr2.push("e");
arr2.pop();
arr2.unshift("a");
arr2.shift();*/
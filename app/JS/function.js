'use strict';

/*var message = 'За пределами функции';

function warning() {
	var message = 'Внутри функции';
	
	alert(message);
}

warning();
alert(message);*/

//input
/*S
document.getElementById('nav').onmouseover = function(event) {
	var target = event.target;
	if (target.className == 'menu-item') {
		var s = target.getElementsByClassName('submenu');
		closeMenu();
		s[0].style.display='block';
	}
}

document.onmouseover = function(event) {
	vertarget = event.target;
	console.log(event.target);
	if (target.className!='menu-item' && target.className!='submenu') {
		closeMenu();
	}
}

function closeMenu() {
	var menu = document.getElementById('nav');
	var subm = document.getElementsByClassName('submenu');
	for (var i=0; i <subm.length; i++) {
		subm[i].style.display="none";
	}
}
*/

//-------------------------------------------

function funone(){
	var chbox;
	chbox = document.getElementById('one');

	if (chbox.checked) {
		console.log('Cheked!');
	} else {
		console.log('Uncheked');
	}
};

function funtwo() {
	let radi = document.getElementsByName('rb');
	for (let i = 0; i < radi.length; i++) {
		if (radi[i].checked) {
			console.log('Selected ' +i+ ' Selement');
			console.log(radi[i])
		}
	}
}

//select
function functionSelect() {
	let sel = document.getElementById('mySelect').selectedIndex;
	let options = document.getElementById('mySelect').options;
	console.log('Selected option ' +options[sel].text);

}

//range

function functionRange() {

	let hor = document.getElementById('hor').value;
	let ver = document.getElementById('ver').value;
	
	let trc = document.getElementById('trc').value;
	let tlc = document.getElementById('tlc').value;
	let brc = document.getElementById('brc').value;
	let blc = document.getElementById('blc').value;


	let texthor = document.getElementById('texthor'); 
	let textver = document.getElementById('textver');
	/*let texttrc = document.getElementById('texttrc'); 
	let texttlc = document.getElementById('texttlc'); 
	let textbrc = document.getElementById('textbrc'); 
	let textblc = document.getElementById('textblc');*/  
	let block = document.getElementById('block');

	texthor.value = hor;
	textver.value = ver;
	texttrc.value =	trc; 
	texttlc.value =	tlc;
	textbrc.value =	brc;
	textblc.value =	blc;

	block.style.width = hor +'px';
	block.style.height = ver +'px';
	block.style.borderRadius = trc +'% ' +tlc +'% '  +brc +'% ' +blc +'% ';
}

const arr1 = [1, 2, 3, 4, 2];

//console.log(arr1.length);
let persone = {
	name: "Herman",
	age: 34,
	isMarred: true
};
/*
console.log(persone.name);
console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);
alert('hello world');
let answer = confirm("do you want");
console.log(answer);

let question = prompt("waht do you want", "nothing");
console.log(question);
console.log(typeof(question));
console.log(typeof(arr));

console.log("arr " + "-object");
console.log(1 + "-object");
console.log(1+ + "-object");

let incr = 10,
	decr = 10;


console.log(incr++);
console.log(decr--);
console.log(incr);
console.log(5%2);
console.log("2" === 2);

let isChecked = true,
	isClose = false;

console.log(isChecked || !isClose);
console.log(isChecked && !isClose);
let insertNumber1 = prompt('Insert number', '');//выводит всегда нет так как введенные значения не преобразованны в числа
let insertNumber2 = prompt('Insert number', '');
if (insertNumber1 + insertNumber2 == 4) {
	console.log('Right');
} else {
	console.log('no');
};



let num = 50;

if (num < 49) {
	console.log('wrong')
} else if(num > 100) {
	console.log('Right')
} else {
	console.log('Right')
};

(num == 50) ? console.log('right') : console.log('wrong');

switch (num) {
	case num < 49:
		console.log('wrong');
		break;
	case num > 50:
		console.log('wrong');
		 break;
	case 50:
		console.log('Rught');
		break;
	default:
		console.log('something wrong');
};
*/
let cicle = 50;
/*
while(cicle < 55) {
	console.log(cicle + "while");
	alert("privet" + cicle);
	cicle = prompt();
	cicle++;
}

do {
	console.log(cicle + " dowhile");
	cicle++;
	if (cicle == 53) {
		break;
	}
}
while (cicle < 55);

for (let i = 0; i < 3; i++) {
	if (i == 2) {
		continue;
	}
	console.log(i + " for");
}*/

let ask = (question, yes, no) => 
 (confirm(question)) ? yes() : no();

ask (
	'do you confirm?',
	() => alert('you confrimed'),
	() => alert('you don\'t confired')
);
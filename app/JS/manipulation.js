'Use stict';


let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'red';
btn[2].style.borderRadius = '100%';
circle[2].style.backgroundColor = 'yellow';
circle[1].style.backgroundColor = 'red';
circle[0].style.backgroundColor = 'green';


for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item, i, hearts){
    item.style.borderRadius = '20px';
});


let div = document.createElement('div'),
    text = document.createTextNode('Hi world');

div.style.width = '10px';
div.style.height = '10px';
div.style.backgroundColor = 'black';
div.style.margin = '10px';
div.style.borderRadius = '5px';

div.classList.add('black');//добавляем класс переменной

document.body.appendChild(div);//добавляем элемент во вонутрь боди в самый конец ветки
//wrapper.appendChild(div);//добавляем элемент во внутрь контенера враппер
document.body.insertBefore(div, circle[1]);//встовляет элемент-первый аргумент перед вторым аргументом
document.body.removeChild(circle[0]);//удалить элемент
wrapper.removeChild(heart[1]);//удалить элемент
document.body.replaceChild(btn[2], circle[1]); // заменить первым аргуменом второй

box.innerHTML = '<h2>InnerHTML in work</h2></br>';
//box.textContent = 'textCotnent';

console.log(div);

// console.log(true && true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// 0 ? console.log('true') : console.log('false');

// var currentYear = +prompt('Insert current year ',''), 
//     compareTo = +prompt('Insert compare to ',''), 
//     carName = 'Ford',
//     carYear = 2010,
//     personYear = 1990,
//     personName = 'Huan';

// function calculateAge(yaer) {
//     var result = currentYear - yaer;
//     return result;
// }

// function checkOldYear(year, name, compareTo) {
//     if (calculateAge(year) < compareTo) {
//         console.log(calculateAge(year) + ' less than '
//         + compareTo + ' for ' + name);
//     } else if (calculateAge(year) > compareTo) {
//         console.log(calculateAge(year) + ' more than ' 
//         +  compareTo + ' for ' + name);
//     } else {
//         console.log(compareTo  + ' underfind for ' + name);
//     }
// }

// checkOldYear(carYear, carName, compareTo);
// checkOldYear(personYear, personName, compareTo);
// (function sayHelloTo(name) {
//     name = prompt('Your name', '');
//     console.log('Hi ' + name);
// })();

// var func = function() {

// };
// var newMessage = 'Hello world';



// console.log(newMessage.length);
// console.log(newMessage.toUpperCase());
// console.log(newMessage.toLowerCase());
// console.log(newMessage.charAt(1));
// console.log(newMessage.indexOf('He'));
// console.log(newMessage.substr(0, 10));
// console.log(newMessage.substr(newMessage.indexOf('H'), 5));
// console.log(newMessage.substring(1, 3));

// let wrapper2 = document.querySelector('.wrapper');
// let input = document.querySelector('input');
// wrapper2.innerHTML = '<h1 style="color: red; font-size: 54px; background-color:black;">This is made with halps JavaScript</h1>';
// console.log(1+':' + input.value);
// input.value = 'javascript input';
// console.log(wrapper2.innerHTML);
// console.log(wrapper2.textContent);
// wrapper2.textContent = 'cnahge content from js';
// console.log(wrapper2.textContent);

var a = document.querySelector('a');
var oldHref = a.getAttribute('href');
console.log(a.innerHTML);
a.textContent = 'another text';
console.log(a);
console.log(a.attributes);
console.log(a.getAttribute('title'));
console.log(a.getAttribute('href'));
console.log(a.getAttribute('target'));
console.log(a.innerHTML);
a.setAttribute('href', 'https://ya.ru');
a.setAttribute('title', 'https://yandex.ru');
a.textContent ='Yandex';

var box1 = document.querySelector('#box1');
var box2 = document.querySelector('#box2');

box1.classList.add('red');
box2.classList.remove('blue');
var hasClass = box2.classList.contains('blue');
console.log(hasClass);

var button = document.getElementById('button1');
var h1 = document.getElementById('newtext');
var input2 = document.getElementById('InputText');

function buttonHandler() {    
    h1.textContent = input2.value;
    console.log(h1.textContent);
}

h1.addEventListener('mouseenter', function() {
    this.style.color = 'red';
    this.style.backgroundColor = 'black';
});

h1.addEventListener('mouseleave', function() {
    this.style.color = 'green';
    this.style.backgroundColor = 'transparent';
});

button.addEventListener('click', buttonHandler);

var boxes = document.querySelectorAll('.boxes');
var link = document.getElementById('changeLink');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function(event) {
        event.stopPropagation();
        console.log(this.getAttribute('id'));
    });
}

link.addEventListener('click', handleLinkClick);

function handleLinkClick(event) {
    event.preventDefault();
    var div = boxes[0];


   // div.style.display = div.style.display == 'none' ? 'flex' : 'none';

    if (div.style.display == 'none') {
        div.style.display = 'flex';
    } else {
        div.style.display = 'none';
    }

    console.log(div.style.display);
}

var p = document.querySelectorAll('p');

for (var i = 0; i < p.length; i++) {
    p[i].addEventListener('click', function(event){
        event.target.style.backgroundColor = 'blue';
        event.target.style.color = 'white';
    });
}

var wrapper3 = document.getElementById('wrapper').addEventListener('click', function(event){
    console.log(event.target);
});



function first() {
    setTimeout( function() {
        console.log(1);        
    }, 3000 );
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("I learn" + lang);
    callback();
}

// function done() {
//     console.log('callback');
// }

learnJS("JavaScript", function() {
    console.log('callback');
});
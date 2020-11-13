/*
var planet = document.getElementById("firststring");
console.log(planet.innerHTML);
planet.innerHTML = planet.innerHTML + "123";
console.log(planet.innerHTML);
console.log(typeof planet.innerHTML);
console.log(typeof 1);
var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = {"abcdef": 123};
var test8 = ["abcdef", 123];
function test9(){return "abcdef"}
console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
var test10 = null;
console.log(typeof test10);
if (99 == "99") {
    console.log("A number equals a string!");
    } else {
    console.log("No way a number equals a string");
    }

function lieDetectorTest() {
    var lies = 0;
    var stolenDiamond = { };
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    }
    var car = {
        keysInPocket: null
        };
    if (car.keysInPocket) {
        console.log("Uh oh, guess you stole the car!");
        lies++;
        }
    if (car.emptyGasTank) {
        console.log("You drove the car after you stole it!");
        lies++;
        }
    var foundYouAtTheCrimeScene = [ ];
    if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
        }
    if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
        }
    var yourName = " ";
    if (yourName) {
        console.log("Guess you lied about your name");
        lies++;
        }
        return lies;
        }
    var numberOfLies = lieDetectorTest();
    console.log("You told " + numberOfLies + " lies!");
    if (numberOfLies >= 3) {
        console.log("Guilty as charged");
}
*/
function validate(phoneNumber) {//задаем функцю с параметром
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {//если количество символов в параметру не ровна строго 8 тогда возвращается false
        console.log("not enough simboles or too much simboles");
        return false;// если значения не удовлетворют условие функция останваливаетсяи возвращает фолс
    }
    for (var i = 0; i < phoneNumber.length; i++) {//в цикле сравниваем кол-во символов в параметере функции
        if (i === 3) {//еслти текущий index в массиве строго равен 3 (4 символ в строке)
            if (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {// и символ под этим индексом строго неравен "-"
            console.log("phoneNumber.length === 8 && phoneNumber.charAt(i) !== -");
            return false;                       //тогда возвращается фолс       
            }
        } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {//
            console.log("phone number has 7 simboles and not noumber this simbole");
            return false;
        }
    }
    console.log(phoneNumber);
    return true;
}



function validate2(phoneNumber) {
    if (phoneNumber.length > 8 || phoneNumber.length < 7) {//если длина номера строго не равна 8 возвращаем фолс
        console.log("not enough simboles or too much simboles");
        return false;
    }
    var first = phoneNumber.substring(0,2);//переменной присваеваем часть номера трем цыфрам
    var second = phoneNumber.substring(phoneNumber.length - 4);//переменной присваеваепм оставшююся часть после дефиса
    
    if (isNaN(first) || isNaN(second)) {
        console.log("not number");
        return false;
    }
    if (phoneNumber.length === 8) {
        console.log(phoneNumber.charAt());
        return (phoneNumber.charAt(3) === "-");
    }
    console.log(phoneNumber);
    return true;
}

function validate3(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
    }


var myNamber = prompt("Plise, eneter your phone number xxx-xxxx:", "");
validate(myNamber);
validate2(myNamber);
console.log(validate3(myNamber));


function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
}
var insertSomeText = prompt("Enter some text", "");
var toy = new Duck(insertSomeText);
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);
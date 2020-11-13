/*
function bark(name, weight) {
    name = prompt("Enter name your dog", "");
    weight = prompt("Enter weidth", "");
    if (weight > 20) {
        console.log(name + "is big");
    } else {
        console.log(name + "is small");
    }
}

bark();

var age = 7 ;

function addOne(x) {
    x = x + 1;
    return x;
}

addOne(age);
console.log(age);
console.log(addOne(age));

function calculatArea(radius) {
    var area;
    if (radius <= 0) {
        return 0;
    } else {
        area = Math.PI * radius * radius;
        return area;
    }
}

var enterRadius = prompt("Please, enetr radius of your hole", "");

document.write(calculatArea(enterRadius));




function clunk(times) { //вызывается в конце следующей функции
    var num = times;

    while (num > 0) {   //будет отниматстся 1 пока не дойдет до нуля
    display("clunk");   //выводит сообщение в консоль
    num = num - 1;  //вычетает 1 из переменной при каждей итерации
    console.log(num);
    } 
} 

function thingamajig(size) { //Размер  заносится из аргумента 
    var facky = 1;   //объявление локальной переменной
    clunkCounter = 0; // привсоение глобальной переменно нового значение внутри функции

    if (size == 0) {  //если размер равен 0 то выодится clank
    display("clank");   
    } else if (size == 1) {   //если размер равен 1 то в консоль выводится thunk
        display("thunk");  
    } else {     //если размер не равен ни 1 ни 0 тогда запускается цикл 
        while (size > 1) { //и работает пока размер больше одного
        facky = facky * size;  //каждую итерацию facky * size
        size = size - 1;     //из сайза вычетайется 1
        console.log(size);
        }       
        clunk(facky);  //заапускает функцию, если ничего не видено из предложенного не введенно ил заканчивается цыкл выдодится сообщение 
    } 
} 

function display(output) {   //функция для вывода в консоль сообщения
    console.log(output); 
    clunkCounter = clunkCounter + 1; //когда вызывается эта функция в переменную прибавляется еденица
}
var clunkCounter = 0; //объявление глобальной переменной
thingamajig(prompt("Input number", "")); //запуская функцию сингмэджиг
console.log(clunkCounter); //выводит значение переменной 


var dogName = "Rover";
var dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + "say WOOF WOOF");
} else {
    console.log(dogName + "say woof woof")
}

dogName = "Spot";
dogWeight = 13;
if (dogWeight > 20) {
    console.log(dogName + "say WOOF WOOF");
} else {
    console.log(dogName + "say woof woof")
}

dogName = "Spike";
dogWeight = 53;
if (dogWeight > 20) {
    console.log(dogName + "say WOOF WOOF");
} else {
    console.log(dogName + "say woof woof")
}

dogName = "Lady";
dogWeight = 17;
if (dogWeight > 20) {
    console.log(dogName + "say WOOF WOOF");
} else {
    console.log(dogName + "say woof woof")
}


var balance = 10500;
var cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
    }
    cameraOn = true;
    return amount;
}

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");
*/

var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
                    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                    { name: "Herman Mo", paid: false, ticket: "firstclass" },
                    { name: "Kim Su", paid: false, ticket: "premium" },
                    { name: "Elisa Kot", paid: false, ticket: "premium" },
                    { name: "Sue Property", paid: false, ticket: "premium" },
                    { name: "John Funcall", paid: true, ticket: "coach" } ];

function processPassengers(passengers, testFunction) {//в первый параметр мы записывваем массив объектов с пасажирами, а во второй функция необходимую для конкретного выполнения 
    for (var i = 0; i < passengers.length; i++) {//перебираем массив
        if (testFunction(passengers[i])) {//если 
            return false;
        }
    }
    return true;
}

function checkNoFlyList(passenger) {//функция возвращающая текущего посажира и проверяющего черный список
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {//если поссажир не заплатил тогда возвращается тру
    return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);

if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);

if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
    var message = passenger.name;
    if (passenger.paid === true) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
    
}

/*
function createDrinkOrder(passenger) {
    if (passenger.ticket === "firstclass") {
        alert("Would you like  a coctail or wine?");
    } else {
        alert("Your choice is cola or water.");
    }

}
*/


function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            document.write(passenger.name + " :Would you like a cocktail or wine? " + passenger.ticket + "<br>");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            document.write(passenger.name + " :Your choice is lemonade or water or wine. " +  passenger.ticket + "<br>");
        };
    } else {
        orderFunction = function() {
            document.write(passenger.name + " :Your choice is cola or water. " +  passenger.ticket + "<br>");
        };

    }
    return orderFunction;
}


function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            document.write(passenger.name + " :Would you like a chiken or pasta? " + passenger.ticket + "<br>");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            document.write(passenger.name + " :Your choice is snacks or cheese plate. " +  passenger.ticket + "<br>");
        };
    } else {
        orderFunction = function() {
            document.write(passenger.name + " :Your choice is nuts and crackers. " +  passenger.ticket + "<br>");
        };

    }
    return orderFunction;
}
function createCleaningOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            document.write("Mr." + passenger.name + " : pleas give me your trash <br>");
            return orderFunction;
        };
    } else {
        orderFunction = function() {
            document.write(passenger.name + " :pleas give me your trash . <br>");
        };
    }
    return orderFunction;
}
function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    var getCleaningOrderFunction = createCleaningOrder(passenger);
    getDrinkOrderFunction();
    getCleaningOrderFunction();
    // Включить кино
    getDrinkOrderFunction();
    getCleaningOrderFunction();
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
        }
    }
servePassengers(passengers);
processPassengers(passengers, printPassenger);

let sum = (a, b) => a + b;
console.log(sum(3, 2));
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
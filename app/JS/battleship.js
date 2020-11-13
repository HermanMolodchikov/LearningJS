
/*
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Fire, eneter number from 0 to 6 : ", "");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        console.log(guesses + "after iteration");
        console.log(hits + "after iteration");
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            document.write("<br>HIT!");

            if (hits == 3) {
                
                isSunk = true;

                alert("You sank my battleship!");
            }
        } else {
            document.write("<br>You miss" + guess);
        }  
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + 
                "which means your shooting accurascy was " + 
                (3/guesses*100) +  " \%";

document.write("<br>" + stats);
console.log(guesses + "in the end");
*/

var buttonSizeSix = document.getElementById("size6");
var buttonSizeSeven = document.getElementById("size7");
var buttonSizeEight = document.getElementById("size8");
var buttonSizeNine = document.getElementById("size9");
var buttonSizeTen = document.getElementById("size10");
var fieldBattle = document.getElementById("fieldbattle");


    
function createTable(size){
    var table = '<table class="simple-little-table">';
    for( var i = 0; i <= size; ++i){
        table += '<tr>';
        for( var j = 0; j <= size; ++j) {
                                table += '<td id="' + i +
                                 j + '">' + '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';
    fieldBattle.innerHTML = table;
}

buttonSizeSix.onclick = function() {
    console.log("batton 6");
    createTable(5);
};

buttonSizeSeven.onclick = function() {
    console.log("batton 7");
    createTable(6);
};

buttonSizeEight.onclick = function() {
    console.log("batton 8");
    createTable(7);
};

buttonSizeNine.onclick = function() {
    console.log("batton 9");
    createTable(8);
};
buttonSizeTen.onclick = function() {
    console.log("batton 9");
    createTable(9);
};


var view = {//объект отображения
    dismpalyMessage: function(msg) {//отображение сообщение
        var messageArea = document.getElementById("messageArea");//переменая получения доступа по индифекатору
        messageArea.innerHTML = msg;//запись в HTML  аргумента из параметра функции
    },
    displayHit: function(location) {//функция отображения попадания
        var cell = document.getElementById(location);//переменая получения доступа по индифекатору
        cell.setAttribute("class", "hit");//добавление атрибута класс с именем хит в ячейку 
    },
    displayMiss: function(location) {//функция отабражения промаха
        var cell = document.getElementById(location);//переменая получения доступа по индифекатору
        cell.setAttribute("class", "miss");//добавление атрибута класс с именем мисс в ячейку 
    }
};

view.dismpalyMessage("Tap tap, is this thing on?");

var model = {//объект модель
    boardSize: 7,//свойство размерность сетки
    numShips: 3,//кол-во кароблеей в игре
    shipLength: 3,//длина каждого корабля
    shipsSunk: 0,//кол-во потопленных кораблей
    ships: [{ locations: [0, 0, 0], hits: ["", "", ""] },//Свойство ships содержит массив объектов ship, содержащих массивы locations и hits для одного из трех кораблей. (Обратите внимание, что использовавшаяся ранее переменная ships заменена свойством объекта модели).
            { locations: [0, 0, 0], hits: ["", "", ""] },
            { locations: [0, 0, 0], hits: ["", "", ""] }],

    fire: function(guess) {//метод объекта модель огонь с атрбутом угадать
        for (var i = 0; i < this.numShips; i++) {//цикл будет выполнятся пока индекс будет меньше количества кораблей
            var ship = this.ships[i];//переменной шип присваетвается текущий локэйшон(корабль)
            var index = ship.locations.indexOf(guess);//в переменную индекс записываем индекс клетки в локэйшене
           
            if (index >= 0) { // проверяем что бы индекс был больше ли равно 0
                ship.hits[index] = "hit";// если это так тогда записываем строку хит в подмассив хитс
                view.displayHit(guess);//передаем значение попытки в метод отображения 
                view.dispalyMessage("HIT!");//отображаем в сообщениее 
                if (this.isSunk(ship)) {//если корабль потоплен
                    view.dispalyMessage("You sank my battlship!");//выводим сообщение
                    this.shipsSunk++;//добавяем в переменную потопленных кораблей 1
                }
                return true;//возвращаем  тру
            }            
        }
        view.displayMiss(guess);//если попадаания не было 
        view.dispalyMessage("You missed.");//выводится сообщение 
        return false;//и возвращается фолсс
    },
    isSunk: function(ship) {//функция проверки потопленние кораблей получает в аргумент текущий корабль
        for (var i = 0; i < this.shipLength; i++) {//цикл продалжается пока не подабъют все ячейки в текущем корабле
            if (ship.hits[i] !== "hit") {// если  попадание отсутствует 
                return false;//возвращаетс фолс
            }
        }
        return true;//если еcть попадание тогда тру
    },
    generateShipLocations: function() {
        var locations;//
        for (var i = 0; i < this.numShips; i++) {//цикл перебирает все корабли
            do {
                locations = this.generateShip();   // происходит генерация корбля с помощью метода генерэйтШип цикл ду выполнится котябы один раз             
            } while (this.collision(locations));//проверка на колизии текцщего корабля
            this.ships[i].locations = locations;//и если нет колизии добавляется сгенерированный корабль  в объект массивов 
        }
    },
	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);//При помощи Math.random мы генерируем число от 0 до 1 и умножаем результат на 2, чтобы получить число в диапазоне от 0 до 2 (не включая 2). Затем Math.floor преобразует результат в 0 или 1.
		var row, col;//переменные ориентации строка или колонка

		if (direction === 1) { // если директион равно 1 тогда генерируется следущий код..  генерируется первая клетка корабля
			row = Math.floor(Math.random() * this.boardSize);//генеррируется случайное число от 0 до 6
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1)); 
		} else { // если не 1 тогда следуещее
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
			col = Math.floor(Math.random() * this.boardSize);//генеррируется случайное число от 0 до 6
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {//цикл переберает длину массива
			if (direction === 1) {//если директион  строго равно 1 тогда добавляется в массив неьюшипЛокэтион и при каждей итерации в колонку добавляется 1 вормируется горизонтальный корабль
				newShipLocations.push(row + "" + (col + i));//доббавление в масив следующей позиции с изменением столба
			} else {
				newShipLocations.push((row + i) + "" + col);//иначе добавляется в массив неьюшипЛокэтион и при каждей итерации в строку добавляется 1 и формируется вертикальный корабль
			}
		}
		return newShipLocations;//функия возвращает сгенерированный массив
	},
    collision: function(locations) {//метод колизион получает в в виде аргумента массив корабля
        for (var i = 0; i < this.numShips; i++) {//цикл перебирает все корабли
            var ship = model.ships[i];//в переменную шип присваеваем текущий массив координат корабля 
            for (var j = 0; j < locations.length; j++) {//цикл перебирает длину корабля 
                if (ship.locations.indexOf(locations[j]) >= 0) {//если значение координаты больше ил равно 0
                    console.log(ship.locations.indexOf(locations));
                    return true;
                }
            }
        }
    return false;
    }   
};

var controller = {//
    guesses: 0,//количество попыток
    processGuess: function(guess) {//метод для 
        var location = parseGuess(guess);//метод для проверки введеных данных
        if (location) {//если метод не возвращает нуль значит получен действительный объект
            this.guesses++;//если пользоваетель ввел координаты игрового поля защитывается попытка
            var hit = model.fire(location);//переменной присваеваем координаты 
            if (hit && model.shipsSunk === model.numShips) {//
                view.dispalyMessage("You sank all my battleships, in " +
                                                this.guesses + " guesses");
            }
        }
    }  
};

function parseGuess(guess){
    var alphabet = ["A", "B", "C", "D", "E", "F", 
                    "G", "H", "I", "J", "K", "L" ];

    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0);//присваеваем переменной первый символ из массива попытки
        var row = alphabet.indexOf(firstChar);//с помощью метода Indexof преобразуем букву в цифру
        var column = guess.charAt(1);//присваеваем переменной второй символ строки

        if (isNaN(row) || isNaN(column)) {//если переменные не число тогда сообщение 
            alert("Oops, that isnt't on the board.");
            } else if ( row < 0 || row >= model.boardSize || //если переменная  меньше 0 и больше игрового поля 
                    column < 0  || column >= model.boardSize) {//выводится соответсвующее сообщение
            alert("Oops, that's off the board!");
        } else {
            return row + column; //возвращает строку с объеденением двух переменных
        }
    }
    return null;//если все условия не верны возврат null
}

function handleFireButton() {//обрабочк нажатия кнопки
    var guessInput = document.getElementById("guessInput");//получаем доступ из гесинпут
    var guess = guessInput.value;//получаем value из guessInput
    controller.processGuess(guess);//отправляем значение guess  в контролер processGuess

    guessInput.value = "";//очищаем значение для того чтобы поле ввода очистилось
}

function handleKeyPress(e) {//обработчик нажатия клавиши enter
    var fireButton = document.getElementById("fireButton");//получаем доступ к кнопке fire
    if (e.keyCode === 13) { //если кейкод клавиши равен 13 enter
        fireButton.click();//тогда метод кнопки fier click  срабатывет 
        return false;//Возвращае фолч что бы форма не делал ничего лишнего(не пыталась передать данные)
    }
}

function init() {
    var fireButton = document.getElementById("fireButton");//получаем доступ к кнопке
    fireButton.onclick = handleFireButton;//отправляем в обработчик нажатия кнопик fire
    var guessInput = document.getElementById("guessInput");//получаем доступ к полю ввода
    guessInput.onkeypress = handleKeyPress;//отправляем в обработчик нажатия enter

    model.generateShipLocations();//вызов генерации кораблей
    var clickPoint = document.getElementById();
}

window.onload = init;//пока страница не загрузится  функция init  работаь не будет 

/*for(i = 0; i < model.ships.length; i++){
    document.write(model.ships[i] + "<br>");
}

var randomazer = Math.floor(Math.random() * 2);

if (randomazer === 1) {
        
} else {

}*/
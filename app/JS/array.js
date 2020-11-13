//18,11,2019
/*
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

var solution2 = scores[2];
alert(solution2, scores[solution2]);


var flavors = ["vanilla",
                "butterscotch",
                "lavender", 
                "chocolate",
                "cookie dough"];

var flavorOfTheDay = flavors[2];
document.write(flavorOfTheDay);
document.write(flavors.length);
var last = flavors.length - 1;
console.log(last);
var recent = flavors[last];
console.log(recent);

function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}

makePhrases();
*/

var scores = [60, 50, 60, 58, 54, 54,
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
                .33, .31, .25, .29, .27, .22,
                .31, .25, .25, .33, .21, .25,
                .25, .25, .28, .25, .24, .22,
                .20, .25, .30, .25, .24, .25,
                .25, .25, .27, .25, .26, .29];

function printAndGetHighScore(scores) { 
    var output;
    var highScore = 0;    
    for (var i = 0; i < scores.length; i++) {
        output = "<br>Bubble solution # " + i +
         ", score: " + scores[i];
         document.write(output);
         if (scores[i] > highScore) {
            highScore = scores[i];
            console.log("Inside cycle " + highScore);
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
            console.log(bestSolutions);
        }
    }
    return bestSolutions;
}

function getMostCostEffeciveSolution(scores, costs, highScore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore){// если массив находит наибольшее чилсло он выполняет условие
            if (cost > costs[i]){//cost равен 100 и мы сравниваем cost  с текущей ценой из массива
                index = i;// если цена меньше 100 присваеваем индексу  значение i
                cost = costs[i]; //значение cost переапределяемне текущую цену
            }
        }
    } 
    return index;
}

var highScore = printAndGetHighScore(scores);
console.log( "Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var MostCostEffective = getMostCostEffeciveSolution(scores, costs, highScore);
console.log("Bubble Solution # " + MostCostEffective + 
            " is the most cost effective");

/*
var i = 0;

while (i < scores.length) {
    output = "<br>Bubble solution #" + i + "score: " + scores[i];
    document.write(output);
    i = i + 1;
} */

/*

let arr = [1, 2, 3, 4, 5,];

function arrFunction() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " - in cicle");
    }
};

arr.pop();//удаляет элемент с конца
arr.push('add new string element');//добавляет элемент в конец
arr.shift();//удаляет элемент в начале
arr.unshift("add first element");//добавляет элемент в начало


console.log(arr);
console.log(arr.length + ' - Length of array');

arrFunction();

arr.forEach(function(item, b, mass) {
    console.log(b + ': ' + item + " (array: " + mass + ')');
});

let numbers =[1, 2, 3, 4, 5];

for (let key in numbers) {
    console.log(key); //in  выводит индексы массива
};

for (let key of numbers) {
    console.log(key); //выводит значения массивов
};

let ans = prompt('ответ', '2'),
    array = [];

array = ans.split(',');
console.log(array);



let names = ['Herman', 'Anna', 'Shanti'],
    numbers2 = [51, 62, 453, 454, 4545, 56, 17, 68],
    i = names.join(' '),
    j = i.split(' ');

function compareNum(a,b) {
    return a-b;
}

console.log( i);
console.log(names);
console.log(j);
console.log(names.sort());
console.log(numbers2.sort());
console.log(numbers2.sort(compareNum));


*/

var profiles = {
    name: "Herman",    
    skils: ["progrmmer code", "enginer"],
    person: {
        secondName: "Molodchikov",
        age: 35,
        height: 182,
    },
    arrayObject: [{:[],:[]},
                    {:[],:[]},
                    {:[],:[]}]

};
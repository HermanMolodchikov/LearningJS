
var drinks = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
                { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                { name: "Water", calories: 0, color: "clear", sold: 62123 }
            ];


function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

function printProducts(products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name +
                ", Calories: " + products[i].calories +
                ", Color: " + products[i].color +
                ", Sold: " + products[i].sold);
    }
}

function printProductsColor(products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name +
                ", Color: " + products[i].color);
    }
}

drinks.sort(compareSold);



function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
} 

function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    }
}
function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}
/*drinks.sort(compareName);
console.log("Products sorted by name:");
printProducts(drinks);
drinks.sort(compareCalories);
console.log("Products sorted by calories:");
printProducts(drinks);*/
drinks.sort(compareColor);
console.log("Products sorted by color:");
printProductsColor(drinks);



/*
window.onload = function() {
    var button = document.getElementById("bake");
    button.onclick = function() {
        console.log("Time to bake the cookies.");
        cookies.bake(2500);
    };
};
var cookies = {
    instructions: "Preheat oven to 350...",
    bake: function(time) {
        console.log("Baking the cookies.");
        setTimeout(function() {
            alert("Cookies are ready, take them out to cool.");
            console.log("Cooling the cookies.");
            setTimeout(function() {
                alert("Cookies are cool, time to eat!");
            }, 1000);
        } , time);
    }
};

*/

var justAVar = "Oh, don't you worry about it, I'm GLOBAL";
function whereAreYou() {
    var justAVar = "Just an every day LOCAL";
    function inner() {
        return justAVar;
    }
    return inner;
}
var innerFunction = whereAreYou();
console.log(innerFunction());
var result = innerFunction();
console.log(result);



function makePassword(password) {
    return function guess(passwordGuess) {
         return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log("Guess 'nope':" + tryGuess("nope"));
console.log("Guess 'secret':" + tryGuess("secret"));




function multN(n) {
    return function multBy(m) {
        return m * n;
    };
}

var multBy3= multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));

function makeCounter() {
    var count = 0;
    return {
        incriment: function() {
            count = count + 1;
            return count;
        }
    };
}
var counter = makeCounter();
console.log(counter.incriment());
console.log(counter.incriment());
console.log(counter.incriment());
 

function makeTimer(doneMessage, n) {
    setTimeout(function() {
        alert(doneMessage);
    }, n);
}

makeTimer("cokies are done!", 1000);


window.onload = function() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
    }
};
function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = name;
    setTimeout(reblur, 2000, image);
}
function reblur(image) {
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}



window.onload = function() {
    var count = 0; 
    var message = "You clicked me ";
    var div = document.getElementById("message");

    var button = document.getElementById("clickme");
    button.onclick = function() {
        count++;
        div.innerHTML = message + count + " times!";
    };
};


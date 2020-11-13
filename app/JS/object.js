/*
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    passengers: 2,
    convertable: false,
    mileage: 1021,
    
    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            document.write("<br>" + this.make + " " + this.model + " Zoom zoom!");
        } else {
            document.write("<br>You need to start the engine first.");
        }
    }
};

var cadi = {
    make: "Cadillac",
    model: "GM",
    year: 1955,
    passengers: 5,
    convertable: false,
    mileage: 12892,
    
    start: function() {
        this.started = true;
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            document.write("<br>" + this.make + " " + this.model + " Zoom zoom!");
        } else {
            document.write("<br>You need to start the engine first.");
        }
    }
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,

    start: function() {
        if (this.fuel > 0) {
            this.started = true;
        }
    },

    stop: function() {
        this.started = false;
    },

    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
             document.write("<br>" + this.make + " " + this.model + " Zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                document.write("<br>Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            document.write("<br>You need to start the engine first.");
        }       
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
    }
};

fiat.start();
fiat.drive();
fiat.addFuel(1);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();

/*
fiat.start();
fiat.drive();
fiat.stop();
cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();

for (var prop in console) {
    document.write("<br>" + prop + ": " + console[prop]);
}

fiat.needWashing = true;


var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function() {
        if (!this.playing) {
            this.playing = true;
            document.write("<br><h1>Playing " + this.name + " by " + this.artist + "</h1>");
        }
    },
    pause: function() {
     if (this.playing) {
            this.playing = false;
        }
    }
};
song.play();
song.pause();



function avtoCycle(model, prop) {
    for (var i = 0; i < model  ; i++) {
        console.log(fiat);
    }
}

console.log(fiat);

delete fiat.color;

console.log(fiat);

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1961,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 28
    };

function prequal(car){
    if (car.mileage > 10000) {
        console.log("This car has more than 10000 km of mileage");
        return false;
    } else if (car.year >  1960) {
        console.log("This car was producted in 1960");
        return false;
    }
    console.log("This car is right for me");
    return true;   
}



var worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " +
      taxi.make + " " + taxi.model);
}


//-------------secret file----------
var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
    };

function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}
function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var secret = getSecret(superSecretFile, 2);
console.log(secret);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);


function makeCar() {
    
        var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
        var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
        var years = [1955, 1957, 1948, 1954, 1961];
        var colors = ["red", "blue", "tan", "yellow", "white"];
        var convertible = [true, false];
        var rand1 = Math.floor(Math.random() * makes.length);
        var rand2 = Math.floor(Math.random() * models.length);
        var rand3 = Math.floor(Math.random() * years.length);
        var rand4 = Math.floor(Math.random() * colors.length);
        var rand5 = Math.floor(Math.random() * 5) + 1;
        var rand6 = Math.floor(Math.random() * 2);

        var car = {
            make: makes[rand1],
            model: models[rand2],
            year: years[rand3],
            color: colors[rand4],
            passengers: rand5,
            convertible: convertible[rand6],
            mileage: 0,
            drive: function() {
                alert.log("Zoom zoom!");
            }
        };
        return car;    
}
fiat.drive();
function displayCar(car) {    
        document.write("<br>Your new car is a " + car.year + " " + car.make + " " + car.model);
    }
var carToSell = makeCar();
displayCar(carToSell);


let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.color = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + '  имеет знчение  ' + options[key]);
}

console.log(Object.keys(options).length);

 


let soldier = {
    health: 400,
    armor: 100,
    style: 'punk'

};

let john = {
    health: 100
};

john.__proto__ = soldier;


console.log(john);
console.log(john.armor + " armor");
console.log(john.style + " style");


var duck = {
    type: "redheaded",
    canFly: true
};

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}
var dack1 = new Duck("bird", "cannotfly");

console.log(dack1.type);

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
    size = "large";
}
console.log("Dog: " + dogs[i].name
    + " is a " + size
    + " " + dogs[i].breed);
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}


var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function() {
        if(ounces == 8) {
            return "small";
        } else if (ounces == 12) {
            return "medium";
        } else if (ounces == 16) {
            return "large";
        }
    };
    this.toString = function() {
        return "You've ordered a " + this.getSize() + " " 
        + this.roast + " coffee.";
        };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());
var latee = new Coffee("Latte makiate", 16);
console.log(latee.toString());
var mokko = new Coffee("Mokko", 12);
console.log(mokko.toString());


function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertable = params.convertible;
    this.mileage = params.mileage;
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            document.write("<br>" + this.make + " " + this.model + " Zoom zoom!");
        } else {
            document.write("<br>You need to start the engine first.");
        }
    };
}

var chevyParams = {make: "GM", 
                    model: "Chevy", 
                    year: 1955, 
                    color: "tan", 
                    passengers: 5, 
                    convertible: false, 
                    mileage: 12892};



var chevy = new Car(chevyParams);

var cars = [chevy];

for(var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}

var limoParams = {make: "Webville Motors",
                    model: "limo",
                    year: 1983,
                    color: "black",
                    passengers: 12,
                    convertible: true,
                    mileage: 21120};

var limo = new Car(limoParams);
var limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);
console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);


var cadiParams = {make: "GM", model: "Cadillac", year: 1955, color: "tan", 
        passengers: 5, convertible: false, mileage: 12892};
var cadi = new Car(cadiParams);
if (cadi instanceof Car) {
    console.log("Congrats, it's a Car!");
}


function dogCatcher(obj) {
    if (obj instanceof Dog) {
        return true;
    } else {
        return false;
    }
}
function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}
var meow = new Cat("Meow", "Siamese", 10); 
var whiskers = new Cat("Whiskers", "Mixed", 12); 
var fido = {name: "Fido", breed: "Mixed", weight: 38}; 
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [meow, whiskers, fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
}

var now = new Date();
var dateString = now.toString();
document.write("<br>" + dateString);
*/
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    }
Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
        if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function() {
    console.log("Run!");
};
Dog.prototype.wag = function() {
    console.log("Wag!");
};
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
spot.bark = function() {
    console.log(this.name + " says WOOF!");
};

var barnaby = new Dog("Barnaby", "Basset Hound", 55);
Dog.prototype.sit = function() {
    console.log(this.name + " is now sitting");
};
Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() { 
    console.log("Stack");
};
ShowDog.prototype.bait = function() {
    console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

barnaby.sit();
barnaby.sit();
spot.sit();
spot.sit();
fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();
spot.hasOwnProperty("sitting");
spot.sitting = true;
spot.hasOwnProperty("sitting");
fido.hasOwnProperty("sitting");

var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}
    console.log("Fido constructor is " + fido.constructor);
    console.log("Scotty constructor is " + scotty.constructor);


function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}
Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.speak = function() {
    console.log("Warning warning!!!");
};
Robot.prototype.makeCoffee = function() {
    console.log("Making coffee");
};
Robot.prototype.blinkLights = function() {
    console.log("Blink blink");
};
var robby = new Robot("Robby", 1956, "Mr.Morbious" );
var rosie = new Robot("Rosie", 1962, "George Jeston");
robby.onOffSwitch = true;
robby.makeCoffee = function() {
    console.log("Fetching a coffee from Starbucks.");
};
rosie.cleanHouse = function() {
    console.log("Cleaning! Spic and Span soon...");
};
console.log(robby.name + " was made by " + robby.maker +
    " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker +
    " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();


function Game() {//создаем конструкотр game  с одним свойством level  со значениме 0
    this.level = 0;
}
Game.prototype.play = function() {//создаем прототип плэй каторый присваетвает объекту левел с прибавление
    // Действия игрока
    this.level++;
    document.write("<br>Welcome to level " + this.level);//отображаем текущий левел
    this.unlock();//прототип также содержит метод анлок
};
Game.prototype.unlock = function() {//пишем прототип метода анлок каторый если левел 42  создает еще один протатип deploylaser
    if (this.level === 42) {
            Robot.prototype.deployLaser = function () {
                document.write("<br>" + this.name + "  is blasting you with laser beams.");//deployLaser  выводит имя объекта и сообщение 
        };
    }

};

var game = new Game();// создаем новы объект game пустой , все запрашвается у прототипов
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
while (game.level < 42) {//цикл сравнивет текущиуй левел и каждый раз запускает блок с програмой
    game.play();//прототип play  запускает итерайию левел и каждый развыводит в кансоль , 
    //каждый раз после вывода в консоль он запускает программу unlock
    //и если уровень достиг 42 тогда создается прототип deploylaser  каторый выводит в консоль имя объекта и сообщение
}
robby.deployLaser();
rosie.deployLaser();

Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function() {
    console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function() {
    this.errorMessage = "I appear to have a short circuit!";
};
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");
rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();
console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));


function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}
SpaceRobot.prototype = new Robot();
SpaceRobot.prototype.speak = function() {
    alert(this.name + " says Sir, If I may venture an opinion...");
};
SpaceRobot.prototype.pilot = function() {
    alert(this.name + " says Thrusters? Are they important?");
};
var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);
var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak();


String.prototype.cliche = function() {
    var cliche = ["lock and load","touch base", "open the kimono"];
    for (var i = 0; i < cliche.length; i++) {
        var index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};


var sentences = ["I'll send my car around to pick you up.",
    "Let's touch base in the morning and see where we are",
    "We don't want to open the kimono, we just want to inform them."];
for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i];
    if (phrase.cliche()) {
        console.log("CLICHE ALERT: " + phrase);
    }
}



function calculateTotalDistanse(first, second, time){
    return (first * time) + (second * time);
}


console.log(calculateTotalDistanse(12, 14, 3));
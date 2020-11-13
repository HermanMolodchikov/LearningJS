"use strict";

let user = {
    name: 'herman',
    age: 35,
    hi() { console.log(this.name); },
    bye() { console.log('bye'); }
};

let admin = {
    name: 'administrator',
    age: '200'
};

function sayHi() {
    console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin['f']();

user.hi();
(user.name == 'herman' ? user.hi : user.bye)();
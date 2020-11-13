let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);
console.log(id1.toString());
console.log(id1.description);

let user = {
    name: 'Herman',
    secondName: 'Molodchikov',
    [id2]: 2
};

let id = Symbol('id');

user[id] = 1;
console.log(user[id]);
console.log(user[id2]);
console.log(user.name);

for (let key in user) console.log(key + ' key in');

let clone = Object.assign({}, user);
console.log(clone[id]);

let obj = {
    0: 'test'
};

console.log(obj['0']);
console.log(obj[0]);
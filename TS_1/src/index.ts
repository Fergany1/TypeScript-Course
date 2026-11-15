// const name: string = 'Ahmed';

// let person: {name: string, age: number , isStudent?: boolean}[];
// person = [
//     {name: 'Ahmed', age: 30, isStudent: true},
//     {name: 'Ali', age: 25 , isStudent: true},
//     {name: 'Sara', age: 28, isStudent: false}
// ];
// console.log(person);

let user = {name: string , age: number} | undefined;

// user before initialization
console.log("User before initialization:", user);


user = {
    name: 'Ahmed',
    age: 30,
};

// user after initialization
console.log(user);

user = undefined;

// user after reassigning to undefined
console.log("User after reassigning to undefined:", user);
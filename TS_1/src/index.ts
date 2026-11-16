// const name: string = 'Ahmed';

// let person: {name: string, age: number , isStudent?: boolean}[];
// person = [
//     {name: 'Ahmed', age: 30, isStudent: true},
//     {name: 'Ali', age: 25 , isStudent: true},
//     {name: 'Sara', age: 28, isStudent: false}
// ];
// console.log(person);

// --------------------------------------------------------------------

// let user :{name: string , age: number} | null = null;

// // user before initialization
// console.log("User before initialization:", user);


// user = {
//     name: 'Ahmed',
//     age: 30,
// };

// // user after initialization
// console.log("User after initialization:", user);

// user = null;

// // user after reassigning to null
// console.log("User after reassigning to null:", user);

// --------------------------------------------------------------------

// let user :| unknown = JSON.parse('{"name": "Ahmed", "age": "30"}');

// if ( typeof user === 'object' && user !== null && 'name' in user && 'age' in user)  {
//     console.log("User is an object:", user);
// }
// else {
//     console.log("User is not an object:", user); 
// }   
// --------------------------------------------------------------------
// type User = {
//     name:string,
//     age:number,
// }

// function isValidUser(user: User): User{
//     if( user.name === "Amr"){
//         return user;
//     }

//     throw new Error("Invalid user");
// }
// function isValidUser(user: User){
//     if(!user.name === "Amr"): void{
//         console.log("Invalid user");
//     }
//     return user;

// }

// let user: User = isValidUser({name: "Amr", age: 30});
// let user2: User = isValidUser({name: "Ahmed", age: 30});
// console.log(user)
// console.log(user2)

//-------------------------------------------------------------------
// User Object
// type User = {
    //     name: string,
    //     age: number
// }

// // Status Num
// type Status =  200 | 400

// type ApiResponse = {data: User | null , status: Status }

// function validResponse(response: ApiResponse){
//     if (response.status === 200){
//         console.log('Valid User Data => ' , response.data)
//         return response.data
//     }
    
//     throw new Error(`ERROR STATUS ${response.status}`);
// }

// const user = validResponse({data: {name: 'Amr' , age: 40} , status: 200});
// console.log(user)

//-------------------------------------------------------------------

// InterFace and Types

// interface UserAbstract {
//     name: string,
//     age: number
// }

// class User implements UserAbstract {
//     name: string
//     age: number

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }


// const user = new User('Ahmed', 30);
// console.log(user);

//-----------------------------------------------------

enum Role {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
};

type User = {
    name: string,
    age: number,
    role: Role
}

function getRole(name: string , age: number): User {
    return {name , age, role: Role.ADMIN}
} 

const user = getRole('Ahmed', 30);

if(user.role === Role.ADMIN){
    console.log('User is an Admin');
}

function getRoleSwitch(role: Role): string {
    switch(role) {
        case Role.ADMIN:
            return 'Admin';
        case Role.USER:
            return 'User';
        case Role.GUEST:
            return 'Guest';
    }
}
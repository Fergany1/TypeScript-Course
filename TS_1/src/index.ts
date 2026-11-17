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

// enum Role {
//     ADMIN = 'ADMIN',
//     USER = 'USER',
//     GUEST = 'GUEST'
// };

// type User = {
//     name: string,
//     age: number,
//     role: Role
// }

// function getRole(name: string , age: number): User {
//     return {name , age, role: Role.ADMIN}
// } 

// const user = getRole('Ahmed', 30);

// if(user.role === Role.ADMIN){
//     console.log('User is an Admin');
// }

// function getRoleSwitch(role: Role): string {
//     switch(role) {
//         case Role.ADMIN:
//             return 'Admin';
//         case Role.USER:
//             return 'User';
//         case Role.GUEST:
//             return 'Guest';
//     }
// }

// -----------------------------------------------

class User {
    public name: string;
    public age: number;

    constructor(name: string , age: number){
        this.name = name;
        this.age = age;
    }

    protected getUserInfo(): string {
        return this.name ;
    }
}

// Notes :-
// OOP Concepts: Encapsulation, Inheritance, Polymorphism, Abstraction ->

// Encapsulation => The User class encapsulates the properties name and age, 
// providing a clear interface for interacting with user data.
// example: We can create methods in the User class to get or set the name and age properties,

// Inheritance => We can create subclasses that inherit from the User class, 
// allowing us to extend its functionality without modifying the original class.
// example: 
// class AdminUser extends User { ... } would inherit the properties and methods of the User class,
class AdminUser extends User {
    public role: string;

    constructor(name: string, age: number, role: string){
        super(name, age); // super() is used to call the constructor of the parent class (User) and 
                        // initialize the inherited properties (name and age).
        this.role = role;
    }

    getRole(): string {
        console.log("Protected Info: " +this.getUserInfo())
        return this.name;
    }

}

const admin = new AdminUser('Ali', 35, 'Admin');
console.log(admin.name); // Output: Ali
console.log(admin.role); // Output: Admin
console.log(admin.getRole()); // Output: Admin

// Polymorphism => We can create methods in subclasses that override or extend the behavior of methods in the User class, 
// allowing us to treat different user types uniformly while still providing specialized behavior.
// example:
// class GuestUser extends User {
//     public guestId: string;

//     constructor(name: string, age: number, guestId: string){
//         super(name, age);
//         this.guestId = guestId;
//     }

//     getGuestId(): string {
//         return this.guestId;
//     }   
// }

// const guest = new GuestUser('Sara', 25, 'GUEST123');
// console.log(guest.name);
// console.log(guest.getGuestId());


// Abstraction => The User class provides an abstraction of a user, 
// hiding the implementation details of how user data is stored and manipulated,
// allowing us to focus on the essential characteristics of a user without worrying about the underlying implementation.
// example: We can create methods in the User class that perform operations on user data without exposing the internal representation of that data.
// class UserWithMethods {
//     public name: string
//     public age: number
    

//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }

//     getUserInfo(): string {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }

// }


// In this example, we have a User class with two public properties: name and age. 
// The constructor initializes these properties when a new User object is created.
// The name and age properties are public, so they can be accessed and modified from outside the class.
// If They are private or protected, they can only be accessed and modified from within the class or its subclasses.
// const user = new UserWithMethods('Omar', 30);
// console.log(user.getUserInfo());

// user.name = 'David';
// user.age = 35;
// console.log( "User Public Name after: " + user.name + " , User Public Age after: " + user.age);
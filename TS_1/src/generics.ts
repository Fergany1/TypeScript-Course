// Generics
interface Entity {
    id: number;
    updatedAt: Date;
    createdAt: Date;
    deletedAt?: Date;
}

// Abstraction
// This Where you store and retrive data
// A box for Users , Products , orders ... etc
interface Repository<T extends Entity> {
    save(entity: T): void;
    findById(id: number):T | undefined;
    findAll(): T[];
    delete(id: number): void;
}

// Implementation of the Repository interface
// which works with any T type
// Temporary array in RAM not In DB
// Stores Data in an array inside the app memory
class InMemoryRepository<T extends Entity> implements Repository<T>{
    // array to store data
    private items:T[] = [];

    save(entity : T): void{
        // checls if item with same id already exits
        const index = this.items.findIndex(item => item.id === entity.id);

        // if no item has that id , push it into the array
        if (index === -1){
            this.items.push(entity);
        } else {
            // if it already exists , replace it
            this.items[index] = entity;
        }
    }

    // find() -> goes through the arr and returns first matching item
    findById(id: number): T | undefined{
        return this.items.find(item => item.id === id);
    }

    // spread op ... to return copy of the array without modification
    findAll(): T[] {
        return [...this.items];
    }

    delete(id: number): void {
        this.items = this.items.filter(item => item.id !== id)
    }
}

// the User have the Entity data 
//    id: number;
// updatedAt: Date;
// createdAt: Date;
// deletedAt?: Date;
// And name and email
interface User extends Entity{
    name: string;
    email: string;
}

type User2 = Entity & {
    name: string;
    email: string
}

// Examples
const userRepo = new InMemoryRepository<User>();

const user1  = {
    id: 1,
    name: 'Ali',
    email: 'ali@email.com',
    createdAt: new Date(),
    updatedAt: new Date(),
}

userRepo.save(user1);
userRepo.save({
    id: 2,
    name: 'Amr',
    email: 'amr@email.com',
    createdAt: new Date(),
    updatedAt: new Date(),
});
userRepo.save({
    id: 3,
    name: 'Ahmed',
    email: 'ahmed@email.com',
    createdAt: new Date(),
    updatedAt: new Date(),
});
userRepo.save({
    id: 3,
    name: 'Gamal',
    email: 'gamal@email.com',
    createdAt: new Date(),
    updatedAt: new Date(),
});
userRepo.save({
    id: 4,
    name: 'Khaled',
    email: 'khaled@email.com',
    createdAt: new Date(),
    updatedAt: new Date(),
});

// find the user with id 2
const foundUser = userRepo.findById(2)
// console.log(foundUser)


const foundAllUsers = userRepo.findAll();
console.log(foundAllUsers)
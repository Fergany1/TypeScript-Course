// Generics
interface Entity {
    id: number;
    updatedAt: Date;
    createdAt: Date;
    deletedAt?: Date;
}

// Abstraction
// This Where you store and retrive data
interface Repository<T extends Entity> {
    save(entity: T): void;
    findById(id: number):T;
    findAll(): T[];
    delete(id: number): void;
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
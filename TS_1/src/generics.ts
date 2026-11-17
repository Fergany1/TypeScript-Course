// Generics
interface Entity {
    id: number;
    updatedAt: Date;
    createdAt: Date;
    deletedAt?: Date;
}

// Abstraction
interface Repository<T extends Entity> {
    save(entity: T): void;
    findById(id: number):T;
    findAll(): T[];
    delete(id: number): void;
}
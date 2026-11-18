interface Entity {
    id: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt ?: Date,
}

interface Repository<T extends Entity>{
    save(entity: T): void;
    findById(id : number): T | undefined;
    findAll(): T[];
    update(entity: T): void;
    delete(id: number): void;
}


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

// implementing One Generic Repo
class InMemoryRepository<T extends Entity> implements Repository<T> {
    private items: T[] = [];

    save(entity: T): void{
        const index = this.items.findIndex(item => item.id === entity.id);
        
        if (index === -1){
            this.items.push(entity)
        } else {
            this.items[index] = entity
        }
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    findAll(): T[] {
        return [...this.items];
    }

    update(entity: T): void {
        this.save(entity)
    }
    
    delete(id: number): void {
        this.items.filter(item => item.id !== id);
    }
}

// Create Different Entity Type
interface Task extends Entity {
    title: string;
    description: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    assignedTold: number;
}

interface User extends Entity {
    name: string;
    age: number;
    role: 'Admin' | "Member";
}

interface Project extends Entity {
    name: string;
    ownerId: number;
}

// Use Repository Instances
const taskRepository = new InMemoryRepository<Task>();
const userRepository = new InMemoryRepository<User>();
const projectRepository = new InMemoryRepository<Project>();


// Provide the Task Service logic
class TaskService {
    constructor(private repository: Repository<Task>) {}

    createTask(
        title: string,
        description: string,
        assignedTold: number
    ) : Task {
        const task: Task = {
            id: Date.now(),
            title, description, assignedTold, // decalred value
            completed: false,
            priority: 'medium',
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        // save task
        this.repository.save(task);
        return task;
    }

    // func to mark the completed tasks true/false
    completeTask(id: number): boolean {
        const task = this.repository.findById(id);

        if(!task){
            return false
        }

        this.repository.save({
            ...task,
            completed: true,
            updatedAt: new Date()
        });

        return true;
    }

    // show the unfinished Tasks
    getInCompleteTasks(): Task[] {
        return this.repository
            .findAll()
            .filter(task => !task.completed) // return only Uncompleted Tasks
    }
}

// Examples
const taskService = new TaskService(taskRepository);

taskService.createTask(
    "Learn TypeScript",
    "Practice Generics And Abstraction",
    1
);

taskService.createTask(
    "Practice with Projects",
    "Creating A Task Managment System",
    1
);

console.log(taskService.getInCompleteTasks());


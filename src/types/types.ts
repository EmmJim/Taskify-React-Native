export type TaskItem = {
    name: String, 
    projectName: String, 
    status: Number,
    date: Date,
    description: String
}

export enum TaskStatuses {
    InProgress = 1,
    Completed = 2,
    allTasks = 3
}
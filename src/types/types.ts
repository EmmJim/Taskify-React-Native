export type TaskItem = {
    name: String, 
    projectName: String, 
    status: Number
}

export enum TaskStatuses {
    InProgress = 1,
    Completed = 2,
    allTasks = 3
}
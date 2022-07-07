export interface HomeStore {
    tasks: Array<Task>,
    [field: string]: any,
    taskName: string,
    taskDuration: number,
    sprintLength: number,
    workHours: number,
    daysInAWeek: number,
    addTask: () => void,
    updateField: (field: string, value: string | number) => void
}

export interface Task{
    id: string,
    name: string,
    duration: number
}

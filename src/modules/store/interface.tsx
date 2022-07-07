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
    updateActiveField: (id: string) => void,
    clearAll: () => void
}

export interface Task{
    id: string,
    name: string,
    duration: number,
    active: boolean
}

export interface Storage {
    getItem: (name: string) => string | null | Promise<string | null>
    setItem: (name: string, value: string) => void | Promise<void>
    removeItem: (name: string) => void | Promise<void>
  }

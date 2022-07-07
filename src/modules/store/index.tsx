import create from 'zustand'
import { HomeStore, Task } from './interface'
import { persist } from "zustand/middleware"



const useStore = create(persist<HomeStore>(((set) => ({
    taskName: 'task_1',
    taskDuration: 0,
    tasks: [],
    sprintLength: 10,
    workHours: 8,
    daysInAWeek: 5,
    addTask: () => set((state) => ({ 
        tasks: [...state.tasks, {
            id: Date.now().toString(),
            name: state.taskName,
            duration: state.taskDuration,
            active: true
        }],
        taskName: `task_${Number(state.tasks.length) + 2}`,
    })),
    updateField: (field, value) => set(() => ({
        [field]: value.toString()
    })),
    updateActiveField: (taskId) => set((state) => ({
        tasks: state?.tasks?.map((task) => {
            if(task.id === taskId) {
                task.active = !task.active
            }
            return task
        })
    })),
    clearAll: () => set({
        tasks: [],
        taskName: 'task_1',
        taskDuration: 0
    })
})), {name: 'sprinter'}))

export default useStore
import Tasks from 'modules/Home/Tasks'
import create from 'zustand'
import { HomeStore, Task } from './interface'


const useStore = create<HomeStore>(((set) => ({
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
            duration: state.taskDuration
        }],
        taskName: `task_${Number(state.tasks.length) + 2}`,
    })),
    updateField: (field, value) => set(() => ({
        [field]: value.toString()
    }))
})))

export default useStore
import useStore from "../../store/"
import AddTask from "./AddTask"
import css from './styles.css'

const Tasks = () => {
    const tasks = useStore(state => state.tasks)
    return <div className={css.container}>
        <h1>ALL TASKS</h1>
        {tasks.map((task) => {
            return <div key={task.id}>{task.name}({task.duration}h)</div>
        })}
        <AddTask />
    </div>
}

export default Tasks
import Button from "common/UI/Button"
import useStore from "../../store/"
import AddTask from "./AddTask"
import css from './styles.css'

const Tasks = () => {
    const {tasks, updateActiveField, clearAll} = useStore(state => ({
        tasks: state.tasks,
        updateActiveField: state.updateActiveField,
        clearAll: state.clearAll
    }))
    const onChange = (id: string) => () => {
        updateActiveField(id)
    }
    return <div className={css.container}>
        <div className={css.header}><h1>ALL TASKS</h1>&nbsp;&nbsp;
        <Button onClick={clearAll}>CLEAR ALL</Button>
        </div>
        {tasks.map((task) => {
            return <div key={task.id}>
                <input type="checkbox" onChange={onChange(task.id)} checked={task.active}></input>
                {task.name}({task.duration}h)
            </div>
        })}
        <AddTask />
    </div>
}

export default Tasks
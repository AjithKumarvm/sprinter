import useStore from '../../../store'

const AddTask = () => {
    const {taskName, taskDuration, updateField, addTask} = useStore()
    const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        window.console.log('onChange', field, e.target.value)
        updateField(field, e.target.value)
    }
    const onAddTask = () => {
        window.console.log('add')
        addTask()
    }
    return <div>
         <input type="text" placeholder="task name" onChange={onChange('taskName')} value={taskName}></input>&nbsp;
        <input type="number" placeholder="hours" onChange={onChange('taskDuration')} value={taskDuration ? taskDuration.toString() : ''}></input>&nbsp;
        <button onClick={onAddTask}>ADD</button>
    </div>
}

export default AddTask
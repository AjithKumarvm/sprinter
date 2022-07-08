import Button from 'common/UI/Button'
import Input from 'common/UI/Input'
import useStore from '../../../store'
import css from './styles.css'

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
    return <div className={css.container}>
        <Input label="name" type="text" placeholder="task name" onChange={onChange('taskName')} value={taskName} />&nbsp;
        <Input label="duration" type="number" placeholder="hours" onChange={onChange('taskDuration')} value={taskDuration ? taskDuration.toString() : ''} />&nbsp;
        <Button onClick={onAddTask}>ADD</Button>
    </div>
}

export default AddTask
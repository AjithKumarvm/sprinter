import Input from "common/UI/Input"
import useStore from "../../store"
import css from './styles.css'

export const Settings = () => {
    const {daysInAWeek, workHours, sprintLength, updateField} = useStore()
    const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        window.console.log('onChange', field, e.target.value)
        updateField(field, e.target.value)
    }
    return <div className={css.container}>
        <Input label="Work Hours(hours)" type="number" onChange={onChange('workHours')} value={workHours} />&nbsp;
        <Input label="Work Days(days)" type="number" onChange={onChange('daysInAWeek')} value={daysInAWeek} />&nbsp;
        <Input label="Sprint length(days)" type="number" onChange={onChange('sprintLength')} value={sprintLength} />&nbsp;
    </div>
}
import useStore from "../../store"
import css from './styles.css'

export const Settings = () => {
    const {daysInAWeek, workHours, sprintLength, updateField} = useStore()
    const onChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        window.console.log('onChange', field, e.target.value)
        updateField(field, e.target.value)
    }
    return <div className={css.container}>
        Work Hours(hours)<input type="number" onChange={onChange('workHours')} value={workHours}></input>&nbsp;
        Work Days(days)<input type="number" onChange={onChange('daysInAWeek')} value={daysInAWeek}></input>&nbsp;
        Sprint length(days)<input type="number" onChange={onChange('sprintLength')} value={sprintLength}></input>&nbsp;
    </div>
}
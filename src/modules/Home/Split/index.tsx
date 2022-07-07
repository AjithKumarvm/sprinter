import { HomeStore, Task } from "../../store/interface"
import useStore from "../../store"
import css from './styles.css'

const processDailyData = (weekHours: number, total: number, day : number): number  => {
    const remaining = total - (weekHours * day)
    window.console.log('processDailyData', weekHours, total, day, remaining)
    if (remaining >= weekHours) {
        return weekHours
    }
    const hours = remaining % weekHours
    if (hours > 0) {
        return hours
    }
    return 0
}

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const Split = () => {
    const {tasks, workHours, sprintLength, daysInAWeek} = useStore(state => ({
        tasks: state.tasks,
        workHours: state.workHours,
        sprintLength: state.sprintLength,
        daysInAWeek: state.daysInAWeek
    }))
    if (!workHours || !sprintLength || !daysInAWeek) return <div>invalid settings</div>
    window.console.log('ani', {workHours, sprintLength, daysInAWeek})
    const total = tasks.reduce((sum: number, task: Task) => {
        return Number(sum) + Number(task.duration)
    }, 0)
    const daysNeeded = Math.ceil(total / workHours)
    const weekDaysGenerated = Array(daysNeeded + 2).fill('day')
    return <div className={css.container}>
            <h1>SPRINT PLAN FOR YOU </h1>
            Total: {total}h
            {weekDaysGenerated.map((_, index) => {
                const picker: number = index % daysInAWeek
                const day = weekDays[Number(picker)] 
                const showWeekSplit = ((index + 1) % daysInAWeek) === 0
                const splitItemOverflow = (index + 1) >  sprintLength
                const dailyHours = processDailyData(workHours, total, index)
                if (dailyHours <= 0) return
                return <div className={splitItemOverflow ? css.splitItemOverflow : css.splitItem}>
                    {day}:
                    {dailyHours}h
                    {showWeekSplit ? <><br /><br /></> : ''}
                </div>
            })}
    </div>
}

export default Split
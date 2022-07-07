import { Settings } from './Settings'
import Split from './Split'
import css from './styles.css'
import Tasks from './Tasks'

function Home() {
  return (
    <div className={css.container}>
      <Settings />
      <div className={css.row}>
        <Split />
        <div className={css.taskArea}>
          <Tasks />
        </div>
      </div>
    </div>
  )
}

export default Home

import { MouseEventHandler } from "react"
import css from './styles.css'

const Button = ({children, onClick}: {children: string, onClick: MouseEventHandler<HTMLButtonElement>}) => 
<button className={css.container} onClick={onClick}>{children}</button>

export default Button
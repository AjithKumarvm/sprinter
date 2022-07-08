import css from './styles.css'

const Input = ({label, placeholder, ...rest} : any) => <div className={css.container}>
    {label && <label className={css.label}>{label}</label>}
    <input className={css.input} placeholder={placeholder || label} {...rest} />
</div>

export default Input
import { InputHTMLAttributes, useId } from 'react'
import cn from 'classnames'

import styles from './Input.module.scss'

type IInputProps = {
    label?: string;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, className, label }: IInputProps) => {
    const id = useId()

    return (
        <div className={cn(styles.container, className)}>
            {label && <label htmlFor={id}>{ label }</label>}
            <input className={styles.input} id={id} type={type}/>
        </div>
    )
}
import {InputHTMLAttributes, ReactElement, useId} from 'react'
import cn from 'classnames'

import styles from './Input.module.scss'

type IInputProps = {
    label?: string;
    className?: string;
    withIcon?: ReactElement
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, className, label, withIcon, ...props }: IInputProps) => {
    const id = useId()

    return (
        <div className={cn(styles.container, className)}>
            {label && <label htmlFor={id}>{ label }</label>}
            <div className={styles.inputWrapper}>
                <input className={cn(styles.input, { [styles.withIconInput]: withIcon })} id={id} type={type} {...props} />
                {withIcon && (
                    <div className={styles.withIcon}>{ withIcon }</div>
                )}
            </div>
        </div>
    )
}
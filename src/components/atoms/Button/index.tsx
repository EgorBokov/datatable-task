import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type IButtonProps = {
    className?: string;
    title?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren

export const Button = ({ children, className, title, ...props }: IButtonProps) => {
    return (
        <button className={cn(styles.container, className)} {...props}>
            { title || children }
        </button>
    );
};

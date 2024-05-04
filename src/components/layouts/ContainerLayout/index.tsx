import { PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './ContainerLayout.module.scss'

type IContainerLayoutProps = {
    className?: string;
} & PropsWithChildren

export const ContainerLayout = ({ className, children}: IContainerLayoutProps) => {
    return (
        <div className={cn(styles.container, className)}>
            { children }
        </div>
    )
}
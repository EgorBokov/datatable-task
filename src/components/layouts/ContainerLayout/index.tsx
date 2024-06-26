import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { routesToRender } from '@/router'
import cn from 'classnames'

import styles from './ContainerLayout.module.scss'

type IContainerLayoutProps = {
    className?: string;
} & PropsWithChildren

export const ContainerLayout = ({ className, children}: IContainerLayoutProps) => {
    return (
        <>
            <header className={styles.header}>
                {routesToRender.map((element) => (
                        <Link to={element.path} key={element.path}>
                            {element.title}
                        </Link>
                ))}
            </header>
            <div className={cn(styles.container, className)}>
                { children }
            </div>
        </>
    )
}
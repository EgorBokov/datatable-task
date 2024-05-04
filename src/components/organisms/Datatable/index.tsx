import { useState } from 'react'
import styles from './Datatable.module.scss'

type IDatatableProps<T extends Record<K, T[K]>, K extends keyof T> = {
    data: Array<T>;
}

export const Datatable = ({ data }: IDatatableProps<typeof data, string>) => {
    const [localData, setLocalData] = useState(data)

    const handleChangeField = (field: keyof , newData: ) => {

    }

    return (
        <div className={styles.container}>

        </div>
    )
}
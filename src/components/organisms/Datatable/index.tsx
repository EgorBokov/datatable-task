import { memo } from 'react'
import { DatatableHead } from '@components/organisms/Datatable/DatatableHead.tsx'
import { DatatableBody } from '@components/organisms/Datatable/DatatableBody.tsx'
import { Filter } from '@components/molecules/Filter';
import type { TableInnerPropsElement } from '@utils/types/common.ts'

import styles from './Datatable.module.scss'

type IDatatableProps = {
    data: Array<TableInnerPropsElement>;
    onChange: (id: number) => void;
    headers: Array<string>;
    onFilterChange: (value: string) => void;
}

const DatatableComponent = ({ data, onChange, headers, onFilterChange }: IDatatableProps) => {
    return (
        <div className={styles.tableWrapper}>
            <div className={styles.tableContainer}>
                <Filter
                    onChange={onFilterChange}
                    className={styles.filterContainer}
                />
                <table className={styles.table}>
                    <DatatableHead headers={headers} />
                    <DatatableBody data={data} onClick={onChange} />
                </table>
            </div>
        </div>
    )
}

export const Datatable = memo(DatatableComponent)
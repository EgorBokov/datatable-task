import styles from '@components/organisms/Datatable/Datatable.module.scss';

type IDatatableHeadProps = {
    headers: Array<string>;
}

export const DatatableHead = ({ headers}: IDatatableHeadProps) => {
    return (
        <thead>
        <tr>
            {headers.map((element, idx) => <th className={idx === 2 ? styles.expand : ''} key={element}>{element}</th>)}
            <th aria-label="Колонка для изменения поля имени элемента таблицы" />
        </tr>
        </thead>
    )
}
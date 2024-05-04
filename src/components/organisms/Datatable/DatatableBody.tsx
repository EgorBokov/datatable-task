import type { TableInnerPropsElement } from '@utils/types/common.ts'

type IDatatableBodyProps = {
    data: Array<TableInnerPropsElement>;
    onClick: (id: number) => void;
}

export const DatatableBody = ({ data, onClick }: IDatatableBodyProps) => {
    const handleChangeElementState = (id: number) => () => {
        onClick(id)
    }

    const formattedRender = (element: any) => {
        if (typeof element === 'boolean') {
            return element ? 'Active' : 'Not Active'
        }

        return element
    }

    return (
        <tbody>
        {
            Boolean(data.length) && data.map((element) => {
                return (
                    <tr key={element[0]}>
                        <>{Object.values(element).map((value) => <td key={value}>{ formattedRender(value) }</td>)}</>
                        <td onClick={handleChangeElementState(element.id)}>
                            Edit
                        </td>
                    </tr>
                )
            })
        }
        </tbody>
    )
}

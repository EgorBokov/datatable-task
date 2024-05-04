import { ChangeEvent, useMemo, useRef, useState } from 'react'
import { Datatable } from '@components/organisms/Datatable'
import { EditableModal } from '@components/molecules/EditableModal'

type TableInnerPropsElement = Record<string, Record<string, any> | any>;

type IDatatableContainerProps = {
    data: Array<TableInnerPropsElement>
}

export const DatatableContainer = ({ data }: IDatatableContainerProps) => {
    const [localData, setLocalData] = useState<TableInnerPropsElement[]>(data)
    const [updatedTitle, setUpdatedTitle] = useState('')
    const [isEditActive, setIsEditActive] = useState(false)
    const [filterQuery, setFilterQuery] = useState('')

    const changeFilterQuery = (value: string) => {
        setFilterQuery(value)
    }

    const tableElementId = useRef('')

    const handleEditValue = (id: number) => {
        tableElementId.current = String(id)
        setIsEditActive(true)
    }

    const handleInputToUpdatedTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdatedTitle(event.target.value)
    }

    const handleSaveChanges = () => {
        if (!updatedTitle) {
            console.warn('There is no value to update with!')

            handleCloseEdit()
            return
        }

        const intId = Number(tableElementId.current)

        setLocalData(handleUpdateDataElement(intId))
        handleCloseEdit()
    }

    const handleCloseEdit = () => {
        tableElementId.current = ''
        setUpdatedTitle('')
        setIsEditActive(false)
    }

    const unwrappedObjects = useMemo(() => localData.map((element) => {
        return Object.entries(element).reduce((acc, value) => {
            if (value[1] instanceof Object) {
                return { ...acc, ...value[1] }
            }

            return { ...acc, [value[0]]: value[1] }
        }, {})
    }), [localData])

    const tableHeadersToArray = useMemo(() => {
        return Object.keys(unwrappedObjects[0]).map((el) => el[0].toUpperCase() + el.slice(1))
    }, [unwrappedObjects])

    const firstTextValueToChange = useMemo(() => {
        const entries = Object.entries(unwrappedObjects[0])

        for (let i = 0; i < entries.length; i++) {
            if (typeof entries[i][1] === 'string') {
                return entries[i][0]
            }
        }

        return entries[0][1] as string
    }, [unwrappedObjects])

    const filteredByQueryData = useMemo(() => {
        if (!filterQuery) {
            return unwrappedObjects
        }

        return (unwrappedObjects as unknown as Array<Record<string, any>>).filter((element) => element[firstTextValueToChange].includes(filterQuery))
    }, [unwrappedObjects, filterQuery])

    const handleUpdateDataElement = (id: number) => (prevState: TableInnerPropsElement[]) => {
        const elementIndex = prevState.findIndex((element) => element.id === id)

        return [...prevState.slice(0, elementIndex), { ...prevState[elementIndex], [firstTextValueToChange]: updatedTitle }, ...prevState.slice(elementIndex + 1)]
    }

    return (
        <>
            <EditableModal
                value={updatedTitle}
                onSave={handleSaveChanges}
                onChange={handleInputToUpdatedTitle}
                onClose={handleCloseEdit}
                isOpen={isEditActive}
                label={firstTextValueToChange}
            />
            <Datatable
                data={filteredByQueryData}
                onChange={handleEditValue}
                headers={tableHeadersToArray}
                onFilterChange={changeFilterQuery}
            />
        </>
    )
}
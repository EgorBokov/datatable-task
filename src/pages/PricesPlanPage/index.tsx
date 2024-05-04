import { ContainerLayout } from '@components/layouts/ContainerLayout'
import {  DatatableContainer } from '@components/organisms/DatatableContainer/DatatableContainer.tsx'
import { pricesData } from '@utils/mockData'

export const PricesPlanPage = () => {
    return (
        <ContainerLayout>
            <DatatableContainer data={pricesData} />
        </ContainerLayout>
    )
}
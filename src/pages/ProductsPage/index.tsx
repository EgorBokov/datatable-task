import { ContainerLayout } from '@components/layouts/ContainerLayout'
import { DatatableContainer } from '@components/organisms/DatatableContainer/DatatableContainer.tsx'
import { productsData } from '@utils/mockData';

export const ProductsPage = () => {
    return (
        <ContainerLayout>
            <DatatableContainer data={productsData} />
        </ContainerLayout>
    )
}
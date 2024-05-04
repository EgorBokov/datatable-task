import { DatatableContainer } from '@components/organisms/DatatableContainer/DatatableContainer.tsx'
import { ContainerLayout } from '@components/layouts/ContainerLayout'
import { pagesData } from '@utils/mockData'

export const PagesListPage  = () => {
    return (
        <ContainerLayout>
            <DatatableContainer data={pagesData} />
        </ContainerLayout>
    );
};

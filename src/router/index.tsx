import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/App.tsx';
import { ProductsPage } from '@pages/ProductsPage'
import { PagesListPage } from '@pages/PagesListPage'
import { PricesPlanPage } from '@pages/PricesPlanPage'
import { NotFoundPage } from '@pages/NotFoundPage'

export const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/products',
        element: <ProductsPage />
    },
    {
        path: '/prices',
        element: <PricesPlanPage />
    },
    {
        path: '/pages',
        element: <PagesListPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]

export const router = createBrowserRouter(routes)
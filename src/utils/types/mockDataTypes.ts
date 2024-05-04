export type ProductOptions = {
    size: string;
    amount: number;
}

export type ProductType = {
    id: number;
    name: string;
    options: ProductOptions;
    active: boolean;
    createdAt: string;
}

export type PageType = {
    id: number;
    description: string;
    active: boolean;
    createdAt: string;
    removedAt: string;
}

export type PricesType = {
    id: number;
    title: string;
    active: boolean;
    updatedAt: string;
    publishedAt: string;
}
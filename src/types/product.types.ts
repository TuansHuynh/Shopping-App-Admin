export interface Product {
    id: number;
    name: string;
    image: File | string;
    price: number;
    discount?: number;
    discount_id?: number;
    group_id?: number;
    category_id?: number;
    type_id?: number;
}

export interface ProductDescription {
    id: number;
    product_description: string;
    product_id: number;
}
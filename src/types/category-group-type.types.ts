export interface Category {
    id: number;
    name: string;
    group_id: number;
}

export interface ProductGroup {
    id: number;
    name: string;
    type_id: number;
}

export interface ProductType {
    id: number;
    name: string;
}
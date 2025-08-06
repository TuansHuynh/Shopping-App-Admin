export interface ProductResponse {
    id: number;
    finalPrice: number;
    image: string;
    name: string;
    price: number;
    categoryId: number;
    discountId: number;
    discountValue: number;
    groupId: number;
    typeId: number 
    quantity: number;
    rate?: number;
    description?: string[];
}

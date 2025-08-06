import type { CategoryResponse } from "./Category";

export interface ProductGroupResponse {
    id: number;
    name: string;
    typeId: number 
    categories: CategoryResponse[]; // THÊM để lồng danh sách category vào
}

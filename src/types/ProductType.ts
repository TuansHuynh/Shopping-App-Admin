import type { ProductGroupResponse } from "./ProductGroup";

export interface ProductTypeResponse {
    id: number;
    name: string;
    groups: ProductGroupResponse[]; // THÊM để lồng danh sách group vào
}
import type { ProductResponse } from "./Product";

export interface CategoryResponse {
    id: number;
    name: string;
    groupId: number;
    products: ProductResponse[]; // THÊM để lồng danh sách sản phẩm vào
}

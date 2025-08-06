export interface DiscountResponse {
    id: number;
    code: string;
    end_at: string;
    is_active: boolean;
    is_percentage: boolean;
    name: string;
    start_at: string;
    value: number;
}

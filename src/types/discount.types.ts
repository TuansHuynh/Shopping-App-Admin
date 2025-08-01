export interface Discount {
    id: number;
    code: string;
    name: string;
    start_at: string;
    end_at: string;
    value: number;
    is_active: boolean;
    is_percentage: boolean;
}
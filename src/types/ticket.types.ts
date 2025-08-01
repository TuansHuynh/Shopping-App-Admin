export interface Ticket {
    id: number;
    code: string;
    discount_value: number;
    expired_at: string;
    is_active: boolean;
    is_percentage: boolean;
    user_id: number;
}
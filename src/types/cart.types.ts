export interface Cart {
    id: number;
    created_at: string;
    is_checked_out: boolean;
    ticket_id?: number;
    user_id: number;
    items: CartItem[];
}

export interface CartItem {
    id: number;
    price_at_add_time: number;
    quantity: number;
    cart_id: number;
    product_id: number;
}
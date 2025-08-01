// // types.ts

// // ----------- USER -----------
// export interface User {
//     id: number;
//     address: string;
//     birthdate: string; // ISO string
//     email: string;
//     firstname: string;
//     lastname: string;
//     password: string;
//     phone_number: number;
//     user_name: string;
//     roles: UserRole[];
// }

// export interface UserRole {
//     id: number;
//     role_name: string;
//     user_id: number;
// }

// // ----------- PRODUCT -----------
// export interface Product {
//     id: number;
//     name: string;
//     image: File | string;
//     price: number;
//     discount?: number;
//     discount_id?: number;
//     group_id?: number;
//     category_id?: number;
//     type_id?: number;
// }

// export interface ProductDescription {
//     id: number;
//     product_description: string;
//     product_id: number;
// }

// // ----------- CATEGORY, GROUP, TYPE -----------
// export interface Category {
//     id: number;
//     name: string;
//     group_id: number;
// }

// export interface ProductGroup {
//     id: number;
//     name: string;
//     type_id: number;
// }

// export interface ProductType {
//     id: number;
//     name: string;
// }

// // ----------- DISCOUNT -----------
// export interface Discount {
//     id: number;
//     code: string;
//     name: string;
//     start_at: string;
//     end_at: string;
//     value: number;
//     is_active: boolean;
//     is_percentage: boolean;
// }

// // ----------- TICKET -----------
// export interface Ticket {
//     id: number;
//     code: string;
//     discount_value: number;
//     expired_at: string;
//     is_active: boolean;
//     is_percentage: boolean;
//     user_id: number;
// }

// // ----------- CART -----------
// export interface Cart {
//     id: number;
//     created_at: string;
//     is_checked_out: boolean;
//     ticket_id?: number;
//     user_id: number;
//     items: CartItem[];
// }

// export interface CartItem {
//     id: number;
//     price_at_add_time: number;
//     quantity: number;
//     cart_id: number;
//     product_id: number;
// }

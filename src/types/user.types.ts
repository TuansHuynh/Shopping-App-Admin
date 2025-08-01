export interface User {
    id: number;
    address: string;
    birthdate: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    phone_number: number;
    user_name: string;
    roles: UserRole[];
}

export interface UserRole {
    id: number;
    role_name: string;
    user_id: number;
}
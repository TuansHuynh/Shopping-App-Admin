import api from "../api/api";

export const getAllCarts = async () => {
    const response = await api.get('/cart');
    return response.data;
}

export const getCartById = async (id: number) => {
    const response = await api.get(`/cart/${id}`);
    return response.data;
}

export const createCart = async (data: {
    created_at: string,
    is_checked_out: boolean,
    ticket_id: number,
    user_id: number
}) => {
    const response = await api.post('/cart', data);
    return response.data;
}

export const updateCart = async (id: number, data: Partial<{
    created_at: string,
    is_checked_out: boolean,
    ticket_id: number,
    user_id: number
}>) => {
    const response = await api.put(`/cart/${id}`, data);
    return response.data;
}

export const deleteCart = async (id: number) => {
    const response = await api.delete(`/cart/${id}`);
    return response.data;
}
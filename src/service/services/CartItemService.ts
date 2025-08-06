import api from "../api/api";

export const getAllCartItems = async () => {
    const response = await api.get('/cart-item');
    return response.data;
}

export const getCartItemById = async (id: number) => {
    const response = await api.get(`/cart-item/${id}`);
    return response.data;
}

export const createCartItem = async (data: {
    price_at_add_time: number,
    quantity: number,
    cart_id: number,
    product_id: number
}) => {
    const response = await api.post('/cart-item', data);
    return response.data;
}

export const updateCartItem = async (id: number, data: Partial<{
    price_at_add_time: number,
    quantity: number,
    cart_id: number,
    product_id: number
}>) => {
    const response = await api.put(`/cart-item/${id}`, data);
    return response.data;
}

export const deleteCartItem = async (id: number) => {
    const response = await api.delete(`/cart-item/${id}`);
    return response.data;
}
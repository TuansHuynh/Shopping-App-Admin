import api from "../api/api";

export const getAllDiscounts = async () => {
    const response = await api.get('/discount');
    return response.data;
}

export const getDiscountById = async (id: number) => {
    const response = await api.get(`/discount/${id}`);
    return response.data;
}

export const createDiscount = async (data: {
    code: string,
    end_at: string,
    is_active: boolean,
    is_percentage: boolean,
    name: string,
    start_at: string,
    value: number
}) => {
    const response = await api.post('/discount', data);
    return response.data;
}

export const updateDiscount = async (id: number, data: Partial<{
    code: string,
    end_at: string,
    is_active: boolean,
    is_percentage: boolean,
    name: string,
    start_at: string,
    value: number
}>) => {
    const response = await api.put(`/discount/${id}`, data);
    return response.data;
}

export const deleteDiscount = async (id: number) => {
    const response = await api.delete(`/discount/${id}`);
    return response.data;
}
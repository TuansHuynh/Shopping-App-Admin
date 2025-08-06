import api from "../api/api";

export const getAllDescription = async () => {
    const response = await api.get('/product-description');
    return response.data;
}

export const getDescriptionById = async (id: number) => {
    const response = await api.get(`/product-description/${id}`);
    return response.data;
}

export const createDescription = async (data: { content: string, productId: number }) => {
    const response = await api.post('/product-description', data);
    return response.data;
}

export const updateDescription = async (id: number, data: { content: string, productId: number }) => {
    const response = await api.put(`/product-description/${id}`, data);
    return response.data;
}

export const deleteDescription = async (id: number) => {
    const response = await api.delete(`/product-description/${id}`);
    return response.data;
}
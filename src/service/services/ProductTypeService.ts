import api from "../api/api";

export const getAllTypes = async () => {
    const response = await api.get('/product-type');
    return response.data;
}

export const getTypeById = async (id: number) => {
    const response = await api.get(`/product-type/${id}`);
    return response.data;
}

export const createType = async (data: { name: string }) => {
    const response = await api.post('/product-type', data);
    return response.data;
}

export const updateType = async (id: number, data: { name: string }) => {
    const response = await api.put(`/product-type/${id}`, data);
    return response.data;
}

export const deleteType = async (id: number) => {
    const response = await api.delete(`/product-type/${id}`);
    return response.data;
}
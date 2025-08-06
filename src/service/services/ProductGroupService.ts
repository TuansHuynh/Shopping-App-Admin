import api from "../api/api";

export const getAllGroup = async () => {
    const response = await api.get('/product-group');
    return response.data;
}

export const getGroupById = async (id: number) => {
    const response = await api.get(`/product-group/${id}`);
    return response.data;
}

export const createGroup = async (data: { name: string, typeId: number }) => {
    const response = await api.post('/product-group', data);
    return response.data;
}

export const updateGroup = async (id: number, data: { name: string, typeId: number }) => {
    const response = await api.put(`/product-group/${id}`, data);
    return response.data;
}

export const deleteGroup = async (id: number) => {
    const response = await api.delete(`/product-group/${id}`);
    return response.data;
}
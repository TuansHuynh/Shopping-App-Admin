import api from "../api/api";

export const getAllCategory = async () => {
    const response = await api.get('/category');
    return response.data;
}

export const getCategoryById = async (id: number) => {
    const response = await api.get(`/category/${id}`);
    return response.data;
}

export const createCategory = async (data: { name: string, groupId: number }) => {
    const response = await api.post('/category', data);
    return response.data;
}

export const updateCategory = async (id: number, data: { name: string, groupId: number }) => {
    const response = await api.put(`/category/${id}`, data);
    return response.data;
}

export const deleteCategory = async (id: number) => {
    const response = await api.delete(`/category/${id}`);
    return response.data;
}
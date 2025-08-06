import api from "../api/api";

export const getAllProduct = async () => {
    const response = await api.get('/product');
    return response.data;
}

export const getProductById = async (id: number) => {
    const response = await api.get(`/product/${id}`);
    return response.data;
}

export const createProduct = async (data: FormData) => {
    const response = await api.post('/product', data);
    return response.data;
}

export const updateProduct = async (id: number, data: FormData) => {
    const response = await api.put(`/product/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
}

export const deleteProduct = async (id: number) => {
    const response = await api.delete(`/product/${id}`);
    return response.data;
}
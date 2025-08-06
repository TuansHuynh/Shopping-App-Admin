import api from "../api/api";

export const getAllUsers = async () => {
    const response = await api.get('/user');
    return response.data;
}

export const getUserById = async (id: number) => {
    const response = await api.get(`/user/${id}`);
    return response.data;
}

export const createUser = async (data: {
    address: string,
    birthdate: string,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    phone_number: string,
    user_name: string
}) => {
    const response = await api.post('/user', data);
    return response.data;
}

export const updateUser = async (id: number, data: Partial<{
    address: string,
    birthdate: string,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    phone_number: string,
    user_name: string
}>) => {
    const response = await api.put(`/user/${id}`, data);
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await api.delete(`/user/${id}`);
    return response.data;
}
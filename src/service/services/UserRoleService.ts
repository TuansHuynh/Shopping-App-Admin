import api from "../api/api";

export const getAllUserRoles = async () => {
    const response = await api.get('/user-role');
    return response.data;
}

export const getUserRoleById = async (id: number) => {
    const response = await api.get(`/user-role/${id}`);
    return response.data;
}

export const createUserRole = async (data: {
    role_name: string,
    user_id: number
}) => {
    const response = await api.post('/user-role', data);
    return response.data;
}

export const updateUserRole = async (id: number, data: Partial<{
    role_name: string,
    user_id: number
}>) => {
    const response = await api.put(`/user-role/${id}`, data);
    return response.data;
}

export const deleteUserRole = async (id: number) => {
    const response = await api.delete(`/user-role/${id}`);
    return response.data;
}
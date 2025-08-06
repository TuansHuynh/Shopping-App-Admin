import api from "../api/api";

export const getAllTickets = async () => {
    const response = await api.get('/ticket');
    return response.data;
}

export const getTicketById = async (id: number) => {
    const response = await api.get(`/ticket/${id}`);
    return response.data;
}

export const createTicket = async (data: {
    code: string,
    discount_value: number,
    expired_at: string,
    is_active: boolean,
    is_percentage: boolean,
    user_id: number
}) => {
    const response = await api.post('/ticket', data);
    return response.data;
}

export const updateTicket = async (id: number, data: Partial<{
    code: string,
    discount_value: number,
    expired_at: string,
    is_active: boolean,
    is_percentage: boolean,
    user_id: number
}>) => {
    const response = await api.put(`/ticket/${id}`, data);
    return response.data;
}

export const deleteTicket = async (id: number) => {
    const response = await api.delete(`/ticket/${id}`);
    return response.data;
}
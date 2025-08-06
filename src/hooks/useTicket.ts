import { useEffect, useState, useCallback } from "react"
import type { TicketResponse } from "../types/Ticket"
import {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
} from "../service/services/TicketService"

export const useGetAllTickets = () => {
    const [tickets, setTickets] = useState<TicketResponse[]>([])
    useEffect(() => {
        getAllTickets().then(setTickets).catch(console.error)
    }, [])
    return tickets
}

export const useGetTicketById = (id: number) => {
    const [ticket, setTicket] = useState<TicketResponse | null>(null)
    useEffect(() => {
        if (id) getTicketById(id).then(setTicket).catch(console.error)
    }, [id])
    return ticket
}

export const useCreateTicket = () => {
    const [created, setCreated] = useState<TicketResponse | null>(null)
    const create = useCallback(async (data: Omit<TicketResponse, "id">) => {
        const res = await createTicket(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

export const useUpdateTicket = () => {
    const [updated, setUpdated] = useState<TicketResponse | null>(null)
    const update = useCallback(async (id: number, data: Partial<TicketResponse>) => {
        const res = await updateTicket(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

export const useDeleteTicket = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteTicket(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}
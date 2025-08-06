import { useEffect, useState, useCallback } from "react"
import type { UserResponse } from "../types/User"
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../service/services/UserService"

export const useGetAllUsers = () => {
    const [users, setUsers] = useState<UserResponse[]>([])
    useEffect(() => {
        getAllUsers().then(setUsers).catch(console.error)
    }, [])
    return users
}

export const useGetUserById = (id: number) => {
    const [user, setUser] = useState<UserResponse | null>(null)
    useEffect(() => {
        if (id) getUserById(id).then(setUser).catch(console.error)
    }, [id])
    return user
}

export const useCreateUser = () => {
    const [created, setCreated] = useState<UserResponse | null>(null)
    const create = useCallback(async (data: Omit<UserResponse, "id">) => {
        const res = await createUser(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

export const useUpdateUser = () => {
    const [updated, setUpdated] = useState<UserResponse | null>(null)
    const update = useCallback(async (id: number, data: Partial<UserResponse>) => {
        const res = await updateUser(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

export const useDeleteUser = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteUser(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}
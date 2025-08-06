import { useEffect, useState, useCallback } from "react"
import type { UserRoleResponse } from "../types/UserRole"
import {
    getAllUserRoles,
    getUserRoleById,
    createUserRole,
    updateUserRole,
    deleteUserRole
} from "../service/services/UserRoleService"

export const useGetAllUserRoles = () => {
    const [roles, setRoles] = useState<UserRoleResponse[]>([])
    useEffect(() => {
        getAllUserRoles().then(setRoles).catch(console.error)
    }, [])
    return roles
}

export const useGetUserRoleById = (id: number) => {
    const [role, setRole] = useState<UserRoleResponse | null>(null)
    useEffect(() => {
        if (id) getUserRoleById(id).then(setRole).catch(console.error)
    }, [id])
    return role
}

export const useCreateUserRole = () => {
    const [created, setCreated] = useState<UserRoleResponse | null>(null)
    const create = useCallback(async (data: Omit<UserRoleResponse, "id">) => {
        const res = await createUserRole(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

export const useUpdateUserRole = () => {
    const [updated, setUpdated] = useState<UserRoleResponse | null>(null)
    const update = useCallback(async (id: number, data: Partial<UserRoleResponse>) => {
        const res = await updateUserRole(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

export const useDeleteUserRole = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteUserRole(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}
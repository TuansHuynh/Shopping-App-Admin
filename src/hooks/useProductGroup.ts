import { useEffect, useState, useCallback } from "react"
import type { ProductGroupResponse } from "../types/ProductGroup";
import {
    getAllGroup,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup
} from "../service/services/ProductGroupService";

// Lấy tất cả group
export const useGetAllProductGroups = () => {
    const [groups, setGroups] = useState<ProductGroupResponse[]>([])
    useEffect(() => {
        getAllGroup().then(setGroups).catch(console.error)
    }, [])
    return groups
}

// Lấy group theo id
export const useGetProductGroupById = (id: number) => {
    const [group, setGroup] = useState<ProductGroupResponse | null>(null)
    useEffect(() => {
        if (id) getGroupById(id).then(setGroup).catch(console.error)
    }, [id])
    return group
}

// Thêm group
export const useCreateProductGroup = () => {
    const [created, setCreated] = useState<ProductGroupResponse | null>(null)
    const create = useCallback(async (data: { name: string, typeId: number }) => {
        const res = await createGroup(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

// Cập nhật group
export const useUpdateProductGroup = () => {
    const [updated, setUpdated] = useState<ProductGroupResponse | null>(null)
    const update = useCallback(async (id: number, data: { name: string, typeId: number }) => {
        const res = await updateGroup(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

// Xóa group
export const useDeleteProductGroup = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteGroup(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}

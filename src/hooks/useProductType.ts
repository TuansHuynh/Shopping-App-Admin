import { useEffect, useState } from "react"
import type { ProductTypeResponse } from "../types/ProductType"
import {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
} from "../service/services/ProductTypeService"

// Lấy tất cả
export const useGetAllProductTypes = () => {
    const [types, setTypes] = useState<ProductTypeResponse[]>([])
    useEffect(() => {
        getAllTypes().then(setTypes).catch(console.error)
    }, [])
    return types
}

// Lấy theo id
export const useGetProductTypeById = (id: number) => {
    const [type, setType] = useState<ProductTypeResponse | null>(null)
    useEffect(() => {
        if (id) getTypeById(id).then(setType).catch(console.error)
    }, [id])
    return type
}

// Thêm mới
export const useCreateProductType = () => {
    const [created, setCreated] = useState<ProductTypeResponse | null>(null)
    const create = async (data: Omit<ProductTypeResponse, "id" | "groups">) => {
        const res = await createType(data)
        setCreated(res)
        return res
    }
    return { create, created }
}

// Cập nhật
export const useUpdateProductType = () => {
    const [updated, setUpdated] = useState<ProductTypeResponse | null>(null)
    const update = async (id: number, data: { name: string }) => {
        const res = await updateType(id, data)
        setUpdated(res)
        return res
    }
    return { update, updated }
}

// Xóa
export const useDeleteProductType = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = async (id: number) => {
        await deleteType(id)
        setDeleted(true)
    }
    return { remove, deleted }
}


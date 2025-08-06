import { useEffect, useState, useCallback } from "react"
import type { CategoryResponse } from "../types/Category";
import {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../service/services/CategoryService";

// Lấy tất cả category
export const useGetAllCategories = () => {
    const [categories, setCategories] = useState<CategoryResponse[]>([])
    useEffect(() => {
        getAllCategory().then(setCategories).catch(console.error)
    }, [])
    return categories
}

// Lấy category theo id
export const useGetCategoryById = (id: number) => {
    const [category, setCategory] = useState<CategoryResponse | null>(null)
    useEffect(() => {
        if (id) getCategoryById(id).then(setCategory).catch(console.error)
    }, [id])
    return category
}

// Thêm category
export const useCreateCategory = () => {
    const [created, setCreated] = useState<CategoryResponse | null>(null)
    const create = useCallback(async (data: { name: string, groupId: number }) => {
        const res = await createCategory(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

// Cập nhật category
export const useUpdateCategory = () => {
    const [updated, setUpdated] = useState<CategoryResponse | null>(null)
    const update = useCallback(async (id: number, data: { name: string, groupId: number }) => {
        const res = await updateCategory(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

// Xóa category
export const useDeleteCategory = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteCategory(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}

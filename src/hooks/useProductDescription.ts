import { useEffect, useState, useCallback } from "react"
import type { ProductDescriptionResponse } from "../types/ProductDescription"
import {
    getAllDescription,
    getDescriptionById,
    createDescription,
    updateDescription,
    deleteDescription
} from "../service/services/ProductDescriptionService"

export const useGetAllDescriptions = () => {
    const [descriptions, setDescriptions] = useState<ProductDescriptionResponse[]>([])
    useEffect(() => {
        getAllDescription().then(setDescriptions).catch(console.error)
    }, [])
    return descriptions
}

export const useGetDescriptionById = (id: number) => {
    const [description, setDescription] = useState<ProductDescriptionResponse | null>(null)
    useEffect(() => {
        if (id) getDescriptionById(id).then(setDescription).catch(console.error)
    }, [id])
    return description
}

export const useCreateDescription = () => {
    const [created, setCreated] = useState<ProductDescriptionResponse | null>(null)
    const create = useCallback(async (data: { content: string; productId: number }) => {
        const res = await createDescription(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

export const useUpdateDescription = () => {
    const [updated, setUpdated] = useState<ProductDescriptionResponse | null>(null)
    const update = useCallback(async (id: number, data: { content: string; productId: number }) => {
        const res = await updateDescription(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

export const useDeleteDescription = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteDescription(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}
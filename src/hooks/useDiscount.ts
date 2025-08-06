import { useEffect, useState, useCallback } from "react"
import type { DiscountResponse } from "../types/Discount"
import {
    getAllDiscounts,
    getDiscountById,
    createDiscount,
    updateDiscount,
    deleteDiscount
} from "../service/services/DiscountService"

export const useGetAllDiscounts = () => {
    const [discounts, setDiscounts] = useState<DiscountResponse[]>([])
    useEffect(() => {
        getAllDiscounts().then(setDiscounts).catch(console.error)
    }, [])
    return discounts
}

export const useGetDiscountById = (id: number) => {
    const [discount, setDiscount] = useState<DiscountResponse | null>(null)
    useEffect(() => {
        if (id) getDiscountById(id).then(setDiscount).catch(console.error)
    }, [id])
    return discount
}

export const useCreateDiscount = () => {
    const [created, setCreated] = useState<DiscountResponse | null>(null)
    const create = useCallback(async (data: Omit<DiscountResponse, "id">) => {
        const res = await createDiscount(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

export const useUpdateDiscount = () => {
    const [updated, setUpdated] = useState<DiscountResponse | null>(null)
    const update = useCallback(async (id: number, data: Partial<DiscountResponse>) => {
        const res = await updateDiscount(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

export const useDeleteDiscount = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteDiscount(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}
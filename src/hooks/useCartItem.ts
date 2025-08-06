import { useEffect, useState, useCallback } from "react"
import type { CartItemResponse } from "../types/CartItem"
import {
    getAllCartItems,
    getCartItemById,
    createCartItem,
    updateCartItem,
    deleteCartItem
} from "../service/services/CartItemService"

export const useGetAllCartItems = () => {
    const [items, setItems] = useState<CartItemResponse[]>([])
    useEffect(() => {
        getAllCartItems().then(setItems).catch(console.error)
    }, [])
    return items
}

export const useGetCartItemById = (id: number) => {
    const [item, setItem] = useState<CartItemResponse | null>(null)
    useEffect(() => {
        if (id) getCartItemById(id).then(setItem).catch(console.error)
    }, [id])
    return item
}

export const useCreateCartItem = () => {
    const [created, setCreated] = useState<CartItemResponse | null>(null)
    const create = useCallback(async (data: Omit<CartItemResponse, "id">) => {
        const res = await createCartItem(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

export const useUpdateCartItem = () => {
    const [updated, setUpdated] = useState<CartItemResponse | null>(null)
    const update = useCallback(async (id: number, data: Partial<CartItemResponse>) => {
        const res = await updateCartItem(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

export const useDeleteCartItem = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteCartItem(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}
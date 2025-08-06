import { useEffect, useState, useCallback } from "react"
import type { CartResponse } from "../types/Cart"
import {
    getAllCarts,
    getCartById,
    createCart,
    updateCart,
    deleteCart
} from "../service/services/CartService"

export const useGetAllCarts = () => {
    const [carts, setCarts] = useState<CartResponse[]>([])
    useEffect(() => {
        getAllCarts().then(setCarts).catch(console.error)
    }, [])
    return carts
}

export const useGetCartById = (id: number) => {
    const [cart, setCart] = useState<CartResponse | null>(null)
    useEffect(() => {
        if (id) getCartById(id).then(setCart).catch(console.error)
    }, [id])
    return cart
}

export const useCreateCart = () => {
    const [created, setCreated] = useState<CartResponse | null>(null)
    const create = useCallback(async (data: Omit<CartResponse, "id">) => {
        const res = await createCart(data)
        setCreated(res)
        return res
    }, [])
    return { create, created }
}

export const useUpdateCart = () => {
    const [updated, setUpdated] = useState<CartResponse | null>(null)
    const update = useCallback(async (id: number, data: Partial<CartResponse>) => {
        const res = await updateCart(id, data)
        setUpdated(res)
        return res
    }, [])
    return { update, updated }
}

export const useDeleteCart = () => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteCart(id)
        setDeleted(true)
    }, [])
    return { remove, deleted }
}
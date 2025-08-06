import { useEffect, useState, useCallback } from "react"
import type { ProductResponse } from "../types/Product";
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from "../service/services/ProductService";

// Lấy tất cả sản phẩm
export const useGetProductAll = (reload?: boolean) => {
    const [products, setProducts] = useState<ProductResponse[]>([]);

    useEffect(() => {
        // fetch lại dữ liệu mỗi khi reload thay đổi
        getAllProduct().then(setProducts);
    }, [reload]);

    return products;
}

// Lấy sản phẩm theo id
export const useGetProductById = (id: number) => {
    const [product, setProduct] = useState<ProductResponse | null>(null);

    useEffect(() => {
        if (id) {
            getProductById(id)
                .then(setProduct)
                .catch((error) => console.error('Error fetching product by ID:', error));
        }
    }, [id]);

    return product;
};

// Cập nhật sản phẩm (trả về hàm để gọi khi cần)
export const useUpdateProduct = () => {
    const [updatedProduct, setUpdatedProduct] = useState<ProductResponse | null>(null)
    const update = useCallback(async (id: number, productData: FormData) => {
        const data = await updateProduct(id, productData)
        setUpdatedProduct(data)
        return data
    }, [])
    return { update, updatedProduct }
}

// Thêm sản phẩm mới
export const useCreateProduct = () => {
    const [createdProduct, setCreatedProduct] = useState<ProductResponse | null>(null)
    const [error, setError] = useState<string | null>(null)
    const create = useCallback(async (productData: FormData) => {
        try {
            const data = await createProduct(productData)
            setCreatedProduct(data)
            setError(null)
            return data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err?.message || "Error creating product")
            throw err
        }
    }, [])
    return { create, createdProduct, error }
}

// Xóa sản phẩm (trả về hàm để gọi khi cần)
export const useDeleteProduct = () => {
    const [isDeleted, setIsDeleted] = useState<boolean>(false)
    const remove = useCallback(async (id: number) => {
        await deleteProduct(id)
        setIsDeleted(true)
    }, [])
    return { remove, isDeleted }
}
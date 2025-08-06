import { useEffect, useState } from 'react'
import './Sass/category.scss'
import { formatCurrency } from '../utils/format'
import { useGetAllProductGroups } from '../hooks/useProductGroup'
import { useGetAllProductTypes } from '../hooks/useProductType'
import { useGetAllCategories } from '../hooks/useCategory'
import { useGetProductAll } from '../hooks/useProduct'

export default function Inventory() {
    const productGroups = useGetAllProductGroups()
    const productTypes = useGetAllProductTypes()
    const categories = useGetAllCategories()
    const allProducts = useGetProductAll()

    const [selectedTypeId, setSelectedTypeId] = useState<number | null>(null)
    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null)
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)

    // Filter product theo type đã chọn
    const filteredGroups = productGroups.filter(
        group => group.typeId === selectedTypeId
    )

    // Filter product theo group đã chọn
    const filteredCategories = categories
        .filter(cat => cat.groupId === selectedGroupId)
        .map(cat => ({
            ...cat,
            products: cat.products.filter(p => p.typeId === selectedTypeId)
        }))
        .filter(cat => cat.products.length > 0)

    // Filter product theo category đã chọn
    const filteredProducts = allProducts.filter(
        p => p.categoryId === selectedCategoryId
    )

    useEffect(() => {
        // Nếu đã có types mà chưa có selection, tự set type đầu tiên
        if (productTypes.length > 0 && selectedTypeId === null) {
            setSelectedTypeId(productTypes[0].id)
        }
    }, [productTypes, selectedTypeId])

    // Khi chọn Type, tự động chọn Group đầu tiên (nếu có)
    useEffect(() => {
        if (selectedTypeId) {
            const groups = productGroups.filter(g => g.typeId === selectedTypeId)
            if (groups.length > 0) {
                setSelectedGroupId(groups[0].id)
                setSelectedCategoryId(null)
            }
        }
    }, [selectedTypeId, productGroups])

    // Khi chọn Group, tự động chọn Category đầu tiên (nếu có)
    useEffect(() => {
        if (selectedGroupId) {
            const cats = categories
                .filter(c => c.groupId === selectedGroupId)
                .map(c => ({
                    ...c,
                    products: c.products.filter(p => p.typeId === selectedTypeId)
                }))
                .filter(c => c.products.length > 0)
            if (cats.length > 0) {
                setSelectedCategoryId(cats[0].id)
            }
        }
    }, [selectedGroupId, categories, selectedTypeId])

    return (
        <div className="grid-layout">
            {/* TYPE */}
            <div className="box box-type">
                <div className="header">
                    Product Types
                    <button
                        className="btn-delete"
                        style={{ float: 'right' }}
                        onClick={() => alert('Delete Type')}
                        type="button"
                    >
                        + Delete
                    </button>
                    <button
                        className="btn-add"
                        style={{ float: 'right' }}
                        onClick={() => alert('Add Type')}
                        type="button"
                    >
                        + Add
                    </button>
                </div>
                <div className="scroll-content">
                    {productTypes.map(type => (
                        <div
                            key={type.id}
                            className={`item ${type.id === selectedTypeId ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedTypeId(type.id)
                                setSelectedGroupId(null)
                                setSelectedCategoryId(null)
                            }}
                        >
                            {type.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* GROUP */}
            <div className="box box-group">
                <div className="header">
                    Product Groups
                    <button
                        className="btn-delete"
                        style={{ float: 'right' }}
                        onClick={() => alert('Delete Group')}
                        type="button"
                    >
                        + Delete
                    </button>
                    <button
                        className="btn-add"
                        style={{ float: 'right' }}
                        onClick={() => alert('Add Group')}
                        type="button"
                    >
                        + Add
                    </button>
                </div>
                <div className="scroll-content">
                    {selectedTypeId ? (
                        filteredGroups.map(group => (
                            <div
                                key={group.id}
                                className={`item ${group.id === selectedGroupId ? 'active' : ''}`}
                                onClick={() => {
                                    setSelectedGroupId(group.id)
                                    setSelectedCategoryId(null)
                                }}
                            >
                                {group.name}
                            </div>
                        ))
                    ) : (
                        <p className="empty-msg">Select a product type</p>
                    )}
                </div>
            </div>

            {/* CATEGORY */}
            <div className="box box-category">
                <div className="header">
                    Categories
                    <button
                        className="btn-delete"
                        style={{ float: 'right' }}
                        onClick={() => alert('Delete Category')}
                        type="button"
                    >
                        - Delete
                    </button>
                    <button
                        className="btn-add"
                        style={{ float: 'right' }}
                        onClick={() => alert('Add Category')}
                        type="button"
                    >
                        + Add
                    </button>
                </div>
                <div className="scroll-content">
                    {selectedGroupId ? (
                        filteredCategories.length > 0 ? (
                            filteredCategories.map(category => (
                                <div
                                    key={category.id}
                                    className={`item ${category.id === selectedCategoryId ? 'active' : ''}`}
                                    onClick={() => setSelectedCategoryId(category.id)}
                                >
                                    {category.name}
                                </div>
                            ))
                        ) : (
                            <p className="empty-msg">Không có category</p>
                        )
                    ) : (
                        <p className="empty-msg">Select a product group</p>
                    )}
                </div>
            </div>

            {/* PRODUCT */}
            <div className="box box-info">
                <div className="header">Products</div>
                <div className="scroll-content">
                    {selectedCategoryId ? (
                        filteredProducts.length > 0 ? (
                            <>
                                <div className="info-item info-header">
                                    <span>ID</span>
                                    <span>Name</span>
                                    <span>Type</span>
                                    <span>Group</span>
                                    <span>Price</span>
                                    <span>Stock</span>
                                    <span>Status</span>
                                </div>

                                {filteredProducts.map(product => {
                                    const type = productTypes.find(t => t.id === product.typeId)
                                    const group = productGroups.find(g =>
                                        g.categories.some(t => t.id === type?.id)
                                    )

                                    let status = 'Available'
                                    if (product.quantity === 0) status = 'Out of Stock'
                                    else if (product.quantity < 10) status = 'Low Stock'

                                    return (
                                        <div
                                            key={product.id}
                                            className={`info-item ${status === 'Out of Stock' ? 'out-of-stock' : ''}`}
                                        >
                                            <span>{product.id}</span>
                                            <span>{product.name}</span>
                                            <span>{type?.name}</span>
                                            <span>{group?.name}</span>
                                            <span>{formatCurrency(product.finalPrice, 'VND')}</span>
                                            <span>{product.quantity}</span>
                                            <span>
                                                <span className={
                                                    status === 'Available'
                                                        ? 'status-available'
                                                        : status === 'Low Stock'
                                                            ? 'status-low'
                                                            : 'status-out'
                                                }>
                                                    {status}
                                                </span>
                                            </span>
                                        </div>
                                    )
                                })}
                            </>
                        ) : (
                            <p className="empty-msg">Chưa có sản phẩm</p>
                        )
                    ) : (
                        <p className="empty-msg">Select a category</p>
                    )}
                </div>
            </div>
        </div>
    )
}


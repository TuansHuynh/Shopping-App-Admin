import { useRef, useState } from 'react'
import '../style/import.scss'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useGetAllCategories } from '../../hooks/useCategory'
import { useGetAllDiscounts } from '../../hooks/useDiscount'
import { useGetAllProductTypes } from '../../hooks/useProductType'
import { useGetAllProductGroups } from '../../hooks/useProductGroup'
import { useCreateProduct } from '../../hooks/useProduct'

type ImportProps = {
    onClose: () => void,
    onAdded?: (productName: string) => void // sửa lại kiểu này
}

export default function Import({ onClose, onAdded }: ImportProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, onClose)

    const categories = useGetAllCategories()
    const discounts = useGetAllDiscounts()
    const types = useGetAllProductTypes()
    const groups = useGetAllProductGroups()
    const { create, error } = useCreateProduct()

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [discountId, setDiscountId] = useState('')
    const [quantity, setQuantity] = useState('')
    const [groupId, setGroupId] = useState('')
    const [typeId, setTypeId] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImage(file)
            const reader = new FileReader()
            reader.onload = () => setPreview(reader.result as string)
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!productName || !price || !categoryId || !quantity || !groupId || !typeId || !image) {
            alert('Please fill all required fields!')
            return
        }
        setIsSubmitting(true)
        const formData = new FormData()
        formData.append('name', productName)
        formData.append('price', price)
        formData.append('categoryId', categoryId)
        formData.append('discountId', discountId)
        formData.append('quantity', quantity)
        formData.append('groupId', groupId)
        formData.append('typeId', typeId)
        formData.append('description', description)
        if (image) {
            formData.append('imageFile', image)
        }
        try {
            const result = await create(formData)
            alert('Product added successfully!')
            if (onAdded) onAdded(result?.name || productName)
            else onClose()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            alert(error || "Error adding product")
        }
        setIsSubmitting(false)
    }

    return (
        <div className="import-overlay">
            <div className="import-modal" ref={modalRef}>
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2 className="form-title">Add New Product</h2>

                <form className="import-form" onSubmit={handleSubmit}>
                    <div className="import-form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            value={productName}
                            onChange={e => setProductName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="import-form-group">
                        <label>Image Upload</label>
                        <div className="image-upload">
                            <label htmlFor="product-image" className="image-upload-label">
                                {preview
                                    ? <img src={preview} alt="Preview" style={{ maxWidth: 100, marginTop: 8 }} />
                                    : <span>Click to choose image</span>
                                }
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="product-image"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="import-form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            placeholder="Enter product price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            required
                            min="0"
                        />
                    </div>
                    <div className="import-form-group">
                        <label>Quantity</label>
                        <input
                            type="number"
                            placeholder="Enter quantity"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            required
                            min="0"
                        />
                    </div>
                    <div className="import-form-group">
                        <label>Category</label>
                        <select
                            value={categoryId}
                            onChange={e => setCategoryId(e.target.value)}
                            required
                        >
                            <option value="">Select category</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="import-form-group">
                        <label>Discount</label>
                        <select
                            value={discountId}
                            onChange={e => setDiscountId(e.target.value)}
                        >
                            <option value="">No discount</option>
                            {discounts.map(dis => (
                                <option key={dis.id} value={dis.id}>{dis.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="import-form-group">
                        <label>Group</label>
                        <select
                            value={groupId}
                            onChange={e => setGroupId(e.target.value)}
                            required
                        >
                            <option value="">Select group</option>
                            {groups.map(gr => (
                                <option key={gr.id} value={gr.id}>{gr.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="import-form-group">
                        <label>Type</label>
                        <select
                            value={typeId}
                            onChange={e => setTypeId(e.target.value)}
                            required
                        >
                            <option value="">Select type</option>
                            {types.map(tp => (
                                <option key={tp.id} value={tp.id}>{tp.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="import-form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            placeholder="Short description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-actions">
                        <button
                            type="submit"
                            className="btn btn-add"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Adding..." : "Add Product"}
                        </button>
                        <button
                            type="button"
                            className="btn btn-cancel"
                            onClick={() => {
                                setProductName('')
                                setPrice('')
                                setCategoryId('')
                                setDiscountId('')
                                setQuantity('')
                                setGroupId('')
                                setTypeId('')
                                setDescription('')
                                setImage(null)
                                setPreview(null)
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

import { useRef, useState } from 'react'
import '../style/edit.scss'
import { useClickOutside } from '../../hooks/useClickOutside'
import type { ProductResponse } from '../../types/Product'

type EditProps = {
    onClose: () => void
    product: ProductResponse
}

export default function Edit({ onClose, product }: EditProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, onClose)

    const [previewImage, setPreviewImage] = useState<string>(product.image)
    const [selectedImage, setSelectedImage] = useState<File | null>(null)

    const [productName, setProductName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [quantity, setQuantity] = useState(product.quantity)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(file)
            setSelectedImage(file)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("id", product.id.toString())
        formData.append("name", productName)
        formData.append("price", price.toString())
        formData.append("quantity", quantity.toString())
        // formData.append("description", description)

        if (selectedImage) {
            formData.append("image", selectedImage)
        }

        // Các trường thêm nếu có
        if (product.discountId) formData.append("discountId", product.discountId.toString())
        if (product.categoryId) formData.append("categoryId", product.categoryId.toString())
        if (product.groupId) formData.append("groupId", product.groupId.toString())
        if (product.typeId) formData.append("typeId", product.typeId.toString())

        console.log("FormData gửi lên:")
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1])
        }

        onClose()
    }

    return (
        <div className="edit-overlay">
            <div className="edit-modal" ref={modalRef}>
                <button className="close-btn" onClick={onClose}>✖</button>

                <form className="form-grid" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={e => setProductName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Product Image</label>
                        <div className="image-preview-container">
                            <img
                                src={
                                    selectedImage
                                        ? previewImage
                                        : `http://localhost:8080/api/product/image/${product.image}`
                                }
                                alt="Preview"
                                className="image-preview"
                            />
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={e => setPrice(Number(e.target.value))}
                        />
                    </div>

                    <div className="form-group">
                        <label>Quantity</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={e => setQuantity(Number(e.target.value))}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <ul style={{ paddingLeft: '20px' }}>
                            {Array.isArray(product.description) &&
                                product.description.map((line, index) => (
                                    <li key={index}>{line}</li>
                                ))}
                        </ul>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-save">Save Changes</button>
                        <button type="button" className="btn btn-cancel" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

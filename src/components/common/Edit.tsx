import { useRef, useState } from 'react'
import '../style/edit.scss'
import { useClickOutside } from '../../hooks/useClickOutside'

type ProductType = {
    id: number
    name: string
    image: string
    price: number
    priceDiscount: number
    discount: number
    quantity: number
    rate: number
}

type EditProps = {
    onClose: () => void
    product: ProductType
}

export default function Edit({ onClose, product }: EditProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, onClose)

    const [previewImage, setPreviewImage] = useState<string>(product.image)
    const [productName, setProductName] = useState<string>(product.name)
    const [price, setPrice] = useState<number>(product.price)
    const [description, setDescription] = useState<string>("")

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setPreviewImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="edit-overlay">
            <div className="edit-modal" ref={modalRef}>
                <button className="close-btn" onClick={onClose}>✖</button>

                <form className="form-grid">
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
                            <img src={previewImage} alt="Preview" className="image-preview" />
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
                        <label>Category</label>
                        <select defaultValue="phone">
                            <option value="">Select category</option>
                            <option value="phone">Phone</option>
                            <option value="laptop">Laptop</option>
                            <option value="accessory">Accessory</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
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

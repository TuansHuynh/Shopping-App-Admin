import { useRef } from 'react'
import '../style/import.scss'
import { useClickOutside } from '../../hooks/useClickOutside'

type ImportProps = {
    onClose: () => void
}

export default function Import({ onClose }: ImportProps) {

    const modalRef = useRef<HTMLDivElement>(null)
    useClickOutside(modalRef, onClose)

    return (
        <div className="import-overlay">
            <div className="import-modal" ref={modalRef}>
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2 className="form-title">Add New Product</h2>

                <form className="form-grid">
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" placeholder="Enter product name" />
                    </div>

                    <div className="form-group">
                        <label>Image Upload</label>
                        <div className="image-upload">
                            <input type="file" accept="image/*" id="product-image" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" placeholder="Enter product price" />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select>
                            <option value="">Select category</option>
                            <option value="phone">Phone</option>
                            <option value="laptop">Laptop</option>
                            <option value="accessory">Accessory</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" placeholder="Short description" />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-add">Add Product</button>
                        <button type="reset" className="btn btn-cancel">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

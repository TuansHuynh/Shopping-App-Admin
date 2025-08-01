import '../style/productlist.scss'
import { Icons } from './icons';
import { useState } from 'react'
import Edit from './Edit' // Đảm bảo path đúng

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

export default function ProductList() {
    const [product] = useState<ProductType[]>([
        { id: 1, name: 'iPhone 14', image: '/image/Iphone 14.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.1 },
        { id: 2, name: 'Asus ROG Strix Scar 18', image: '/image/Asus ROG Strix Scar 18.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.6 },
        { id: 1, name: 'iPhone 14', image: '/image/Iphone 14.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.1 },
        { id: 2, name: 'Asus ROG Strix Scar 18', image: '/image/Asus ROG Strix Scar 18.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.6 },
        { id: 1, name: 'iPhone 14', image: '/image/Iphone 14.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.1 },
        { id: 2, name: 'Asus ROG Strix Scar 18', image: '/image/Asus ROG Strix Scar 18.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.6 },
        { id: 1, name: 'iPhone 14', image: '/image/Iphone 14.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.1 },
        { id: 2, name: 'Asus ROG Strix Scar 18', image: '/image/Asus ROG Strix Scar 18.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.6 },
        { id: 1, name: 'iPhone 14', image: '/image/Iphone 14.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.1 },
        { id: 2, name: 'Asus ROG Strix Scar 18', image: '/image/Asus ROG Strix Scar 18.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.6 },
        { id: 1, name: 'iPhone 14', image: '/image/Iphone 14.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.1 },
        { id: 2, name: 'Asus ROG Strix Scar 18', image: '/image/Asus ROG Strix Scar 18.jpg', price: 10000000, priceDiscount: 9000000, discount: 0.1, quantity: 100, rate: 4.6 },
    ])

    const [editingProduct, setEditingProduct] = useState<ProductType | null>(null)

    const handleEditClick = (product: ProductType) => {
        setEditingProduct(product)
    }

    const handleCloseEdit = () => {
        setEditingProduct(null)
    }

    return (
        <div className="product_list">
            <table>
                <thead>
                    <tr className='menu_list menu_taskbar'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Price Discount</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map(item => (
                        <tr key={item.id} className='menu_list list_product_taskbar'>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.image} alt={item.name} width={40} /></td>
                            <td>{item.price}</td>
                            <td>{item.discount}</td>
                            <td>{item.priceDiscount}</td>
                            <td>{item.quantity}</td>
                            <td>{item.rate}</td>
                            <td>
                                <button onClick={() => handleEditClick(item)} style={{ border: 'none', backgroundColor: 'transparent' }}>
                                    <Icons.Edit style={{ border: 'none' }} />
                                </button>
                            </td>
                            <td>
                                <button style={{ border: 'none', backgroundColor: 'transparent' }}>
                                    <Icons.Delete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingProduct && (
                <Edit
                    onClose={handleCloseEdit}
                    product={editingProduct}
                />
            )}
        </div>
    );
}

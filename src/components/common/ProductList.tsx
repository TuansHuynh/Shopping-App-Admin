import '../style/productlist.scss'
import { Icons } from './icons';

export default function ProductList() {

    const product = [
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
    ]

    return (
        <div className="product_list">
            <table>
                <thead>
                    <tr className='menu_list menu_taskbar'>
                        <th>id</th>
                        <th>name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Price Discount</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Edit</th>
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
                            <td className='icon'>
                                <Icons.Edit/>
                                <Icons.Delete/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
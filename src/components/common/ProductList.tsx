import '../style/productlist.scss'
import { Icons } from './icons';
import { useState, useEffect } from 'react'
import Edit from './Edit'
import  { type ProductResponse } from '../../types/Product';
import { useGetProductAll, useDeleteProduct } from '../../hooks/useProduct';


export default function ProductList({ reload }: { reload?: boolean }) {
    const [refresh, setRefresh] = useState(false);

    // Truyền refresh vào hook để trigger reload
    const products = useGetProductAll(refresh);
    const { remove } = useDeleteProduct(); // hook xóa sản phẩm
    const [editingProduct, setEditingProduct] = useState<ProductResponse | null>(null);

    const handleEditClick = (product: ProductResponse) => {
        setEditingProduct(product);
    };

    const handleCloseEdit = () => {
        setEditingProduct(null);
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await remove(id);
            setRefresh(r => !r); // trigger reload
        }
    };

    // Khi prop reload thay đổi (từ cha), cũng trigger reload
    useEffect(() => {
        setRefresh(r => !r);
    }, [reload]);

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
                    {products.map(item => (
                        <tr key={item.id} className='menu_list list_product_taskbar'>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={`http://localhost:8080/api/product/image/${item.image}`} alt={item.name} width={40} /></td>
                            <td>{item.price}</td>
                            <td>{item.discountValue} %</td>
                            <td>{item.finalPrice}</td>
                            <td>{item.quantity}</td>
                            <td>{item.rate ?? 'N/A'}</td>
                            <td>
                                <button
                                    onClick={() => handleEditClick(item)}
                                    style={{ border: 'none', backgroundColor: 'transparent' }}
                                >
                                    <Icons.Edit />
                                </button>
                            </td>
                            <td>
                                <button
                                    style={{ border: 'none', backgroundColor: 'transparent', color: 'red', cursor: 'pointer' }}
                                    onClick={() => handleDelete(item.id)}
                                >
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

import { useState } from 'react'
import { Icons } from '../components/common/icons'
import Import from '../components/common/Import'
import { AddedProductSuccessNotificationProps } from '../components/common/NotificationBox'
import ProductList from '../components/common/ProductList'
import './Sass/product.scss'
// import Edit from '../components/common/Edit'

export default function Product() {

    const name = "Samsung"
    const date = "11:30 PM 08/07/2025"
    const statusAdded = "successfully"

    const [showImport, setImport] = useState(false)
    // const [showEdit, setEdit] = useState(false)

    const handleImport = () => setImport(true)
    // const handleEdit = () => setEdit(true)

    return (
        <div className="product">
            <div className="box box4 import_button" onClick={handleImport} >
                <Icons.Import className='import' />
                <span>Add new product</span>
            </div>

            {/* <div className="box box5 edit_button" onClick={handleEdit}>
                <Icons.Edit className='edit' />
                <span>Edit Product</span>
            </div> */}
            <div className="box box5">
                
            </div>

            {showImport && <Import onClose={() => setImport(false)} />}
            {/* {showEdit && <Edit onClose={() => setEdit(false)} product={{
                id: 0,
                name: '',
                image: '',
                price: 0,
                priceDiscount: 0,
                discount: 0,
                quantity: 0,
                rate: 0
            }} />} */}

            {/* <div className="box box1">Box 1: This is box of Phone</div> */}
            <div className="box box1">
                <ProductList />
            </div>

            {/* <div className="box box2">Box 2: This is message of notification for product added</div> */}
            <div className="box box2">
                <AddedProductSuccessNotificationProps
                    messageAddedProduct={`${name} added ${statusAdded}!`}
                    timestampAddeduserSucces={`${date}`}
                    statusAdded={statusAdded}
                />
            </div>
            {/* <div className="box box3">Box 3: This is notification for product added in the cart of customer</div> */}
        </div>
    )
}
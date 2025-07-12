import { Icons } from '../components/common/icons'
import { AddedProductSuccessNotificationProps } from '../components/common/NotificationBox'
import ProductList from '../components/common/ProductList'
import './Sass/product.scss'

export default function Product() {

    const name = "Samsung"
    const date = "11:30 PM 08/07/2025"
    const statusAdded = "successfully"

    return (
        <div className="product">
            <div className="box box4 import_button">
                <Icons.Import className='import' />
                <span>Add new product</span>
            </div>

            <div className="box box5 edit_button">
                <Icons.Edit className='edit' />
                <span>Edit Product</span>
            </div>

            {/* <div className="box box1">Box 1: This is box of Phone</div> */}
            <div className="box box1">
                <ProductList />
            </div>

            {/* <div className="box box2">Box 2: This is message of notification for product added</div> */}
            <div className="box box2">
                <AddedProductSuccessNotificationProps
                    messageAddedProduct={`${name} added ${statusAdded}!`}
                    timestampAddeduserSucces= {`${date}`}
                    statusAdded= {statusAdded}
                />
            </div>
            {/* <div className="box box3">Box 3: This is notification for product added in the cart of customer</div> */}
        </div>
    )
}
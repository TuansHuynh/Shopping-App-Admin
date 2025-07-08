import { Icons } from '../components/common/icons'
import ProductList from '../components/common/ProductList'
import SuccessNotification from '../components/common/SuccessNotification'
import './Sass/product.scss'

export default function Product() {

    return (
        <div className="product">
            <div className="box box4">
                <Icons.Import className='import' />
                <span>Add new product</span>
            </div>

            <div className="box box5">
                <Icons.Edit className='edit' />
                <span>Edit Product</span>
            </div>

            {/* <div className="box box1">Box 1: This is box of Phone</div> */}
            <div className="box box1">
                <ProductList />
            </div>

            {/* <div className="box box2">Box 2: This is message of notification for product added</div> */}
            <div className="box box2">
                <SuccessNotification
                    message="Product added successfully!"
                    timestamp="11:30 PM 08/07/2025"
                />
            </div>
            <div className="box box3">Box 3: This is notification gor product added in the cart of customer</div>
        </div>
    )
}
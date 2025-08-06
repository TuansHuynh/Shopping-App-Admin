import { useState } from 'react'
import { Icons } from '../components/common/icons'
import Import from '../components/common/Import'
import { AddedProductSuccessNotificationProps } from '../components/common/NotificationBox'
import ProductList from '../components/common/ProductList'
import './Sass/product.scss'

export default function Product() {
    const [showImport, setImport] = useState(false)
    const [reload, setReload] = useState(false)
    const [addedProductName, setAddedProductName] = useState<string | null>(null)
    const [date, setDate] = useState<string>("")
    const [statusAdded, setStatusAdded] = useState<"" | "successfully" | "failed" | "pending" | "warning" | "info">("successfully")

    const handleImport = () => setImport(true)
    const handleAdded = (productName: string) => {
        setReload(r => !r)
        setAddedProductName(productName)
        setDate(new Date().toLocaleString())
        setStatusAdded("successfully")
        setImport(false)
    }

    return (
        <div className="product">
            <div className="box box4 import_button" onClick={handleImport} >
                <Icons.Import className='import' />
                <span>Add new product</span>
            </div>

            <div className="box box5">
                {/* Có thể để thông báo ở đây nếu muốn */}
            </div>

            {showImport && <Import onClose={() => setImport(false)} onAdded={handleAdded} />}

            <div className="box box1">
                <ProductList reload={reload} />
            </div>

            <div className="box box2">
                <AddedProductSuccessNotificationProps
                    messageAddedProduct={addedProductName ? `${addedProductName} added successfully!` : ""}
                    timestampAddeduserSucces={date}
                    statusAdded={statusAdded}
                />
            </div>
        </div>
    )
}
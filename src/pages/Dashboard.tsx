import { Icons } from "../components/common/icons"
import "./Sass/dashboard.scss"

export default function Dasboard() {

    const menuItem = [
        { label: 'Total Orders', icon: <Icons.Shopping_Bag className="icons" />, quantity: 1 },
        { label: 'Total Customers', icon: <Icons.User_Group className="icons" />, quantity: 2 },
        { label: 'Total Products', icon: <Icons.Product className="icons" />, quantity: 2 },
    ]

    return (
        <>
            <div className="dashboard">
                {menuItem.map((item) => (
                    <div className="container">
                        <div className="icon">
                            {item.icon}
                        </div>
                        <div className="content">
                            <div className="title">
                                {item.label}
                            </div>
                            <div className="quantity">
                                {item.quantity}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                
            </div>
        </>
    )
}
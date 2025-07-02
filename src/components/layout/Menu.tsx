import '../style/menu.scss'
import { useLocation, Link } from 'react-router-dom'
import { Icons } from '../common/icons'

export default function Menu() {
    const location = useLocation()

    const menuItems = [
        { to: '/dashboard',     label: 'Dashboard',     icon: <Icons.ChartBar       className="icons" /> },
        { to: '/product',       label: 'Product',       icon: <Icons.Product        className="icons" /> },
        { to: '/category',      label: 'Category',      icon: <Icons.Categories     className="icons" /> },
        { to: '/order',         label: 'Order',         icon: <Icons.Shopping_Bag   className="icons" /> },
        { to: '/ticket',        label: 'Ticket',        icon: <Icons.Feedback       className="icons" /> },
        { to: '/customer',      label: 'Customer',      icon: <Icons.User_Group     className="icons" /> },
        { to: '/sale-report',   label: 'Sale Report',   icon: <Icons.Bell           className="icons" /> },
        { to: '/feedback',      label: 'Feedback',      icon: <Icons.Feedback       className="icons" /> },
    ]

    return (
        <div className="menu">
            {menuItems.map((item, index) => (
                <Link
                    to={item.to}
                    key={index}
                    className={`menu_item ${location.pathname === item.to ? 'active' : ''}`}
                >
                    {item.icon}
                    <div className="menu_item_content">{item.label}</div>
                </Link>
            ))}
        </div>
    )
}

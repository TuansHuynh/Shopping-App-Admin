import "./Sass/dashboard.scss"
import { Icons } from "../components/common/icons"
import ChartBox from '../components/common/ChartBox';
// import { GeneralStatusNotificationProps, InventoryNotificationBoxProps, UserStatusNotificationProps } from "../components/common/NotificationBox";
import { useGetProductAll } from "../hooks/useProduct"
import { useGetAllUsers } from "../hooks/useUser"
import { useGetAllCarts } from "../hooks/useCart"

export default function Dasboard() {
    // const productName = "Samsung S23 Ultra"
    // const userName = "Nguyen Van A"
    // const registered = "registered"

    // Lấy danh sách sản phẩm, user, order
    const products = useGetProductAll()
    const users = useGetAllUsers()
    const orders = useGetAllCarts()

    return (
        <div className="dashboard">
            <div className="box box1 total_table">
                <div className="icon"> <Icons.Shopping_Bag className="icons" /> </div>
                <div className="title">
                    <div className="label"> Total Order </div>
                    <div className="quantity"> {orders.length} </div>
                </div>
            </div>

            <div className="box box2 total_table">
                <div className="icon"> <Icons.User_Group className="icons" /> </div>
                <div className="title">
                    <div className="label"> Total Customer </div>
                    <div className="quantity"> {users.length} </div>
                </div>
            </div>

            <div className="box box3 total_table">
                <div className="icon"> <Icons.Product className="icons" /> </div>
                <div className="title">
                    <div className="label"> Total Product </div>
                    <div className="quantity"> {products.length} </div>
                </div>
            </div>

            <div className="box box4 chartBar">
                <ChartBox />
            </div>

            {/* <div className="box box5 stock_alert">
                <InventoryNotificationBoxProps
                    messageInventoryNotification={`${productName} is currently out of stock!`}
                    statusInventory="out-stock"
                />
                <InventoryNotificationBoxProps
                    messageInventoryNotification={`${productName} is available in stock.`}
                    statusInventory="in-stock"
                />
            </div>

            <div className="box box6 user_register">
                <UserStatusNotificationProps
                    username={`${userName}`}
                    statusUserStatus={`${registered}`}
                    time="2 minutes ago"
                />
                <UserStatusNotificationProps
                    username={`${userName}`}
                    statusUserStatus={`${registered}`}
                    time="2 minutes ago"
                />
            </div>

            <div className="box box7 notification">
                <GeneralStatusNotificationProps
                    messageGeneralStatusNotification="System running smoothly"
                    timestampGeneralStatus="08:30 AM 08/07/2025"
                    type="success"
                />
                <GeneralStatusNotificationProps
                    messageGeneralStatusNotification={`Inventory for item ${productName} is low!`}
                    timestampGeneralStatus="08:45 AM 08/07/2025"
                    type="warning"
                />
            </div> */}
        </div>
    )
}
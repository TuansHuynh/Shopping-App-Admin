import "./Sass/dashboard.scss"
import { Icons } from "../components/common/icons"
import ChartBox from '../components/common/ChartBox';
import NotificationBox from "../components/common/NotificationBox";
import UserRegisterNotification from "../components/common/UserRegisterNotification";
import GeneralNotification from "../components/common/GeneralNotification";

export default function Dasboard() {

    return (
        <div className="dashboard">
            <div className="box box1 total_table">
                <div className="icon"> <Icons.Shopping_Bag className="icons" /> </div>
                <div className="title">
                    <div className="label"> Total Order </div>
                    <div className="quantity"> 1 </div>
                </div>
            </div>

            <div className="box box2 total_table">
                <div className="icon"> <Icons.User_Group className="icons" /> </div>
                <div className="title">
                    <div className="label"> Total Customer </div>
                    <div className="quantity"> 1 </div>
                </div>
            </div>

            <div className="box box3 total_table">
                <div className="icon"> <Icons.Product className="icons" /> </div>
                <div className="title">
                    <div className="label"> Total Product </div>
                    <div className="quantity"> 1 </div>
                </div>
            </div>

            {/* <div className="box box4 chartBar">box4 : This is Chart Bar</div> */}
            <div className="box box4 chartBar">
                <ChartBox />
            </div>

            {/* <div className="box box5 stock_alert">box5: This is Notification when product in-stock or out-stock</div> */}
            <div className="box box5 stock_alert">
                <NotificationBox
                    message="Product is currently out of stock!"
                    status="out-stock"
                />

                <NotificationBox
                    message="Product is available in stock."
                    status="in-stock"
                />
            </div>
            {/* <div className="box box6 user_register">box6: Ths is nostification when user register</div> */}
            <div className="box box6 user_register">
                <UserRegisterNotification
                    username="nguyenvana"
                    time="2 minutes ago"
                />
            </div>
            {/* <div className="box box7 notification">box7: This Is Notification</div> */}
            <div className="box box7 notification">
                <GeneralNotification
                    message="System running smoothly"
                    timestamp="08:30 AM 08/07/2025"
                    type="success"
                />

                <GeneralNotification
                    message="Inventory for item #A123 is low!"
                    timestamp="08:45 AM 08/07/2025"
                    type="warning"
                />

            </div>

        </div>
    )
}
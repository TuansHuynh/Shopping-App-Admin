import { Link } from 'react-router-dom'
import '../style/notification.scss'
import { Icons } from './icons'

export default function Notifications() {
    return (
        <div className="notifications">
            <div className='notification_top'>
                <div>
                    Notification
                </div>
                <div>
                    Mask All As Read
                </div>
            </div>
            <div className='notification_main'>
                <div>
                    <Icons.Bell width={25}/>
                </div>
                <div>
                    <div>
                        Inventory for "Wireless Mouse" is low.
                    </div>
                    <div>
                        07:03:09 1/7/2025
                    </div>
                </div>
            </div>
            <div className='notification_bottom'>
                <Link to='#'>View all notifications</Link>
            </div>
        </div>
    )
}

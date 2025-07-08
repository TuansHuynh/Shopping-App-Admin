import '../style/navbar.scss'
import { Link } from "react-router-dom";
import Logout from '../common/Logout';
import { useRef, useState } from 'react';
import { Icons } from '../common/icons';
import Notifications from '../common/Notifications';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function Navbar() {

    const [showLogout, setShowLogout] = useState(false)
    const logoutRef = useRef<HTMLDivElement>(null)
    useClickOutside(logoutRef, () => setShowLogout(false))

    const [showNotification, setShowNotification] = useState(false)
    const notificationRef = useRef<HTMLDivElement>(null);
    useClickOutside(notificationRef, () => setShowNotification(false));

    const notificationCount = 10;

    const Title = 'Control Panel'

    const isLogin = true;
    const userName = isLogin ? 'TunaSia' : 'Login'

    const onLogout = () => {
        setShowLogout(prev => !prev);
    }

    const onNotification = () => {
        setShowNotification(prev => !prev);
    }

    return (
        <div className="navbar">

            <Link to='/' className='logo'>
                {Title}
            </Link>

            <div className='navbar_menu'>
                <div className='notification_container' ref={notificationRef}>
                    <div className="notification"
                        onClick={onNotification}
                    >
                        <Icons.Bell className="bell" />
                        <span>{notificationCount > 9 ? '9+' : notificationCount}</span>
                    </div>

                    <div className='notification_tab'>
                        {showNotification && <Notifications />}
                    </div>
                </div>

                <div className='search'>
                    <Icons.Search className='search_icon' />
                    |
                    <input type="text" placeholder="Search..." />
                </div>

                <div className='profile_container' ref={logoutRef}>
                    <div className='profile' onClick={onLogout}>
                        <Icons.User className='logo-profile' />
                        <span> {userName} </span>
                    </div>
                    <div className='logout_tab'>
                        {showLogout && <Logout />}
                    </div>
                </div>
            </div>
        </div>
    )
}
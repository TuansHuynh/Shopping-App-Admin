import './layout.scss'
import Footer from '../components/layout/Footer';
import Menu from '../components/layout/Menu';
import Navbar from '../components/layout/Navbar';
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className='layout'>
            <Navbar />

            <div className='main_container'>
                <div className='menu_container'>
                    <Menu />

                    <div>
                        <Footer />
                    </div>
                </div>
                <div className='content_container'>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}
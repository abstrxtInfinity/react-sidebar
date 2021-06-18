import React, { useState } from "react"
import { Link } from 'react-router-dom'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import './Sidebar.css'


function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const toggleSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <Link className="menu-bars" to="#">
                    <MdIcons.MdMenu onClick={toggleSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }


                </ul>
            </nav>
        </>
    );
}

export default Sidebar;

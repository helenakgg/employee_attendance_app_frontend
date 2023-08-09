import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <aside className="menu has-shadow">
            <p className="menu-label">General</p>
            <ul className="menu-list">
                <li>
                <NavLink to={"/"}>Dashboard</NavLink>
                </li>
                {/* <li>
                <NavLink to={"/employee"}>Employees</NavLink>
                </li> */}
            </ul>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
                <li>
                <NavLink to={"/employee"}>Employees</NavLink>
                </li>
            </ul>
            <p className="menu-label">Employee</p>
            <ul className="menu-list">
                <li>
                <NavLink to={"/update-profile"}>Update Profile</NavLink>
                </li>
                <li>
                <NavLink to={"/history"}>Attendance History</NavLink>
                </li>
            </ul>
        </aside>

    </div>
  )
}

export default Sidebar
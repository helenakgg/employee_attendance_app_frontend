import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { logout } from '../store/slices/auth/slices';
import logo from '../assets/logo2.png'

export default function NavbarHeader (){
    // @hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout());
    }
    const { fullname, email } = useSelector(state => {
        return {
            fullname : state.auth?.fullname,
            email : state.auth?.email
        }
    })
    return (
        <Navbar
            fluid
            rounded
            >
            <Navbar.Brand onClick={()=>{navigate("/")}} >
                <img
                alt="Logo"
                className="mr-3 h-6 sm:h-9 cursor-pointer"
                src={logo}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-pointer">
                Attend App
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                inline
                label={
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <span>{fullname[0]?.toUpperCase()}</span>
                        </div>
				    </label>
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">
                    {fullname}
                    </span>
                    <span className="block truncate text-sm font-medium">
                    {email}
                    </span>
                </Dropdown.Header>
                <Dropdown.Item className="cursor-pointer" onClick={handleLogout}>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
        </Navbar>
    )
}

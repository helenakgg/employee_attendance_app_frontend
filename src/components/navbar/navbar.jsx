import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { logout } from '../../store/slices/auth/slices';
import logo from '../../assets/cashierlogo2.png';

export default function NavbarHeader (){
    // @hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout());
    }
    const { username, email, profileImg } = useSelector(state => {
        return {
            username : state.auth?.username,
            email : state.auth?.email,
            profileImg : state.auth?.profileImg,

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
                Cashier App
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                inline
                label={
                    <img
                        className="w-8 h-8 rounded-full"
                        src={profileImg}
                        alt="user photo"
                        />
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">
                    {username}
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

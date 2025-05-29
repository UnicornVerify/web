import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useAppContext } from "../context/AppContext";
import { CgProfile } from "react-icons/cg";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { axios, user, setUser, setShowUserLogin, navigate } = useAppContext();

    const logout = async () => {
        try {
            const { data } = await axios.get('/api/user/logout');
            if (data.success) {
                toast.success(data.message || "Logout successful");
                setUser(null);
                navigate("/");
            }
            else {
                toast.error(data.message || "Logout failed");
            }
        } catch (error) {
            toast.error(error.message || "Logout failed");
        }
    }

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={() => setOpen(false)}>
                <img className="h-10" src={assets.logo} alt="logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 text-nowrap">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about-us">About Us</NavLink>
                <NavLink to="/contact">Contact</NavLink>

                {
                    !user ? (
                        <button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary-green hover:bg-primary-green-dull transition text-white rounded-full">
                            Login
                        </button>
                    ) : (
                        <div className="relative group">
                            <img src={assets.profile_icon} alt="" width={40}/>

                            <div className="hidden group-hover:block absolute top-0 right-0  py-8 z-40">
                                <ul className=" shadow bg-white border border-gray-200  w-30 rounded-md text-sm">
                                    <li onClick={() => navigate("/my-documents")} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">My Documents</li>
                                    <li onClick={() => navigate("/upgrade-plan")} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Upgrade Plan</li>
                                    <li onClick={logout} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="flex items-center gap-6 sm:hidden">
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className=" cursor-pointer">
                    {/* Menu Icon SVG */}
                    <img src={assets.menu_icon} alt="menu" />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-6 px-5 text-sm md:hidden z-50`}>
                    <NavLink to="/" onClick={() => setOpen(false)} >Home</NavLink>
                    <NavLink to="/my-documents" onClick={() => setOpen(false)} >My Documents</NavLink>
                    <NavLink to="/upgrade-plan" onClick={() => setOpen(false)} >Upgrade Plan</NavLink>
                    <NavLink to="/about-us" onClick={() => setOpen(false)} >About Us</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)} >Contact</NavLink>

                    {
                        !user ? (
                            <button onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true)
                            }} className="cursor-pointer px-6 py-2 mt-2 bg-primary-green hover:bg-primary-green-dull transition text-white rounded-full text-sm">
                                Login
                            </button>
                        ) : (
                            <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                                Logout
                            </button>
                        )
                    }
                </div>
            )}

        </nav>
    )
}

export default Navbar;
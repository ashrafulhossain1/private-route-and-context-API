import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthComponent';

const Navbar = () => {

    const { userSignOutBtn, user } = useContext(AuthContext)
    // console.log('navbar:', user)


    // Sign Out
    const handleLogOut = () => {
        userSignOutBtn()
    }

    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signUp'>Sign Up</NavLink></li>
            {
                user && <>
                    <li><NavLink to='/orderList'>Order List</NavLink></li>
                    <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
                </>

            }
        </>

    return (
        <div className='bg-gray-900 text-white'>
            <div className="navbar max-w-screen-2xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div>
                        <Link to='/' className="text-3xl font-light">The Daily Star </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handleLogOut} className='btn'>Log Out</button>
                            :

                            <Link to='/login' className='btn btn-sm border border-white'>Log in</Link>
                    }
                    {
                        user ? (
                            user.photoURL ? (
                                <img src={user.photoURL} alt="User Profile" className='h-11 w-11 rounded-full border-2 border-orange-700' />
                            ) : user.displayName && user.displayName.trim() ? (
                                <p className='text-xs'>{user.displayName}</p>
                            ) : (
                                <p className='text-xs'>{user.email}</p>
                            )
                        ) : null
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;
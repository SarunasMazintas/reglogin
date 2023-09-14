import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

export const Toolbar = ({ userLoggedIn, setUserLoggedIn }) => {

    const nav = useNavigate();
    const location = useLocation();
    const params = useParams();

    const logOut = () => {
        setUserLoggedIn();
        nav('/');
    }

    //useEffect(() => console.log(location?.pathname?.includes('/otherusers/')))

    return (
        <div className='toolbar'>
            {userLoggedIn && <div className="logged-in">
                <div className="logged-user">Hello, {userLoggedIn.username}</div>
                <div className="choices">
                    <Link to='/profile'>My Profile</Link>
                    <Link to='/otherusers'>Other users</Link>
                    <Link to='/conversations'>My conversations</Link>
                    {location.pathname.includes('/otherusers/') && <Link to='/otherusers'>Go back</Link>}
                </div>
                <button className="log-out" onClick={logOut}>Logout</button>
            </div>}

            {!userLoggedIn && <div className="not-logged">
                <Link to='/'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>}

        </div>
    )
}

import React from 'react'
import { Profile } from '../components/Profile'

export const ProfilePage = ({ userLoggedIn, users, setUsers }) => {
    return (
        <div className='profile-page'>
           <Profile userLoggedIn={userLoggedIn} users={users} setUsers={setUsers}/>
        </div>
    )
}

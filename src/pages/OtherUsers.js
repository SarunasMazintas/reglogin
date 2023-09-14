import React from 'react'
import { Profile } from '../components/Profile'
import { OtherUserCard } from '../components/OtherUserCard'
import { Link } from 'react-router-dom'

export const OtherUsers = ({ user, users }) => {
  return (
    <div className='other-users-page'>
      <h1>Other Users:</h1>
      <div className='other-users-cards'>
        {/* {user && users.filter(x => x.username !== user.username).map(user => <Profile user={user} userLoggedIn={userLoggedIn}/>)} */}
        {user && users.filter(x => x.username !== user.username).map(user => <Link to={'/otherusers/' + user.username}><OtherUserCard user={user} /></Link>)}
      </div>
    </div>
  )
}

import React from 'react'

export const OtherUserCard = ({ user }) => {
  return (
    <div className='other-user-card'>
      <img src={user?.image} alt="" />
      <div className='information'>
        <div className="title">Username: {user?.username}</div>
        <div className="title">Email: {user?.email}</div>
      </div>
    </div>
  )
}

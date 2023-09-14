import React from 'react'

export const Message = ({ userLoggedIn, user, message }) => {
    return (
        <div className={`message ${userLoggedIn.username === message.sender.username ? 'sender' : 'receiver'}`}>
            {userLoggedIn.username === message.sender.username ? 'Me' : message.sender.username}: <span className='message-content'>{message.content}</span>
        </div>
    )
}

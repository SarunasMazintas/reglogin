import React, { useEffect, useRef, useState } from 'react'
import { Message } from './Message';
import { useLocation } from 'react-router-dom';

export const Messages = ({ userLoggedIn, user, messages, sendMessage }) => {
    const location = useLocation();
    const messageRef = useRef();
    const [messagesVisibility, setMessagesVisibility] = useState('none');

    function send() {
        if (messageRef.current?.value !== '') {
            sendMessage(userLoggedIn, user, messageRef.current.value);
            messageRef.current.value = '';
        }
    }

    const filteredMessages = () => messages.filter(message => {
        return (
            (message.sender.username === userLoggedIn.username
                && message.receiver.username === user.username)
            || (message.sender.username === user.username
                && message.receiver.username === userLoggedIn.username))
    })

    const myFilteredMessages = () => messages.filter(message => {
        return message.sender.username === userLoggedIn.username
            || message.receiver.username === userLoggedIn.username
    })

    function keyClicked(e){
        if (e.key === 'Enter') send();
    }

    useEffect(() => {
        //console.log('3 + ', messagesVisibility, user)
        //console.log('4 + ', location.pathname)
        user && setMessagesVisibility(
            filteredMessages().length > 0 ? undefined : 'none'
        )
    }, [messages, user]
    )

    return (
        <div className='messages-component'>
            {messagesVisibility && !user && myFilteredMessages().length === 0 &&
                <div>
                    No conversations started yet.
                    <div>
                        Go to Other users page and start one!
                    </div>
                </div>
            }
            {messagesVisibility && !user && myFilteredMessages().length > 0 &&
                <div>
                    Select your conversation on the left.
                </div>
            }

            {messagesVisibility && user && <div className='start-chat-message'> Start chat by sending message below:</div>}
            {!messagesVisibility && <div className="messages">
                {/* {messages && messages
                    .filter(message => {
                        return (
                            (message.sender.username === userLoggedIn.username
                                && message.receiver.username === user.username)
                                || (message.sender.username === user.username
                                    && message.receiver.username === userLoggedIn.username))
                                }) */}
                {filteredMessages() && filteredMessages()
                    .map(message => <Message userLoggedIn={userLoggedIn} user={user} message={message} key={message.id} />)}
            </div>}
            {user && <div className="controls">
                <input type="text" ref={messageRef} onKeyDown={keyClicked} />
                <button onClick={send}>Send!</button>
            </div>}
        </div>
    )
}

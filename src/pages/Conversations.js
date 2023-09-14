import React, { useState } from 'react'
import { ConversationItem } from '../components/ConversationItem'
import { Messages } from '../components/Messages';

export const Conversations = ({ messages, sendMessage, userLoggedIn }) => {

    const [selectedPerson, setSelectedPerson] = useState();

    const myFilteredMessages = () => messages.filter(message => {
        return message.sender.username === userLoggedIn.username
            || message.receiver.username === userLoggedIn.username
    })

    const activeChatPersons = () => {
        const persons = [...myFilteredMessages().map(message => message.sender),
        ...myFilteredMessages().map(message => message.receiver)];


        return persons.filter((person, index) => {
            return persons.findIndex(x => person.username === x.username) === index
        }).filter(x => x.username !== userLoggedIn.username)

    }

    return (
        <div className='conversations-page'>
            <div className="conversations-list">
                {/* {activeChatPersons().map(x => x.username)} */}
                {activeChatPersons().map(chatPerson => <ConversationItem chatPerson={chatPerson} setSelectedPerson={setSelectedPerson} selectedPerson = {selectedPerson}/>)}

            </div>
            <div className="conversation">
                <Messages userLoggedIn={userLoggedIn} user={selectedPerson} messages={messages} sendMessage={sendMessage}/>

            </div>
        </div>
    )
}

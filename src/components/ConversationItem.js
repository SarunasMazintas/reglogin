import React from 'react'

export const ConversationItem = ({chatPerson, selectedPerson, setSelectedPerson}) => {

  const selectPerson = () => {
    setSelectedPerson(chatPerson)
  }

  const getBorderStyle = () => {
    return selectedPerson?.username === chatPerson.username ? '1px solid black' : '';
  }

  return (
    <div className='conversation-item' style={{border: `${getBorderStyle()}`}} onClick={selectPerson}>
      <img src={chatPerson.image} alt="" />
      <div>{chatPerson.username}</div>
    </div>
  )
}

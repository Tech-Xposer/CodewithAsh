import React from 'react'

const MessageCard = ({message}) => {
  return (
    <div>
      <h2 className='text-black flex m-8 items-center gap-x-5'>{message.name}</h2>
    </div>
  )
}

export default MessageCard
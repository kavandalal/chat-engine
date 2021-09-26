import React from 'react';

function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className='message-row'>
      {isFirstMessageByUser && (
        <div className='message-avatar' style={{ backgroundImage: `url(${message?.sender?.avatar})`}} />
      // ?. is to find the info regarding the variable written before these operator
      )}
      { message?.attachments?.length > 0
      ? (
        <img
          src={message.attachments[0].file}
          alt='message-attachment'
          className='message-image'
          style={{ marginLeft : isFirstMessageByUser ? '4px' : '48px' }}
        />
        ) : (
          // cabcdc
        <div className='message' style={{ float:'left',backgroundColor:"#ffbe65" , marginLeft : isFirstMessageByUser ? '4px' : '48px'}}>
          { message.text}
        </div>
      )
    }

    </div>
  )
}

export default TheirMessage
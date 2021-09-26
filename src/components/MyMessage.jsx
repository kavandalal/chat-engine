import React from 'react'

function MyMessage({ message }) {
  if (message?.attachments?.length > 0) {
    //for image
    // ?. is to find the info regarding the variable written before these operator
    return (
      <img
        src={message.attachments[0].file}
        alt='message-attachment'
        className='message-image'
        style={{ float:'right' }}
      />
    )
  }
  return (
    //for text 
    // 3b2a50
    <div className='message' style={{ float:'right', marginRight:'18px' ,color:'white',backgroundColor:"#ff1a1a"}}>
      {message.text}
    </div>
  )
}

export default MyMessage

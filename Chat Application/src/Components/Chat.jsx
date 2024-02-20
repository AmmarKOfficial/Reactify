import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages.jsx'
import Input from './Input.jsx'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Minahil</span>
        <div className='chatIcons'>
        <img src={Cam} alt='Cam'/>
        <img src={Add} alt='Add'/>
        <img src={More} alt='More'/>
        </div>
      </div>
        <Messages/>
        <Input/>
        </div>
  )
}

export default Chat
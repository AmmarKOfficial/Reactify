import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chatter</span>
      <div className='user'>
        <img src='https://images.unsplash.com/photo-1706558427632-afca6edf50c2?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Ammar'/>
        <span>Ammar Khan</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
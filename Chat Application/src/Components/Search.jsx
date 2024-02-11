import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Fine a User'/>
      </div>
      <div className='userChat'>
        <img src='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='User'/>
        <div className='userChatInfo'>
          <span>Sharry</span>
        </div>
      </div>
    </div>
  )
}

export default Search
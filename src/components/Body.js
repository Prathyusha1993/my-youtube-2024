import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <MainContainer />
        <WatchPage />
    </div>
  )
}

export default Body
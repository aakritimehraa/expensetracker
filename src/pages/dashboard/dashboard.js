import React from 'react'
import Banner from '../../components/dashboard/Banner'
import Lists from '../../components/dashboard/Lists'
import Sidebar from '../../components/dashboard/Sidebar'

function Dashboard() {
  return (

    <div className='dashboard'><Sidebar />
    <Banner />
    <Lists />
    </div>
  )
}

export default Dashboard
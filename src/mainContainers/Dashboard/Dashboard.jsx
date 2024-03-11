import React from 'react'
import Tasks from '../../Components/Tables/Tasks'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import UpcomingAppointments from '../../Components/Tables/UpcomingAppointments'
import SalesOrder from '../../Components/Tables/SalesOrder'

const Dashboard = () => {
  return (
    
<main className="px-2 md:px-6 py-4">
        <div className="md:flex gap-5 w-full">
    <ProfileCard/>
    <div id="main-dashboard" className="basis-4/5 md:order-1 mt-4 sm:mt-0">
    <div class="md:grid md:gap-4 lg:grid-cols-2">
    <Tasks/>
    <UpcomingAppointments/>
    </div>
    <SalesOrder/>
    </div>
    </div>
    </main>

  )
}

export default Dashboard
import React from 'react'
import Tasks from '../../Components/Tables/Tasks'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import UpcomingAppointments from '../../Components/Tables/UpcomingAppointments'

const Dashboard = () => {
  return (
    
<main className="px-2 md:px-6 py-4">
        <div className="md:flex gap-5 w-full">
    <ProfileCard/>
    <Tasks/>
    <UpcomingAppointments/>
    </div>
    </main>

  )
}

export default Dashboard
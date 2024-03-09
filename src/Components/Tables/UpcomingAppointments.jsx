import React from 'react'

const UpcomingAppointments = () => {
  return (
    <div id="main-dashboard" class="basis-4/5 md:order-1 mt-4 sm:mt-0">
    <div class="card">
    <div class="card-title flex items-center justify-between">
      <h4 class="flex gap-2 items-center mb-2">
        <span> Upcoming Appointments </span>
        <span
          class="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-violet-100 rounded-sm dark:bg-violet-700 dark:text-gray-300"
        >
          10
        </span>
      </h4>
      <a href="#" class="line-button"
        ><i class="ri-edit-box-line"></i>&nbsp;View Details</a
      >
    </div>
    <hr />
    <div class="relative overflow-x-auto mt-2">
      <table
        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sortable-table"
      >
        <thead class="text-xs text-gray-200 uppercase bg-gray-700">
          <tr>
            <th scope="col" class="px-6 py-3">
              Subject &nbsp;
              <button class="toggleButton">
                <i class="fas fa-arrow-up arrow"></i>
              </button>
            </th>
            <th scope="col" class="px-6 py-3">
              Meeting Schedule &nbsp;
              <button class="toggleButton">
                <i class="fas fa-arrow-up arrow"></i>
              </button>
            </th>
            <th scope="col" class="px-6 py-3">
              Host &nbsp;
              <button class="toggleButton">
                <i class="fas fa-arrow-up arrow"></i>
              </button>
            </th>
            <th scope="col" class="px-6 py-3">
              Status &nbsp;
              <button class="toggleButton">
                <i class="fas fa-arrow-up arrow"></i>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-t ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Health Coach Meeting
            </th>
            <td class="px-6 py-4">
              <pre>Friday, June 25, 2024<br/>10:45 PM - 11:15 PM</pre>
            </td>
            <td class="px-6 py-4">Kit Maxwell</td>
            <td class="px-6 py-4">
              <div class="status-container">
                <span class="status-circle"></span> Accepted
              </div>
            </td>
          </tr>
          <tr class="bg-white border-b border-t ">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Provider Meeting
            </th>
            <td class="px-6 py-4">
              <pre>Thursday, June 28, 2024<br/>01:45 PM - 02:15 PM</pre>
            </td>
            <td class="px-6 py-4">Tyler Shelton</td>
            <td class="px-6 py-4">
              <div class="status-container">
                <span class="status-circle"></span> Declined
              </div>
            </td>
          </tr>
          <tr class="bg-white">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Health Coach Meeting
            </th>
            <td class="px-6 py-4">
              <pre>Monday, July 03, 2024<br/>10:45 AM - 11:15 AM</pre>
            </td>
            <td class="px-6 py-4">Morgan Maddox</td>
            <td class="px-6 py-4">
              <div class="status-container">
                <span class="status-circle"></span> No Response
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  )
}

export default UpcomingAppointments
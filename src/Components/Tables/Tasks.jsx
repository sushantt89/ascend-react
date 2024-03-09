import React from 'react'

const Tasks = () => {
  return (
    <div id="main-dashboard" class="basis-4/5 md:order-1 mt-4 sm:mt-0">

    <div className="card">
                <div className="card-title flex items-center justify-between">
                  <h4 className="flex gap-2 items-center mb-2">
                    <span> Tasks </span>
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-violet-100 rounded-sm dark:bg-violet-700 dark:text-gray-300"
                    >
                      10
                    </span>
                  </h4>
                  <a href="#" className="line-button"
                    ><i className="ri-edit-box-line"></i>&nbsp;View Details</a
                  >
                </div>
                <hr />
                <div className="relative overflow-x-auto mt-2">
                  <table
                    className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sortable-table"
                  >
                    <thead
                      className="text-xs text-gray-200 uppercase bg-gray-700 rounded-t-lg"
                    >
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Subject &nbsp;
                          <button className="toggleButton">
                            <i className="fas fa-arrow-up arrow"></i>
                          </button>
                        </th>

                        <th scope="col" className="px-6 py-3">
                          Due Date &nbsp;
                          <button className="toggleButton">
                            <i className="fas fa-arrow-up arrow"></i>
                          </button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status &nbsp;
                          <button className="toggleButton">
                            <i className="fas fa-arrow-up arrow"></i>
                          </button>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Task Owner &nbsp;
                          <button className="toggleButton">
                            <i className="fas fa-arrow-up arrow"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-t ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Medical Review
                        </th>
                        <td className="px-6 py-4">Thursday, July 28, 2024</td>
                        <td className="px-6 py-4">
                          <div className="status-container">
                            <span className="status-circle"></span> Started
                          </div>
                        </td>
                        <td className="px-6 py-4">Skye Mills</td>
                      </tr>
                      <tr className="bg-white border-b border-t ">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          General Checkup
                        </th>
                        <td className="px-6 py-4">Friday, August 12, 2024</td>
                        <td className="px-6 py-4">
                          <div className="status-container">
                            <span className="status-circle"></span> Not Started
                          </div>
                        </td>
                        <td className="px-6 py-4">Frankie Carter</td>
                      </tr>
                      <tr className="bg-white">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                        Lab Review
                        </th>
                        <td className="px-6 py-4">Monday, June 15, 2024</td>
                        <td className="px-6 py-4">
                          <div className="status-container">
                            <span className="status-circle"></span> Started
                          </div>
                        </td>
                        <td className="px-6 py-4">Ash Diaz</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
    </div>
  )
}

export default Tasks
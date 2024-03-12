import React from "react";

const UpcomingAppointments = ({title}) => {
  return (
    <div className="card">
      <div className="card-title flex items-center justify-between">
        <h4 className="flex gap-2 items-center mb-2">
          <span> {title} </span>
          <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-violet-100 rounded-sm dark:bg-violet-700 dark:text-gray-300">
            10
          </span>
        </h4>
        <a href="#" className="line-button">
          <i className="ri-edit-box-line"></i>&nbsp;View Details
        </a>
      </div>
      <hr />
      <div className="relative overflow-x-auto mt-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sortable-table">
          <thead className="text-xs text-gray-200 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Subject &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                Meeting Schedule &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                Host &nbsp;
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
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-t ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Health Coach Meeting
              </th>
              <td className="px-6 py-4">
                <pre>
                  Friday, June 25, 2024
                  <br />
                  10:45 PM - 11:15 PM
                </pre>
              </td>
              <td className="px-6 py-4">Kit Maxwell</td>
              <td className="px-6 py-4">
                <div className="status-container">
                  <span className="status-circle"></span> Accepted
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b border-t ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Provider Meeting
              </th>
              <td className="px-6 py-4">
                <pre>
                  Thursday, June 28, 2024
                  <br />
                  01:45 PM - 02:15 PM
                </pre>
              </td>
              <td className="px-6 py-4">Tyler Shelton</td>
              <td className="px-6 py-4">
                <div className="status-container">
                  <span className="status-circle"></span> Declined
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Health Coach Meeting
              </th>
              <td className="px-6 py-4">
                <pre>
                  Monday, July 03, 2024
                  <br />
                  10:45 AM - 11:15 AM
                </pre>
              </td>
              <td className="px-6 py-4">Morgan Maddox</td>
              <td className="px-6 py-4">
                <div className="status-container">
                  <span className="status-circle"></span> No Response
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingAppointments;

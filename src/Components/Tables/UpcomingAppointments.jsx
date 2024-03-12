import React, { useState,useEffect } from "react";

const UpcomingAppointments = ({ title }) => {
  const [appointments, setAppointments] = useState([
    {
      subject: "Health Coach Meeting",
      meetingSchedule: "Friday, June 25, 2024 </br>10:45 PM - 11:15 PM",
      host: "Kit Maxwell",
      status: "Accepted",
    },
    {
      subject: "Provider Meeting",
      meetingSchedule: "Thursday, June 28, 2024 </br>01:45 PM - 02:15 PM",
      host: "Tyler Shelton",
      status: "Declined",
    },
    {
      subject: "Health Coach Meeting",
      meetingSchedule: "Monday, July 03, 2024 </br>10:45 AM - 11:15 AM",
      host: "Morgan Maddox",
      status: "Accepted",
    },
  ]);
  useEffect(() => {
    const updateStatusClasses = () => {
      const updatedAppointment = appointments.map(appointment => {
        const statusText = appointment.status.trim().toLowerCase();
        if (statusText === "accepted" || statusText === "started") {
          return { ...appointment, statusClass: "accepted" };
        } else if (statusText === "declined" || statusText === "not started") {
          return { ...appointment, statusClass: "declined" };
        } else if (statusText === "no response") {
          return { ...appointment, statusClass: "no-response" };
        }
        return appointment;
      });
      setAppointments(updatedAppointment);
    };

    updateStatusClasses();
  }, []); // Run once on component mount

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
            {appointments.map((appointment) => (
              <tr className="bg-white border-b border-t ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                 {appointment.subject}
                </th>
                  <pre>
                  <td className="px-6 py-4" dangerouslySetInnerHTML={{ __html: appointment.meetingSchedule }} />
                  </pre>
                <td className="px-6 py-4">{appointment.host}</td>
                <td className="px-6 py-4">
                  <div className="status-container">
                    <span className={`status-circle ${appointment.statusClass}`}></span> {appointment.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingAppointments;

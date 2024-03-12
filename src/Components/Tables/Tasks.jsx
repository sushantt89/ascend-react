import React, { useEffect, useState } from "react";

const Tasks = ({ title }) => {
  const [tasks, setTasks] = useState([
    { subject: "Medical Review", dueDate: "Thursday, July 28, 2024", status: "Started", owner: "Skye Mills" },
    { subject: "General Checkup", dueDate: "Friday, August 12, 2024", status: "Not Started", owner: "Frankie Carter" },
    { subject: "Lab Review", dueDate: "Monday, June 15, 2024", status: "Started", owner: "Ash Diaz" }
  ]);

  useEffect(() => {
    const updateStatusClasses = () => {
      const updatedTasks = tasks.map(task => {
        const statusText = task.status.trim().toLowerCase();
        if (statusText === "accepted" || statusText === "started") {
          return { ...task, statusClass: "accepted" };
        } else if (statusText === "declined" || statusText === "not started") {
          return { ...task, statusClass: "declined" };
        } else if (statusText === "no response") {
          return { ...task, statusClass: "no-response" };
        }
        return task;
      });
      setTasks(updatedTasks);
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
          <thead className="text-xs text-gray-200 uppercase bg-gray-700 rounded-t-lg">
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
            {tasks.map((task, index) => (
              <tr key={index} className="bg-white border-b border-t">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {task.subject}
                </th>
                <td className="px-6 py-4">{task.dueDate}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className={`status-circle ${task.statusClass}`}></span>
                    <span className="ml-2">{task.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{task.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;

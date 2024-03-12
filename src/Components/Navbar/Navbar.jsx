import React from 'react'

const Navbar = () => {
  return (
    <div className="border-b border-t  border-gray-200 dark:border-gray-700 mb-5">
    <ul className="tabs-ul">
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1 active-link">
          <i className="ri-home-4-line"></i>&nbsp;&nbsp;Home
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-task-line"></i>&nbsp;&nbsp;Tasks
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-hard-drive-3-line"></i>&nbsp;&nbsp;Zoho
          Workdrive
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-booklet-line"></i>&nbsp;&nbsp;Zoho Books
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-mail-line"></i>&nbsp;&nbsp;Emails
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-chat-3-line"></i>&nbsp;&nbsp;Smooth Messenger
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-list-check-2"></i>&nbsp;&nbsp;Activities
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-input-field"></i>&nbsp;&nbsp;All Fields
        </a>
      </li>
      <li className="me-2">
        <a href="#" className="tabs-link text-xs !px-1">
          <i className="ri-timeline-view"></i>&nbsp;&nbsp;Timeline
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Navbar
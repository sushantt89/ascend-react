import React from 'react';
import { Link } from 'react-router-dom';


const Aside = () => {
  return (
    <>
  
    <aside
      id="side-bar"
      className="py-6 xl:w-64 2xl:w-72 border-r border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-700 transition-all"
    >
      <p className="text-sm text-gray-500 mb-2 px-6">Main Menu</p>
      <ul className="main-menu mt-1">
        <li>
          <Link default to="/" className="sidebar-links active">
            <i className="ri-dashboard-2-line"></i>&nbsp;&nbsp;Dashboard
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/sales-matrix" className="sidebar-links">
            <i className="ri-layout-grid-fill"></i>&nbsp;&nbsp;Sales Matrix Dashboard
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/sales-data" className="sidebar-links">
            <i className="ri-line-chart-fill"></i>&nbsp;&nbsp;Sales Data
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/open-order-issues" className="sidebar-links">
            <i className="ri-archive-stack-line"></i>&nbsp;&nbsp;Open Order Issues
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/home" className="sidebar-links">
            <i className="ri-home-4-line"></i>&nbsp;&nbsp;Home
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="sidebar-links">
            <i className="ri-contacts-book-3-line"></i>&nbsp;&nbsp;Contacts
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/deals" className="sidebar-links">
            <i className="ri-discount-percent-line"></i>&nbsp;&nbsp;Deals
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
        <li>
          <Link to="/messages" className="sidebar-links">
            <i className="ri-chat-4-line"></i>&nbsp;&nbsp;Messages
            <i
              className="ri-arrow-drop-right-line absolute right-2 top-1/2 opacity-50"
              style={{ transform: 'translateY(-50%)' }}
            ></i>
          </Link>
        </li>
      </ul>
    </aside>
    
    </>
  );
};

export default Aside;

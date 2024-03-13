import React from "react";

const UserActions = ({ isuserActionsOpen }) => {
  return (
    <div
      className={`${
        isuserActionsOpen ? "" : "hidden"
      } overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0 w-96`}
      id="apps-dropdown"
    >
      <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        User Actions
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-calendar-todo-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Generate Treatment Plan
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-send-plane-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Send Smooth Messa
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-customer-service-2-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Open helpdesk
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-drive-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Google Drive
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-mail-send-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Send Email
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-file-list-2-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Request Patient Records
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-file-copy-2-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Find & Merge Duplicate
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-phone-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Call
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-focus-3-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Mark as Inactive
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-sticky-note-add-line text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Request TP Review
          </div>
        </a>
        <a
          href="#"
          className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
        >
          <i className="ri-links-fill text-2xl mb-1"></i>
          <div className="text-xs font-regular text-gray-900 dark:text-white">
            Generate TP Link
          </div>
        </a>
      </div>
    </div>
  );
};

export default UserActions;

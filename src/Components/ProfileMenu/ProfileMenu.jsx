import React from "react";

const ProfileMenu = ({ isProfileOpen }) => {
  return (
    <div
      className={`${
        isProfileOpen ? "" : "hidden"
      } z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0`}
      id="user-menu"
    >
      <div className="py-3 px-4">
        <span className="block text-sm font-semibold text-gray-900 dark:text-white">
          Sophia Martinez
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
          SophiaMartinez@gmail.com
        </span>
      </div>
      <ul
        className="py-1 text-gray-500 dark:text-gray-400"
        aria-labelledby="dropdown"
      >
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
            // onClick="opencoachProfile()"
          >
            My profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
          >
            Account settings
          </a>
        </li>
      </ul>

      <ul
        className="py-1 text-gray-500 dark:text-gray-400"
        aria-labelledby="dropdown"
      >
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;

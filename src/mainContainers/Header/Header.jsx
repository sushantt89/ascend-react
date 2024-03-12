import React, { useState, useEffect } from "react";
import Notifications from "../../Components/Notifications/Notifications";
import logo from "../../assets/images/logo.svg";
import coachProfile from "../../assets/images/coachProfile.jpg";
import ProfileMenu from "../../Components/ProfileMenu/ProfileMenu";

const Header = () => {
  //handleProfileClick();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  
  const handleProfileOpen = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // // Darkmode logic
  useEffect(() => {
    // Function to handle theme toggle
    const handleThemeToggle = () => {
      const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
      const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  
      // Toggle icons inside button
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");
  
      // Toggle theme in local storage
      if (localStorage.getItem("color-theme") === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        console.log(localStorage);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        console.log(localStorage);

      }
    };
  
    // Add event listener for theme toggle button
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", handleThemeToggle);
    }
  
    // Cleanup function
    return () => {
      if (themeToggleBtn) {
        themeToggleBtn.removeEventListener("click", handleThemeToggle);
      }
    };
  }, []);
  

  //notificaiton toggler
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleNotificationToggle = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <>
      <header className="antialiased">
        <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                id="stoggleSidebar"
                aria-expanded="true"
                aria-controls="sidebar"
                className="lg:hidden p-2 mr-3 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h14M1 6h14M1 11h7"
                  />
                </svg>
              </button>

              <a href="#" className="flex mr-4">
                <img src={logo} className="mr-3 h-8" alt="HOS Logo" />
                <span className="hidden md:inline self-center text-base lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  HOS
                </span>
              </a>
              <form action="#" method="GET" className="hidden lg:block lg:pl-2">
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-96">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-priMorgan Maddox-500 focus:border-priMorgan Maddox-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-priMorgan Maddox-500 dark:focus:border-priMorgan Maddox-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-2 md:gap-3 lg:order-2 relative">
              <button
                id="theme-toggle"
                title="Toggle Theme"
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                <svg
                  id="theme-toggle-dark-icon"
                  className=" w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className="hidden w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4
        
         11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              <button
                id="toggleSidebarMobileSearch"
                type="button"
                className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Search</span>
                {/* <!-- Search icon --> */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
              {/* <!-- Notifications --> */}

              <button
                type="button"
                title="Notifications"
                id="notification-toggle"
                className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                onClick={handleNotificationToggle}
              >
                <span className="sr-only">View notifications</span>
                {/* Bell icon */}
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14 20"
                >
                  <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                </svg>
              </button>
              <Notifications isNotificationOpen={isNotificationOpen} />
              {/* <!-- Dropdown menu --> */}

              {/* <!-- Apps --> */}
              <button
                type="button"
                title="User Actions"
                id="apps-toggle"
                className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">View notifications</span>
                {/* <!-- Icon --> */}
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143v-4.286A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0 w-96"
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
                    <i className="ri-folder-3-line text-2xl mb-1"></i>
                    <div className="text-xs font-regular text-gray-900 dark:text-white">
                      Medical Record
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                  >
                    <i className="ri-calendar-check-line text-2xl mb-1"></i>
                    <div className="text-xs font-regular text-gray-900 dark:text-white">
                      Appointments
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                  >
                    <i className="ri-user-voice-line text-2xl mb-1"></i>
                    <div className="text-xs font-regular text-gray-900 dark:text-white">
                      Teleconsultation
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                  >
                    <i className="ri-user-line text-2xl mb-1"></i>
                    <div className="text-xs font-regular text-gray-900 dark:text-white">
                      My Profile
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-2 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                  >
                    <i className="ri-customer-service-2-line text-2xl mb-1"></i>
                    <div className="text-xs font-regular text-gray-900 dark:text-white">
                      Help & Support
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Profile --> */}
              <div className="relative" id="profile-dropdown">
                <button
                  type="button"
                  id="userMenu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="flex items-center p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={handleProfileOpen}
                >
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={coachProfile}
                    alt="Profile"
                  />
                  <span className="hidden lg:inline-block ml-2">
                    {/* User Name */}
                  </span>
                  {/* <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 8a2 2 0 100-4 2 2 0 000 4zM2 10a2 2 0 012-2h1a6 6 0 0111.66-1.5.75.75 0 10-.32-1.45A7.5 7.5 0 105.24 10H4a2 2 0 01-2-2zm14 2a2 2 0 11-4 0 2 2 0 014 0zm-3-2a.75.75 0 101.5 0 .75.75 0 00-1.5 0z"
                      clipRule="evenodd"
                    />
                  </svg> */}
                </button>

              </div>
                 <ProfileMenu isProfileOpen={isProfileOpen} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

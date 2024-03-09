import React from 'react';

const ProfileCard = () => {
  return (
    <div id="profile-section" class="basis-1/5 md:order-2">

    <div className="card">
      <div className="card-image mx-auto rounded-lg overflow-hidden relative">
        <img
          src="./assets/images/profile.jpg"
          alt=""
          className="w-full rounded-md h-full object-cover"
        />
        <span className="badge absolute bottom-2 left-1/2" style={{ zIndex: 3, transform: 'translateX(-50%)' }}>MH2307</span>
      </div>
      <div className="card-content text-start py-2.5">
        <p className="text-lg font-semibold dark:text-slate-200">Emily Kit Maxwellson</p>
        <p className="text-xs font-regular dark:text-slate-200">
          <span className="inline-block me-3 relative dot">Female</span>
          <span className="inline-block">March 15, 1987 (37)</span>
        </p>
        <ul className="flex pt-2 mb-2 justify-start items-center flex-wrap">
          <li className="badge-alternate my-1">ehr</li>
          <li className="badge-alternate my-1">developer</li>
          <li className="badge-alternate my-1">vip</li>
          <li className="badge-alternate my-1">bayarea</li>
          <li className="badge-alternate my-1">ews</li>
        </ul>
        <hr />
      </div>
      <div className="card-content text-start">
        <p className="info-text flex gap-2">
          <i className="ri-map-pin-5-line"></i><span>123 Maple Street, Los Frankie Carteres, CA 90001</span>
        </p>
        <p className="info-text flex gap-2">
          <i className="ri-phone-line"></i><a href="tel:(555) 555-5555">(555) 555-5555</a>
        </p>
        <p className="info-text flex gap-2">
          <i className="ri-mail-line"></i><a href="mailto:emily.Kit Maxwellson@gmail.com">emily.Kit Maxwellson@gmail.com</a>
        </p>
        <hr />
      </div>
      <div className="card-content mt-2 text-start">
        <p className="info-text mt-1">
          <span className="block text-xs opacity-50">GTM</span>
          <span className="block text-sm">MDT - America/Denver</span>
        </p>
        <p className="info-text mt-1">
          <span className="block text-xs opacity-50">Contact Status</span>
          <span className="block text-sm">Active Customer</span>
        </p>
        <p className="info-text mt-1">
          <span className="block text-xs opacity-50">Coach</span>
          <span className="block text-sm">Sarah Tyler Shelton</span>
        </p>
        <p className="info-text mt-1">
          <span className="block text-xs opacity-50">Provider</span>
          <span className="block text-sm">Dr. Jennifer Patel</span>
        </p>
      </div>
      <div className="card-content mt-3 text-start">
        <button type="button" className="main-button">
          View Profile
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;

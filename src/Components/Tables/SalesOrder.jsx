import React from 'react';

const SalesOrder = () => {
  return (
    <div className="card mt-4">
      <div className="card-title flex items-center justify-between">
        <h4 className="flex gap-2 items-center mb-2">
          <span> Sales Order </span>
          <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-violet-100 rounded-sm dark:bg-violet-700 dark:text-gray-300">
            4
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
                Sales Order# &nbsp;
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
                Sales Order Date &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                Reference &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button>
              </th>
              <th scope="col" className="px-6 py-3">
                Amount &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-t">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <i className="fa-solid fa-pen reportDownload hidden"></i>
                <i
                  className="fa-regular fa-file-pdf reportDownload hidden"
                  style={{ color: 'red' }}
                ></i>
                SO-14001
              </th>
              <td className="px-6 py-4">Invoiced</td>
              <td className="px-6 py-4">02/20/2023</td>
              <td className="px-6 py-4">Test Order</td>
              <td className="px-6 py-4">$850.00</td>
              <td className="px-6 py-4">$850.00</td>
            </tr>
            {/* Other rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesOrder;

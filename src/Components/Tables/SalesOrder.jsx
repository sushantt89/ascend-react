import React from 'react';

const SalesOrder = ({title}) => {
  return (
    <div className="card mt-4">
    <div className="card-title flex items-center justify-between">
      <h4 className="flex gap-2 items-center mb-2">
        <span> {title} </span>
        <span
          className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-gray-800 bg-violet-100 rounded-sm dark:bg-violet-700 dark:text-gray-300"
        >
          4
        </span>
      </h4>
      <a href="#" className="line-button"
        ><i className="ri-edit-box-line"></i>&nbsp;View Details</a
      >
    </div>
    <hr />
    <div className="relative overflow-x-auto mt-2">
      <table
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sortable-table"
      >
        <thead className="text-xs text-gray-200 uppercase bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sales Order# &nbsp;
              <button className="toggleButton">
               <i class="ri-arrow-up-line"></i>
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Status &nbsp;
              <button className="toggleButton">
               <i class="ri-arrow-up-line"></i>
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Sales Order Date &nbsp;
              <button className="toggleButton">
               <i class="ri-arrow-up-line"></i>
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Reference &nbsp;
              <button className="toggleButton">
               <i class="ri-arrow-up-line"></i>
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Subtotal &nbsp;
              <button className="toggleButton">
               <i class="ri-arrow-up-line"></i>
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Amount &nbsp;
              <button className="toggleButton">
               <i class="ri-arrow-up-line"></i>
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
              <i className="fa-solid fa-pen hidden reportDownload"></i>

              <i
                className="fa-regular fa-file-pdf hidden reportDownload"
                style={{color: "red"}}
              ></i>
              SO-14001
            </th>
            <td className="px-6 py-4">Invoiced</td>
            <td className="px-6 py-4">02/20/2023</td>
            <td className="px-6 py-4">Test Order</td>
            <td className="px-6 py-4">$850.00</td>
            <td className="px-6 py-4">$850.00</td>
          </tr>
          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              SO-14002
            </th>
            <td className="px-6 py-4">Draft</td>
            <td className="px-6 py-4">02/25/2021</td>
            <td className="px-6 py-4">Test Order</td>
            <td className="px-6 py-4">$350.00</td>
            <td className="px-6 py-4">$350.00</td>
          </tr>
          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              SO-14003
            </th>
            <td className="px-6 py-4">Partially Invoiced</td>
            <td className="px-6 py-4">05/02/2020</td>
            <td className="px-6 py-4">Test Order</td>
            <td className="px-6 py-4">$950.00</td>
            <td className="px-6 py-4">$950.00</td>
          </tr>
          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              SO-14004
            </th>
            <td className="px-6 py-4">Void</td>
            <td className="px-6 py-4">02/20/2024</td>
            <td className="px-6 py-4">Test Order</td>
            <td className="px-6 py-4">$1250.00</td>
            <td className="px-6 py-4">$1250.00</td>
          </tr>
          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              SO-14005
            </th>
            <td className="px-6 py-4">open</td>
            <td className="px-6 py-4">08/20/2024</td>
            <td className="px-6 py-4">Test Order</td>
            <td className="px-6 py-4">$650.00</td>
            <td className="px-6 py-4">$650.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default SalesOrder;

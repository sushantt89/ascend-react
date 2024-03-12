import React from 'react'

const AwaitingPayment = ({value}) => {
  return (
    <div className={`card mt-4 ${value}`}>
    <div className="card-title flex items-center justify-between">
      <h4 className="flex gap-2 items-center mb-2">
        <span> Awaiting Payment </span>
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
            <th scope="col" className="px-6 py-3">Invoice Name &nbsp;
              <button className="toggleButton">
                <i className="fas fa-arrow-up arrow"></i>
              </button></th>
            <th scope="col" className="px-6 py-3">Order Number &nbsp;
              <button className="toggleButton">
                <i className="fas fa-arrow-up arrow"></i>
              </button></th>
            <th scope="col" className="px-6 py-3">Invoice Date &nbsp;
              <button className="toggleButton">
                <i className="fas fa-arrow-up arrow"></i>
              </button></th>
            <th scope="col" className="px-6 py-3">Due Date &nbsp;
              <button className="toggleButton">
                <i className="fas fa-arrow-up arrow"></i>
              </button></th>
            <th scope="col" className="px-6 py-3">Account Name &nbsp;
              <button className="toggleButton">
                <i className="fas fa-arrow-up arrow"></i>
              </button></th>
            <th scope="col" className="px-6 py-3">Contact Name &nbsp;
              <button className="toggleButton">
                <i className="fas fa-arrow-up arrow"></i>
              </button></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-t">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
           INV-1234
            </th>
            <td className="px-6 py-4">SO-1234</td>
            <td className="px-6 py-4">Mar 4, 2023</td>
            <td className="px-6 py-4">Mar 4, 2023</td>
            <td className="px-6 py-4">Ava Garcia</td>
            <td className="px-6 py-4">Ava Garcia</td>
          </tr>
          <tr className="bg-white border-b border-t">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
           INV-5678
            </th>
            <td className="px-6 py-4">SO-5678</td>
            <td className="px-6 py-4">Oct 24, 2023</td>
            <td className="px-6 py-4">Oct 24, 2023</td>
            <td className="px-6 py-4">Olivia Smith</td>
            <td className="px-6 py-4">Olivia Smith</td>
          </tr>
         
         
       
         
           
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default AwaitingPayment
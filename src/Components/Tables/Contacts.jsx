import React from 'react'

const Contacts = ({value}) => {
  return (
    <div className={`card mt-4 ${value}`}>
    <div className="card-title flex items-center justify-between">
      <h4 className="flex gap-2 items-center mb-2">
        <span>  Contacts </span>
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
            <th scope="col" className="px-6 py-3">Contact Owner &nbsp;
              <button className="toggleButton">
               <i class="ri-arrow-up-line"></i>
              </button></th>
            <th scope="col" className="px-6 py-3">Account Name &nbsp;
                <button className="toggleButton">
                 <i class="ri-arrow-up-line"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Email &nbsp;
                <button className="toggleButton">
                 <i class="ri-arrow-up-line"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Phone &nbsp;
                <button className="toggleButton">
                 <i class="ri-arrow-up-line"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Full Name &nbsp;
                <button className="toggleButton">
                 <i class="ri-arrow-up-line"></i>
                </button></th>
            
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-t">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Ava Garcia
            </th>
            <td className="px-6 py-4">Ava Garcia</td>
            <td className="px-6 py-4">AvaGarcia@gmail.com</td>
            <td className="px-6 py-4">(123)111-1111</td>
            <td className="px-6 py-4">Ava Garcia</td>
          </tr>
         
          <tr className="bg-white border-b border-t">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Noah Martinez
            </th>
            <td className="px-6 py-4">Noah Martinez</td>
            <td className="px-6 py-4">NoahMartinez@gmail.com</td>
            <td className="px-6 py-4">(123)222-2222</td>
            <td className="px-6 py-4">Noah Martinez</td>
          </tr>
         
          <tr className="bg-white border-b border-t">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Liam Davis
            </th>
            <td className="px-6 py-4">Liam Davis</td>
            <td className="px-6 py-4">LiamDavis@gmail.com</td>
            <td className="px-6 py-4">(123)333-3333</td>
            <td className="px-6 py-4">Liam Davis</td>
          </tr>
         
          <tr className="bg-white border-b border-t">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Isabella Anderson
            </th>
            <td className="px-6 py-4">Isabella Anderson</td>
            <td className="px-6 py-4">IsabellaAnderson@gmail.com</td>
            <td className="px-6 py-4">(123)444-4444</td>
            <td className="px-6 py-4">Isabella Anderson</td>
          </tr>
         
          <tr className="bg-white border-b border-t">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            Olivia Smith
            </th>
            <td className="px-6 py-4">Olivia Smith</td>
            <td className="px-6 py-4">OliviaSmith@gmail.com</td>
            <td className="px-6 py-4">(123)555-5555</td>
            <td className="px-6 py-4">Olivia Smith</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Contacts
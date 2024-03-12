import React from 'react'

const Medications = ({value}) => {
  return (
    <div className={`card mt-4 ${value}`}>
    <div className="card-title flex items-center justify-between">
      <h4 className="flex gap-2 items-center mb-2">
        <span> Medications </span>
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
            <th scope="col" className="px-6 py-3">Medication Record &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Contact Name &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Medication Name &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Dosage &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Active &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button></th>
            <th scope="col" className="px-6 py-3">Inactive since &nbsp;
                <button className="toggleButton">
                  <i className="fas fa-arrow-up arrow"></i>
                </button></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              MED-1
            </th>
            <td className="px-6 py-4">Kit Maxwell</td>
            <td className="px-6 py-4">Aspirin</td>
            <td className="px-6 py-4">100mg</td>
            <td className="px-6 py-4">
              <i className="fa-solid fa-check"></i>
            </td>
            <td className="px-6 py-4"></td>
          </tr>

          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              MED-2
            </th>
            <td className="px-6 py-4">River Robertson</td>
            <td className="px-6 py-4">Ibuprofen</td>
            <td className="px-6 py-4">100mg</td>
            <td className="px-6 py-4">
              <i className="fa-solid fa-check"></i>
            </td>
            <td className="px-6 py-4"></td>
          </tr>

          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              MED-3
            </th>
            <td className="px-6 py-4">Frankie Carter</td>
            <td className="px-6 py-4">Acetaminophen</td>
            <td className="px-6 py-4">300mg</td>
            <td className="px-6 py-4">
              <i className="fa-solid fa-xmark"></i>
            </td>
            <td className="px-6 py-4">Dec 10,2021</td>
          </tr>

          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              MED-4
            </th>
            <td className="px-6 py-4">Morgan Maddox</td>
            <td className="px-6 py-4">Aspirin</td>
            <td className="px-6 py-4">200mg</td>
            <td className="px-6 py-4">
              <i className="fa-solid fa-xmark"></i>
            </td>
            <td className="px-6 py-4">Dec 28,2021</td>
          </tr>

          <tr className="bg-white border-b border-t ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              MED-5
            </th>
            <td className="px-6 py-4">Clem Holmes</td>
            <td className="px-6 py-4">Penicillin</td>
            <td className="px-6 py-4">500mg</td>
            <td className="px-6 py-4">
              <i className="fa-solid fa-check"></i>
            </td>
            <td className="px-6 py-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Medications
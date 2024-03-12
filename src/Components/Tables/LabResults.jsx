import React from 'react'

const LabResults = () => {
  return (
    <div className="card mt-4">
              <div className="card-title flex items-center justify-between">
                <h4 className="flex gap-2 items-center mb-2">
                  <span> Lab Results </span>
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
                        Test Name &nbsp;
                        <button className="toggleButton">
                          <i className="fas fa-arrow-up arrow"></i>
                        </button>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Reference Range &nbsp;
                        <button className="toggleButton">
                          <i className="fas fa-arrow-up arrow"></i>
                        </button>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Apr,29,2022 &nbsp;
                        <button className="toggleButton">
                          <i className="fas fa-arrow-up arrow"></i>
                        </button>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Jun,14,2023 &nbsp;
                        <button className="toggleButton">
                          <i className="fas fa-arrow-up arrow"></i>
                        </button>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Mar,26,2023 &nbsp;
                        <button className="toggleButton">
                          <i className="fas fa-arrow-up arrow"></i>
                        </button>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Jan,12,2024 &nbsp;
                        <button className="toggleButton">
                          <i className="fas fa-arrow-up arrow"></i>
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
                        Lymphs (Absolute)
                      </th>
                      <td className="px-6 py-4">3-7x10E3/uL</td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        2.5
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        2.5
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        2.5
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        2.5
                      </td>
                    </tr>
                    <tr className="bg-white border-b border-t ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        MNeut/Lymph Ratio
                      </th>
                      <td className="px-6 py-4">0-2 ratio</td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        1.7
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        1.7
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        1.7
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{color:"green"}}
                        ></i>
                        1.7
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Eos(Absolute)
                      </th>
                      <td className="px-6 py-4">0-1x10E3/uL</td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-down"
                          style={{color:"red"}}
                        ></i>
                        2.3
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-down"
                          style={{color:"red"}}
                        ></i>
                        2.3
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-down"
                          style={{color:"red"}}
                        ></i>
                        2.3
                      </td>
                      <td className="px-6 py-4">
                        <i
                          className="fa-solid fa-arrow-down"
                          style={{color:"red"}}
                        ></i>
                        2.3
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            )
}

export default LabResults
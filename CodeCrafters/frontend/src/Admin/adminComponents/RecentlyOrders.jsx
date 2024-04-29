import React from 'react'

const RecentlyOrders = () => {
  return (
    <>
    
      <div className="recentlyOrders my-10 relative overflow-x-auto">
        <h3 className='ml-3 mb-5 text-lg text-slate-800 mt-4 font-semibold'>Recently Orders</h3>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Product Id
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Full Stack YouTube Clone Source Code
              </th>
              <td className="px-6 py-4">
                4
              </td>
              <td className="px-6 py-4">
                Template
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Instagram UI Clone Source Codes
              </th>
              <td className="px-6 py-4">
                2
              </td>
              <td className="px-6 py-4">
                Template
              </td>
              <td className="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Mac Book 3
              </th>
              <td className="px-6 py-4">
                7
              </td>
              <td className="px-6 py-4">
                Apple
              </td>
              <td className="px-6 py-4">
                $99
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default RecentlyOrders
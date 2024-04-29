import React from 'react'
import AdminNav from '../adminComponents/AdminNav'
import "../AdminCss.css"
import AdminHomeCards from '../adminComponents/AdminHomeCards'
import RecentlyOrders from '../adminComponents/RecentlyOrders'

const AdminHome = () => {
  return (
    <>
      <div className="flex">
        <AdminNav/>
        <div className="admincontent">
          <AdminHomeCards/>
          <div className="flex">
          <RecentlyOrders/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHome
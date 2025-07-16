import React, {useState} from 'react';
import '../../styles/AdminDashboard.css';
import Sidebar from '../../components/admin/Sidebar';
import ProductsTable from '../../components/admin/ProductsTable';

const AdminDashboard = () => {
  return (
      <div className="admin-container">
        <Sidebar />
        <div className="main-content">
          <ProductsTable />
        </div>
      </div>
  );
};

export default AdminDashboard;

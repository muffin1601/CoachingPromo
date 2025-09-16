import React from 'react';
import '../../styles/AdminDashboard.css';
import Sidebar from '../../components/admin/Sidebar';
import ProductsTable from '../../components/admin/ProductsTable';

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main-content">
        <div className="content-wrapper">
          
          <ProductsTable />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

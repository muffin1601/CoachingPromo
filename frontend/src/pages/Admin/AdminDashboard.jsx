import React, {useState} from 'react';
import '../../styles/AdminDashboard.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SearchOverlay from '../../components/SearchOverlay';
import Sidebar from '../../components/admin/Sidebar';
import ProductsTable from '../../components/admin/ProductsTable';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => setShowSearch(!showSearch); 


  return (
    <>
    <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} toggleSearch={toggleSearch} />
        {showSearch && (
          <SearchOverlay showSearch={showSearch} toggleSearch={toggleSearch} />
        )}
      <div className="admin-container">
        <Sidebar />
        <div className="main-content">
          <ProductsTable />
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default AdminDashboard;

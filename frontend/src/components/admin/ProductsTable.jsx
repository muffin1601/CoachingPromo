import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/ProductsTable.css';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import AddProductModal from './AddProductModal';
import AddCategoryModal from './AddCategoryModal';
import ConfirmModal from './ConfirmModal';
import AddSubcategoryModal from './AddSubcategoryModal';
import EditProductModal from './EditProductModal';
import { toast } from 'react-toastify';
import FilterModal from './FilterModal';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [showAddSubCategoryModal, setShowAddSubCategoryModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getproducts`);
      // Assuming your API returns an array directly, otherwise adjust accordingly
      const productsData = response.data.products || response.data;
      setProducts(productsData);
      setTotalProducts(productsData.length);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
    }
  };

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return products.slice(startIndex, startIndex + productsPerPage);
  };

  const totalPages = Math.ceil(totalProducts / productsPerPage);

   const handleFilter = async ({ category, subcategory }) => {
    try {
      const params = {};
      if (category) params.category = category;
      if (subcategory) params.subcategory = subcategory;

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/filter-products`, {
        params,
      });

      setProducts(res.data.products || res.data);
      setTotalProducts(res.data.products.length || res.data.length);
    } catch (error) {
      console.error("Failed to fetch filtered products:", error);
    }
  };

  // Handlers to open modals
  const handleAddProduct = () => {
    setShowAddProductModal(true);
  };

  const handleAddCategory = () => {
    setShowAddCategoryModal(true);
  };
const handleAddSubCategory = () => {
  setShowAddSubCategoryModal(true);
};

  const handleDeleteProduct = async () => {
    if (!productToDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/products/delete/${productToDelete._id}`);
      toast.success('Product deleted successfully');
      setProductToDelete(null);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product.');
    }
  };

  return (
    <div className="lead-card">
      <div className="lead-header">
        <h5>Manage Products</h5>
        <div className="lead-btn-group">
          {/* Fixing the button labels and handlers */}
          <button className="btn-filter" onClick={() => setShowFilterModal(true)}>Filter</button>
          <button className="btn-add" onClick={handleAddProduct}>+ Product</button>
          <button className="btn-subcat" onClick={handleAddSubCategory}>+ SubCategory</button>
          <button className="btn-cat" onClick={handleAddCategory}>+ Category</button>
        </div>
      </div>

      <div className="lead-table-wrapper">
        <table className="lead-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Product Code</th>
              <th>Name</th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getPaginatedProducts().map((product, index) => (
              <tr key={product._id}>
                <td>{(currentPage - 1) * productsPerPage + index + 1}</td>
                <td>{product.product_code}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.subcategory}</td>
                <td>{product.content}</td>
                <td>
                  <div className="lead-actions">
                    {/* Uncomment if you want a view button */}
                    {/* <button className="btn-view" title="View" onClick={() => setSelectedProduct(product)}><AiOutlineEye /></button> */}
                    <button className="btn-edit" title="Edit" onClick={() => setEditProduct(product)}><AiOutlineEdit /></button>
                    <button className="btn-delete" title="Delete" onClick={() => setProductToDelete(product)}><AiOutlineDelete /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lead-pagination-wrapper">
        <span className="lead-entries">
          Showing {getPaginatedProducts().length} of {totalProducts} Entries
        </span>
        <ul className="lead-pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Prev</button>
          </li>
          {[...Array(Math.min(totalPages, 2))].map((_, i) => {
            const pageNumber = Math.min((Math.floor((currentPage - 1) / 2) * 2) + i + 1, totalPages);
            return (
              <li key={`page-${pageNumber}`} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                <button onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</button>
              </li>
            );
          })}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
          </li>
        </ul>
      </div>

      {/* Modals */}
      {showAddProductModal && (
        <AddProductModal
          isOpen={showAddProductModal}
          onClose={() => {
            setShowAddProductModal(false);
            fetchProducts();
          }}
        />
      )}
      {showAddProductModal && (
        <AddProductModal
          isOpen={showAddProductModal}
          onClose={() => setShowAddProductModal(false)}
          onSave={() => {
            fetchProducts();
            setShowAddProductModal(false);
          }}
        />
      )}
      {showAddSubCategoryModal && (
        <AddSubcategoryModal
          isOpen={showAddSubCategoryModal}
          onClose={() => setShowAddSubCategoryModal(false)}
          isSubCategory={true} // Assuming AddCategoryModal can handle subcategories
        />
      )}

      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onSave={fetchProducts}
        />
      )}
      {showAddCategoryModal && (
        <AddCategoryModal
          isOpen={showAddCategoryModal}
          onClose={() => setShowAddCategoryModal(false)}
          onSave={() => {
            fetchProducts();
            setShowAddCategoryModal(false);
          }}
        />
      )}
      {productToDelete && (
        <ConfirmModal
          isOpen={!!productToDelete}
          message={`Are you sure you want to delete ${productToDelete.name}?`}
          onCancel={() => setProductToDelete(null)}
          onConfirm={handleDeleteProduct}
        />
      )}
      {showFilterModal && (
        <FilterModal
          isOpen={showFilterModal}
          onClose={() => setShowFilterModal(false)}
          onFilter={handleFilter}
        />
      )}
    </div>
  );
};

export default ProductsTable;

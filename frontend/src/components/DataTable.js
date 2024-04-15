import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

const DataTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setProducts(response.data);

        // Initialize DataTable after data is fetched
        $('#dataTable').DataTable();
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container text-center">
      <table id="dataTable" className="table table-center table-hover table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>SKU</th>
            <th>Variant ID</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Description</th>
            <th>Category ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.product_name}</td>
              <td>{product.product_id}</td>
              <td>{product.sku}</td>
              <td>{product.variant_id}</td>
              <td>{product.price}</td>
              <td>{product.discount_percentage}</td>
              <td>{product.description}</td>
              <td>{product.category_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
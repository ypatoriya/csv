import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import * as xlsx from 'xlsx'


const DataTable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setProducts(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const handleExport = async ()=> {

    try {
      const response = await axios.get('http://localhost:5000/api/export');

      if (response.status === 200) {

          navigate('/');

      } else {
          console.error('Login failed:', response.data.message);
      }
  } catch (error) {
      console.error('An error occurred during export:', error);
  }
}



  return (
    <div className="container text-center">

      <table id="dataTable" className="table table-center table-hover table-bordered">
        <thead className="thead-dark">
          <h2 className='mt-5 mb-5'>Products</h2> 
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>SKU</th>
            <th>Variant ID</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Description</th>
            <th>Category</th>
            <th>Discount Price</th>
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
              <td>{product.discount_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-primary mt-2"
        onClick={handleExport}
      >
        Export
      </button>
    </div>
  );
};

export default DataTable;
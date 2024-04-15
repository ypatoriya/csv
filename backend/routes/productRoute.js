const express = require('express');
const { uploadFile, getAllProducts, exportToExcel } = require('../controller/productController');
const router = express.Router();



router.post('/upload', uploadFile);


router.get('/data', getAllProducts);

router.get('/export/excel', exportToExcel);

module.exports = router;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataTable from './components/DataTable';
import FileUpload from './components/FileUpload';
import ExportToExcelButton from './components/Export';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<DataTable />} />
          <Route path='/import' element={<FileUpload/>} />
          <Route path='/export' element={<ExportToExcelButton/>} />
        </Routes>
        
    </Router>
  );
}

export default App;

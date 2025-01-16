import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EditItemPage from './pages/EditItemPage';
import LoginPage from './pages/LoginPage';
import ItemDetailPage from './pages/ItemDetailPage';
import InventoryPage from './pages/InventoryPage';
import HomePage from './pages/HomePage'; 
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Add this route for homepage */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/item/:id" element={<ItemDetailPage />} />
        <Route path="/item/:id/edit" element={<EditItemPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
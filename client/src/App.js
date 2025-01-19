import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EditItemPage from './pages/EditItemPage';
import LoginPage from './pages/LoginPage';
import ItemDetailPage from './pages/ItemDetailPage';
import InventoryPage from './pages/InventoryPage';
import HomePage from './pages/HomePage'; 
import CreateAccountPage from './pages/CreateAccountPage';
import UserInventory from './pages/UserInventory';
import AddItemPage from './pages/AddItemPage';


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
        <Route path="/user-inventory" element={<UserInventory />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
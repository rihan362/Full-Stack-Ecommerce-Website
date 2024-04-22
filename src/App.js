
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory category="men"/>}/>
        <Route path="/women" element={<ShopCategory category="women"/>}/>
        <Route path="/kids" element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
         <Route path=":productid" element={<Product/>}/>
        </Route>
         <Route path="/cart" element={<cart/>}/>
         <Route path="/login" element={<loginsignup/>}/>

       </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

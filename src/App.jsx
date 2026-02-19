import {BrowserRouter, Routes , Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory"
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import mens_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import Payment from "./Components/Payment/Payment";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={mens_banner}
        category="men"/>}/>
        <Route path="/women" element={<ShopCategory  banner={women_banner}
        category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner}
        category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
         <Route path="/login" element={<LoginSignup/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/Payment" element={<Payment />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

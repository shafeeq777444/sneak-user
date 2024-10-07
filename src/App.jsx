import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/user-authentication/Register.jsx';
import Login from './components/user-authentication/Login.jsx';
import Home from "./pages/Home.jsx";
import MenCard from "./components/Product/MenCard.jsx";
import WomenCard from "./components/Product/WomenCard.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./pages/Cart.jsx";
import ResponsiveCarousel from './components/Home/ResponsiveCarousel.jsx'


function App() {
  return (

    <ProductProvider>
    <CartProvider>
      <Router>
          <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />}>
                  <Route index element={<ResponsiveCarousel />} />
                  <Route path="men" element={<MenCard />} />
                  <Route path="women" element={<WomenCard />} />
                  <Route path="cart" element={<Cart />} />
              </Route>
          </Routes>
      </Router>
      </CartProvider>
  </ProductProvider>
  );
}

export default App;

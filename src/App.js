import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";

function App() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route
                    path="/products/:productId"
                    element={<SingleProduct />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <footer>Footer</footer>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <nav>Nav Bar</nav>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
                <Route path="/dashboard">
                    <Route path="info" element={<h1>INFO</h1>} />
                </Route>
            </Routes>
            <footer>Footer</footer>
        </BrowserRouter>
    );
}

export default App;

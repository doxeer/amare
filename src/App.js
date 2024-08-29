import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Partner from "./components/pages/Partner";
import DefaultPage from "./components/pages/DefaultPage"
import Products from "./components/pages/Products";
import Kyani from "./components/pages/Kyani";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />}>
          <Route index element={<DefaultPage/>}/>
            <Route path="join-as-brand-partner" element={<Partner />} />
            <Route path="products" element={<Products />} />
            <Route path="kyani-products" element={<Kyani />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./components/Home";
import Partner from "./components/pages/Partner";
import DefaultPage from "./components/pages/DefaultPage";
import Products from "./components/pages/Products";
import Kyani from "./components/pages/Kyani";
import ProductPage from "./components/pages/ProductPage";
import SignupLinks from './components/pages/Country/SignupLinks'
import CountrySignup from './components/pages/Country/CountrySignup'
import BlogList from './components/pages/Blog/BlogList';
import BlogDetail from './components/pages/Blog/BlogDetail';
import AdminPanel from "../src/components/pages/Admin/AdminPanel";


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />}>
              <Route index element={<DefaultPage />} />
              <Route path="join-as-brand-partner" element={<Partner />} />
              <Route path="products" element={<Products />} />
              <Route path="kyani-products" element={<Kyani />} />
              <Route path="/:linkName" element={<ProductPage />} />
              <Route path="sign-up-or-log-in-to-amare" element={<SignupLinks />} />
              <Route path="information/:slug" element={<CountrySignup />} />
              {/* Blog Routes */}
              <Route path="blogs" element={<BlogList />} />  {/* Blog listesi */}
              <Route path="blogs/:link" element={<BlogDetail />} />  {/* Blog detayı */}
              <Route path="admin" element={<AdminPanel />} /> 
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
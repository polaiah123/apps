// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Components/Home/Header/Header'
import { Footer } from './Components/Home/Footer/Footer'
import { Home } from './Pages/Home/Home';
import ProductDetails from './Components/Home/Deals/ProductDetails/Pd'
import Api from './Components/Home/Deals/Api/Api'
function App() {
  return (
    <div className="App">
      <Router>
         
      <Header />
        <Routes>
        <Route path="/" element={
            <>
              <Home/>
            </>
          } />
          <Route path="/productdetails/:id`" element={
            <>
              
              <ProductDetails/>
              <Api/>
              
            </>
          } />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

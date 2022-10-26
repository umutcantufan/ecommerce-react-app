import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Card from './components/Card';
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Login  from "./pages/Login.jsx";




function App() {
  const {drawer} = useSelector(state => state.drawer);

  
  return (
    <div className="App">
      <PageContainer>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="detail/:id" element={<Detail />} />
        
      </Routes>
      {drawer && <Card/>}
      <Footer/>
    </BrowserRouter>
    </PageContainer>
    </div>
  );
}
export default App;

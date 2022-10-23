import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <PageContainer>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </PageContainer>
    </div>
  );
}
export default App;


import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import { useState } from "react";
import Footer from './components/Footer';
;

function App() {
  const [firstvalue, setvalue] = useState('');
  const[submitvalue,setsubmitvalue]=useState('');
  const clicktosubmit=(e)=>{
    e.preventDefault();
    setsubmitvalue(firstvalue);
    setvalue('');
  }
  // console.log("Appp......",firstvalue);

  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar firstvalue={firstvalue} clicktosubmit={clicktosubmit} setfirstvalue={(v)=>setvalue(v)}  />
        <Routes>
          <Route path="/Home" element={<Home firstvalue={submitvalue}/>} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="/*" element={<Navigate to="/Home" />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;

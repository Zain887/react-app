import Home from "./webPages/Home";
import About from "./webPages/About";
import Navbar from "./comonents/navbar";
import Footer from "./comonents/Footer";
import Seminar from "./webPages/Seminar";
import Hacking from "./webPages/Hacking";
import Contact from "./webPages/Contact";
import Downloads from "./webPages/Downloads";
import React, { useState, useEffect } from 'react';
import LoadingAnimation from "./comonents/loadingAnimation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingUpLogin from "./webPages/SignUpOrLogin";
import { getTest } from "./funtions/test";

function App() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 4000); // 4000 milliseconds or 3 seconds
  }, []);

  const [data, setData] = useState('HELLO FROM CB');
  useEffect(()=>{
    getTest().then((res)=>{ setData(res.message) }).catch((err)=>console.log(err))
  }, []);
  return (

    <>
        <div>
          <h1 className="text-white">
            {data}
          </h1>
        </div>
      <Router>
        {/* {showMain ? <Navbar /> : <LoadingAnimation />} */}
        {showMain ? <SingUpLogin/> : <LoadingAnimation />}

        <Routes>
          <Route path="/" Component={showMain && Home} />
          <Route path="/About" Component={About} />
          <Route path="/Seminars" Component={Seminar} />
          <Route path="/Downloads" Component={Downloads} />
          <Route path="/Hacking" Component={Hacking} />
          <Route path="/ContactUs" Component={Contact} />
        </Routes>
        
        {/* {showMain ? <Footer /> : <LoadingAnimation />} */}
      </Router>
    </>
  );
}

export default App;

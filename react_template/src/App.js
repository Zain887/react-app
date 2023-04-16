import Navbar from "./comonents/navbar";
import Home from "./webPages/Home";
import About from "./webPages/About";
import Seminar from "./webPages/Seminar";
import Downloads from "./webPages/Downloads";
import Hacking from "./webPages/Hacking";
import Contact from "./webPages/Contact";
import LoadingAnimation from "./comonents/loadingAnimation";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function App() {
  const [showMain, setShowMain] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setShowMain(true);
  }, 4000); // 4000 milliseconds or 3 seconds
}, []);
  return (

    <>
      <Router>
          {showMain ? <Navbar /> : <LoadingAnimation />}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Seminars" Component={Seminar} />
          <Route path="/Downloads" Component={Downloads} />
          <Route path="/Hacking" Component={Hacking} />
          <Route path="/ContactUs" Component={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

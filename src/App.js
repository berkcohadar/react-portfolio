import React, { useEffect, useRef, useState } from "react";

import NavigationBar from "./components/NavigationBar";
import Profile from "./components/Profile";
import { Skills } from "./components/Skills";

import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const component = useRef(null);

  const executeScroll = () => {
    if (component.current) {
      component.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    console.log(currentPage);
    executeScroll();
  }, [currentPage]);

  return (
    <div className="App">
      <NavigationBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div ref={currentPage === "Home" ? component : null}>
        <Profile />
      </div>
      <div ref={currentPage === "Skills" ? component : null}>
        <Skills />
      </div>
      <div ref={currentPage === "Projects" ? component : null}>
        <Projects />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

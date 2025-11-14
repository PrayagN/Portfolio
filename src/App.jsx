import React, { useState } from "react"; // Import React
import "./App.css"; // Import your CSS file
import NavBar from "./components/NavBar"; // Correct the import to match the file name
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/Projects/ProjectDetails";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className="App">
      <NavBar />
      <ScrollButton/>
      <Banner />
      <Skills />
      <Experience/>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      {openModal.state && 
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      }
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;

import { Home } from "./components/routes/Home.jsx";
import { About } from "./components/routes/About.jsx";
import { Contact } from "./components/routes/Contact.jsx";

import "./index.css";
import { NavBar } from "./components/ui/NavBar.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

export function App() {

  return (
    <div className="container mx-auto max-w-3xl">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={ <Navigate to="/" />} />
      </Routes>

    </div>
  );
}
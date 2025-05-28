import react from "react";
import AppRouter from "./AppRouter";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// import './app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;

import react from "react";
import AppRouter from "./AppRouter";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

// import './app.css'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
export default App;

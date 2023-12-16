import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GroomingPage from "./pages/GroomingPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import BoardingPage from "./pages/BoardingPage";
import CalendarPage from "./pages/CalendarPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/grooming" element={<GroomingPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/boarding" element={<BoardingPage />}></Route>
        <Route path="/grooming/calendar" element={<CalendarPage />}></Route>
        <Route
          path="/grooming/calendar/form-page"
          element={<FormPage />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

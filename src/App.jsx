import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GroomingPage from "./pages/GroomingPage";
import Footer from "./components/Footer";
import CalendarPage from "./pages/CalendarPage";
import FormPage from "./pages/FormPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import LastOrdersPage from "./pages/LastOrdersPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/grooming" element={<GroomingPage />}></Route>
        <Route path="/grooming/calendar" element={<CalendarPage />}></Route>
        <Route
          path="/grooming/calendar/form-page"
          element={<FormPage />}
        ></Route>
        <Route
          path="/grooming/calendar/form-page/confirmation-page"
          element={<ConfirmationPage />}
        ></Route>
        <Route path="/last-orders" element={<LastOrdersPage />}></Route>
        <Route path="/last-orders/edit-page" element={<EditPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

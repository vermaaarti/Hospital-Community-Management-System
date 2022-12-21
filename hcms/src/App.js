import Request from "./component/Request";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/signUp";
import LogIn from "./auth/logIn";
import HospitalList from "./Pages/HospitalList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/request" element={<Request />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>

        <Footer />
        <HospitalList />
      </BrowserRouter>
    </div>
  );
}

export default App;

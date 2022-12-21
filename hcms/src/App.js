import Request from "./component/Request";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/signUp";
import LogIn from "./auth/logIn";
import HospitalList from "./Pages/HospitalList";
import ProfileMain from "./profile/ProfileMain";
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
          <Route path="/hospital/:hid" element={<ProfileMain/>} />


          
          <Route path="/searchresult/:category/:query" element={<HospitalList/>} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

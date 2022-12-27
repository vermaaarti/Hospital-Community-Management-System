import Request from "./component/Request";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/signUp";
import LogIn from "./auth/logIn";
import HospitalList from "./Pages/HospitalList";
import NotificationPage from "./Pages/NotificationPage";
import ProfileMain from "./profile/ProfileMain";
import OTP from "./Pages/OTP";
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormData from "./DetailsForm/FormData";

=======
>>>>>>> 65152ddfb6f6d4039dc8afcf61dd5b9df862d571
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
      
      <NotificationPage/>
      <ProfileMain/>
      <OTP/>
<<<<<<< HEAD
      <FormData />
=======
>>>>>>> 65152ddfb6f6d4039dc8afcf61dd5b9df862d571
    </div>
  );
}

export default App;

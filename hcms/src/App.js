import Request from "./component/Request";
import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/signUp";
import LogIn from "./auth/logIn";
import HospitalList from "./Pages/HospitalList";
<<<<<<< HEAD
import NotificationPage from "./Pages/NotificationPage";
=======
import ProfileMain from "./profile/ProfileMain";
>>>>>>> 2f67d15e1c74052d11b7d778d6162d81ea4c41fc
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
    </div>
  );
}

export default App;

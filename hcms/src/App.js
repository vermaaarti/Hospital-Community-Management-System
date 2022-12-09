import Request from './component/Request';
import Navbar from './component/Navbar.js';
import Footer from "./component/Footer.js";
import MainPage from './Pages/MainPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>
    <BrowserRouter>

    <Navbar />
    <Routes>
    <Route to="/" element={  <MainPage/> }/>
    <Route to="/request" element={  <Request/> }/>
    </Routes>
   
    <Footer/>
    </BrowserRouter>

		  
    </div>
  );
}

export default App;

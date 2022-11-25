import Request from './component/Request';
import Navbar from './component/Navbar.js';
import Footer from "./component/Footer.js";
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div>
    <Navbar />
    <MainPage/>
		<Request /> 
    <Footer/>
    

		  
    </div>
  );
}

export default App;

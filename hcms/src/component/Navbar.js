import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [nav, setNav] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  
  const changeNavBg = () => {
    if(window.scrollY >=90){
      setNav(true)
    }
    else{setNav(false)
    }
  }
  window.addEventListener("scroll",changeNavBg);

  return (
    <header className = {nav ? "nav-act" : "nav"}>
      <h3>HCMS</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Service</a>
        <a href="/#">Contact us</a>
        <button className="signup-btn">Signup</button>
        <button 
					className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button 
					className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;

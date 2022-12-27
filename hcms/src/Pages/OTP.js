import React from "react";
import otp from "../Assets/otp-img.png";
import "../Styles/OTP.css";

const OTP = () => {
  return (
    <section className="otp-sec">
      <div className="otp-cont">
        <div className="ver">Verify Account</div>
        <div>
          <img className="otp-img" src={otp} alt="otp" />
        </div>
        <p className="first-para">
          Email Verification has been successfully done
        </p>
        <p>Enter the OTP sent to your Email address</p>
        <input className="int-otp" />
        <p>
          If you don't receive a code{" "}
<<<<<<< HEAD
          <a className="resnd-link" href='/home'>
=======
          <a className="resnd-link" href="#">
>>>>>>> 65152ddfb6f6d4039dc8afcf61dd5b9df862d571
            Resend
          </a>
        </p>
        <button className="ver-btn">Verify</button>
      </div>
    </section>
  );
};

export default OTP;

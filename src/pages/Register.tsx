import { Link, useNavigate } from "react-router-dom";
import "../styles/components/register/register.css";
// import banner from "../assets/videos/banner-video-1.mp4";

const Register = () => {
  console.log("Register");

  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="register--container">
      <form className="register--form">
        {/* Brand details */}
        <div className="form--top">
          <label className="form--title">FLYHIGH</label>
        </div>
        <div className="form--register">
          {/* Input fields */}
          <div className="form--actions">
            <div className="input--field">
              <input className="input" type="text" placeholder="Name" />
            </div>
            <div className="input--field">
              <input className="input" type="email" placeholder="Email" />
            </div>
            <div className="input--field">
              <input className="input" type="text" placeholder="Address" />
            </div>
            <div className="input--field">
              <input className="input" type="password" placeholder="Password" />
            </div>
            <div className="input--field">
              <input
                className="input"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button
              className="btn btn--primary login--btn"
              onClick={(e) => handleLogin(e)}
            >
              Register
            </button>
          </div>
          {/* Options on register screen */}
          <div className="other--form--options">
            <div className="option--1">
              <p>Already registered? </p>
              <Link to="/login">Log in here</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

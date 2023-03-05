import { Link, useNavigate } from "react-router-dom";
import "../styles/components/login/login.css";
// import banner from "../assets/videos/banner-video-1.mp4";

const Login = () => {
  console.log("Login");

  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="login--container">
      <form className="login--form">
        {/* Brand details */}
        <div className="form--top">
          <label className="form--title">FLYHIGH</label>
        </div>
        <div className="form--login">
          {/* Input fields */}
          <div className="form--actions">
            <div className="input--field">
              <input className="input" type="email" placeholder="Email" />
            </div>
            <div className="input--field">
              <input className="input" type="password" placeholder="Password" />
            </div>
            <button
              className="btn btn--primary login--btn"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </div>
          {/* Options on login screen */}
          <div className="other--form--options">
            <div className="option--1">
              <p>Not registered? </p>
              <Link to="/register">Register here</Link>
            </div>
            <Link to="/forgot-password">Forgot password</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";
import "../styles/components/login/login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const {error, isFetching } = useSelector((state: any) => state.user);
  console.log(error)
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    login(dispatch, user);
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
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input--field">
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="input"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              className="btn btn--primary login--btn"
              onClick={(e) => handleLogin(e)}
            >
              Login
              {isFetching && <span className="loading--spinner"></span>}
            </button>
          </div>
          {
            error && <label style={{fontSize: "1.2rem", color: "red"}}>Invalid email and password</label>
          }
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

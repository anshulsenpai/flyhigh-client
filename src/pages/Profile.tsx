import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/userSlice";
import "../styles/components/profile/profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  
  return (
    <div className="profile--comp--container">
      <h1>Profile</h1>
      <button onClick={handleLogout} className="logout btn">
        Log out
      </button>
    </div>
  );
};

export default Profile;

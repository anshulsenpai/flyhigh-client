import { Avatar } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/components/sidebar/sidebar.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Groups3Icon from "@mui/icons-material/Groups3";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import PollIcon from "@mui/icons-material/Poll";
import { useDispatch } from "react-redux";
import { closeSlider } from "../redux/sliderSlice";

const Sidebar = () => {
  console.log("Sidebar");

  const navigate = useNavigate();
  // Navigate to profile
  const handleProfile = () => {
    navigate("/profile");
  };
  // Navigate to home
  const handleHome = () => {
    navigate("/");
  };

  const dispatch = useDispatch();

  const handleSlider = () => {
    dispatch(closeSlider());
  };
  return (
    <div className="sidebar--wrapper" onClick={handleSlider}>
      <div className="top--container">
        <h1 onClick={handleHome}>FLYHIGH</h1>
        <div className="sidebar--toggler" style={{border: "1px solid #bababa", display: "flex", padding: "0.8rem",width: "fit-content", height: "fit-content", borderRadius: "50%"}} onClick={handleSlider}>
          <ArrowBackIosNewIcon style={{color: "#FFF", fontSize: "2rem"}} />
        </div>
      </div>
      <div className="profile--container">
        <Avatar
          alt="Anshul Kulkarni"
          src="/static/images/avatar/1.jpg"
          sx={{ width: "7rem", height: "7rem", bgcolor: "EEEEEE" }}
        />
        <div className="user--details">
          <h2>Anshul Kulkarni</h2>
          <p>Member</p>
        </div>
        <ArrowForwardIosIcon className="mui--icon" />
      </div>
      <ul className="nav--links">
        <li className="nav--link">
          <NavLink to="/">
            <HomeIcon className="mui--icon" />
            <p>Home</p>
          </NavLink>
        </li>
        <li className="nav--link">
          <NavLink to="/visitors">
            <PersonOutlineIcon className="mui--icon" />
            <p>Visitos</p>
          </NavLink>
        </li>
        <li className="nav--link">
          <NavLink to="/meetings">
            <Groups3Icon className="mui--icon" />
            <p>Meetings</p>
          </NavLink>
        </li>
        <li className="nav--link">
          <NavLink to="/marketplace">
            <StorefrontIcon className="mui--icon" />
            <p>Marketplace</p>
          </NavLink>
        </li>
        <li className="nav--link">
          <NavLink to="/complaints">
            <AssignmentLateIcon className="mui--icon" />
            <p>Complaints</p>
          </NavLink>
        </li>
        <li className="nav--link">
          <NavLink to="/vote">
            <PollIcon className="mui--icon" />
            <p>Vote</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

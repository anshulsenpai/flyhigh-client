import "../styles/components/navbar/navbar.css";
import { useDispatch } from "react-redux";
import { openSlider } from "../redux/sliderSlice";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  console.log("Navbar");

  const dispatch = useDispatch();
  const handleSlider = () => {
    dispatch(openSlider());
  };

  return (
    <header className="navbar--container">
      <div className="left--nav">
        <div
          className="sidebar--toggler"
          style={{
            display: "flex",
            padding: "0.5rem",
            width: "fit-content",
            height: "fit-content",
          }}
          onClick={handleSlider}
        >
          <MenuIcon style={{ color: "#000", fontSize: "2.8rem" }} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="navbar">
        <div className="left">
          <h2>Social</h2>
          <Link>
            <HomeOutlinedIcon className="nav-icon" />
          </Link>
          <Link>
            <DarkModeOutlinedIcon className="nav-icon" />
          </Link>
          <Link>
            <GridViewOutlinedIcon className="nav-icon" />
          </Link>
          <div className="search-bar">
            <SearchOutlinedIcon className="nav-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <Link>
            <AccountCircleOutlinedIcon className="nav-icon" />
          </Link>
          <Link>
            <MailOutlineOutlinedIcon className="nav-icon" />
          </Link>
          <Link>
            <NotificationsNoneOutlinedIcon className="nav-icon" />
          </Link>

          <div className="profile-nav">
            <Link>
              <AccountCircleIcon className="nav-icon" />
            </Link>
          </div>
          <p>Talal Mahmud</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

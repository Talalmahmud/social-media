import "./profile.scss";
import bannerImg from "../../assets/img1.jpg";
import profileImg from "../../assets/img4.jpeg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import Posts from "../../components/posts/Posts";
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src={bannerImg} alt="" className="banner" />
        <img src={profileImg} alt="" className="profile-img" />
      </div>
      <div className="profile-container">
        <div className="top">
          <LocationOnOutlinedIcon />
          <ControlPointOutlinedIcon />
        </div>
        <div className="bottom">
          <button>Follow</button>
        </div>
      </div>
      <div className="post-container">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;

import { Link } from "react-router-dom";

import user from "../../assets/1.png";
import friends from "../../assets/2.png";
import groups from "../../assets/3.png";
import marketplace from "../../assets/4.png";
import watch from "../../assets/5.png";
import memories from "../../assets/6.png";
import events from "../../assets/7.png";
import gaming from "../../assets/8.png";
import videos from "../../assets/9.png";
import message from "../../assets/10.png";
import fundraise from "../../assets/11.png";
import tutorials from "../../assets/12.png";
import courses from "../../assets/13.png";

import "./leftbar.scss";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="menu">
        <div className="item">
          <img src={user} alt="" />
          <Link to="/profile/1">User</Link>
        </div>
        <div className="item">
          <img src={friends} alt="" />
          <Link to="#">Friends</Link>
        </div>
        <div className="item">
          <img src={groups} alt="" />
          <Link to="#">Groups</Link>
        </div>
        <div className="item">
          <img src={marketplace} alt="" />
          <Link to="#">Marketplace</Link>
        </div>
        <div className="item">
          <img src={watch} alt="" />
          <Link to="#">Watch</Link>
        </div>
        <div className="item">
          <img src={memories} alt="" />
          <Link to="#">Memories</Link>
        </div>
        <hr />
        <p>Your shortcuts</p>
        <div className="item">
          <img src={events} alt="" />
          <Link to="#">Events</Link>
        </div>
        <div className="item">
          <img src={gaming} alt="" />
          <Link to="#">Gaming</Link>
        </div>
        <div className="item">
          <img src={videos} alt="" />
          <Link to="#">Videos</Link>
        </div>
        <div className="item">
          <img src={message} alt="" />
          <Link to="#">Messages</Link>
        </div>
        <hr />
        <p>Others</p>
        <div className="item">
          <img src={fundraise} alt="" />
          <Link to="#">Fundraise</Link>
        </div>
        <div className="item">
          <img src={tutorials} alt="" />
          <Link to="#">Tutorials</Link>
        </div>
        <div className="item">
          <img src={courses} alt="" />
          <Link to="#">Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;

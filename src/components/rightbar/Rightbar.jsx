import "./rightbar.scss";
import user from "../../assets/background-1.jpg";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="card">
          <h2>Suggestion for you</h2>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
            <div className="buttons">
              <button className="follow-btn">follow</button>
              <button>dissmis</button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
            <div className="buttons">
              <button className="follow-btn">follow</button>
              <button>dissmis</button>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Latest actives</h2>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
            <p>1 minute ago</p>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
            <p>1 minute ago</p>
          </div>
        </div>

        <div className="card">
          <h2>Active persons</h2>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src={user} alt="" />
              <span>Talal Mahmud</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

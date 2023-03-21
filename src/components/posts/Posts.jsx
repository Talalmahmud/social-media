import "./posts.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import profileImg from "../../assets/background-1.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const postDummy = [
  {
    id: 1,
    profilePic: profileImg,
    pic: img1,
    name: "Talal",
    desc: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
  },
  {
    id: 2,
    profilePic: profileImg,
    pic: img2,
    name: "Movin",
    desc: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
  },
  {
    id: 3,
    profilePic: profileImg,
    pic: img3,
    name: "Rahim",
    desc: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
  },
  {
    id: 4,
    profilePic: profileImg,
    pic: img4,
    name: "Afif",
    desc: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
  },
  {
    id: 5,
    profilePic: profileImg,
    pic: img5,
    name: "Kaiom",
    desc: "Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.",
  },
];
const Posts = () => {
  return (
    <div className="posts">
      {postDummy.map((post, index) => {
        return (
          <div className="item" key={index}>
            <div className="top">
              <div className="left">
                <img src={post.profilePic} alt="" />
                <div className="user-info">
                  <span>{post.name}</span>
                  <span>12:30pm</span>
                </div>
              </div>

              <div className="right">
                <MoreHorizIcon />
              </div>
            </div>
            <p>{post.desc}</p>
            <div className="middle">
              <img src={post.pic} alt="" />
            </div>
            <div className="bottom">
              <ThumbUpOffAltOutlinedIcon className="like-icon" />
              <ChatOutlinedIcon className="comment-icon" />
              <ShareOutlinedIcon className="share-icon" />
            </div>
            <div className="comment-section">
              <div className="top">
                <img src={img1} alt="" />
                <input type="text" placeholder="comments here" />
                <button>send</button>
              </div>
              <div className="bottom"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

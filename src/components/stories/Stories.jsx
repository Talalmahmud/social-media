import "./stories.scss";
import dummyImg from "../../assets/background-1.jpg";

const dummyData = [
  {
    id: 1,
    name: "Talal",
  },
  {
    id: 2,
    name: "Movin",
  },
  {
    id: 3,
    name: "Sabbir",
  },
  {
    id: 4,
    name: "Karim",
  },
];
const Stories = () => {
  return (
    <div className="stories">
      <div className="story">
        <img src={dummyImg} alt="" />
        <span>User</span>
        <button className="stories-btn">+</button>
      </div>
      {dummyData.map((story, index) => {
        return (
          <div className="story" key={index}>
            <img src={dummyImg} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;

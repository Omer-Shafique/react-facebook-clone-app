import "./Rightbar.css";
import { Users } from "../../DummyData";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
// import CakeSharpIcon from '@mui/icons-material/CakeSharp';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="bithdayImage" src="\assets\gift.png" alt="" />
          {/* <CakeSharpIcon className="cakeIcon" /> */}
          <span className="birthdayText">
            <b>Ahmed Azam</b> and <b>3 others </b> have bithday today
          </span>
        </div>
        <img src="\assets\Posts\post 3.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <OnlineFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

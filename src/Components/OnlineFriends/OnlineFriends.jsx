// import "../OnlineFriends.css"

import { Users } from "../../DummyData";

export default function onlineFriends({user}) {
  return (
    <div>
      <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img src={`/assets/profile pictures${user.profilePicture}`} alt="" className="rightbarProfileImage" />
              <span className="rightbarOnline"></span>
              <span className="rightbarUsername">{user.username}</span>
            </div>
          </li>
    </div>
  )
}

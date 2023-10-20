import userEvent from "@testing-library/user-event"
import "./Sidebar.css"
import {RssFeed , Chat , PlayCircle , Groups, Bookmark  , HelpCenter , Work , Event , PlayLesson } from "@mui/icons-material"
import CloseFriends from "../CloseFriends/CloseFriends"
import { Users } from "../../DummyData"

export default function Sidebar({}) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">

        <li className="sidebarItemList">
          <RssFeed className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarItemList">
          <Chat className="sidebarIcon"/>
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarItemList">
          <PlayCircle className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarItemList">
          <Groups className="sidebarIcon"/>
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarItemList">
          <Bookmark className="sidebarIcon"/>
          <span className="sidebarListItemText">Bookmark</span>
        </li>
        <li className="sidebarItemList">
          <HelpCenter className="sidebarIcon"/>
          <span className="sidebarListItemText">Questions</span>
        </li>
        <li className="sidebarItemList">
          <Work className="sidebarIcon"/>
          <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarItemList">
          <Event className="sidebarIcon"/>
          <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarItemList">
          <PlayLesson className="sidebarIcon"/>
          <span className="sidebarListItemText">Courses</span>
        </li>
        </ul>

      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFriendList">
          {Users.map((u)=>(
            <CloseFriends key={u.id}  user={u}   />
          ))}
      </ul>
      </div>
      </div>
  )
}

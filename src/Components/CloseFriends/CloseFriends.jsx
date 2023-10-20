import React from 'react'

export default function CloseFriends({user}) {
  return (
    <div>
      <li className="sidebarFriend">
      <img className="sidebarFriendImg"src={`/assets/profile pictures${user.profilePicture}`} alt="altText"></img>
      <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  )
}

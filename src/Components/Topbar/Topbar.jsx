import React from 'react';
import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search  className='searchIcon'/>
          <input placeholder="Search 'Jennifer Lawrence'" type="text" className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="TopBarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>

        <div className="TopbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge topbarIconBadge1">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge topbarIconBadge2">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge topbarIconBadge3">1</span>
            
          </div>
          </div>
      <img src="/assets/Profile Pictures/pp 5.jpg" alt="" className="topBarImage" />
    </div>
        </div>
      
  );
}

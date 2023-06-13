import React, { useState, useEffect } from 'react';
import './GithubProfile.css';

function GithubProfile() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  const handleProfileClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="alp">
        <h1 className='h1'>GithubProfile</h1>
    
    <div className="container">
      
      {userData.map(user => (
        <div className="user-card" key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.login}</h2>
          <button className="view-profile-btn" onClick={() => handleProfileClick(user.html_url)}>View Profile</button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default GithubProfile;

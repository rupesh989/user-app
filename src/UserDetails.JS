import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserDetails.css";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [username]);

  return (
    <div className="user-details-container">
      <h2 className="user-details-heading">User Details</h2>
      <img
        src={user.avatar_url}
        alt={user.login}
        className="user-avatar-details"
      />
      <ul className="user-details">
        <li className="user-detail-item">Username: {user.login}</li>
        <li className="user-detail-item">First Name: {user.name}</li>
        <li className="user-detail-item">Location: {user.location}</li>
        <li className="user-detail-item">Company: {user.company}</li>
        <li className="user-detail-item">Followers: {user.followers}</li>
        <li className="user-detail-item">Following: {user.following}</li>
        <li className="user-detail-item">
          Public Repositories: {user.public_repos}
        </li>
        <li className="user-detail-item">
          Profile URL:{" "}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            {user.html_url}
          </a>
        </li>
        {/* Add more details as needed */}
      </ul>
    </div>
  );
};

export default UserDetails;

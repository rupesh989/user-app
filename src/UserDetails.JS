import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserDetails.css";

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching user details. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="user-details-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          {error && <p className="error-message">{error}</p>}
          <h2 className="user-details-heading">User Detail</h2>
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
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default UserDetails;

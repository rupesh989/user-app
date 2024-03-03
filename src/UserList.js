import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-heading ">User List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          {error && <p className="error-message">{error}</p>}
          <ul className="user-list">
            {users.map((user) => (
              <li
                key={user.id}
                className={`user-item ${
                  selectedUser && selectedUser.login === user.login
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleUserClick(user)}
              >
                <Link to={`/user/${user.login}`} className="user-link">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="user-avatar"
                  />{" "}
                  <span className="user-login">{user.login}</span>
                </Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default UserList;

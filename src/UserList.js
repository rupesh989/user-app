import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-heading">User List</h2>
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
              />
              <span className="user-login">{user.login}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

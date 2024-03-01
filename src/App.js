import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:username" element={<UserDetails />} />
    </Routes>
  );
};

export default App;

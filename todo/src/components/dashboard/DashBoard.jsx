import React from "react";
import AddTask from "../tasks/AddTask";
import Tasks from "../tasks/Tasks";
const DashBoard = () => {
  return (
    <>
      <h3>Dashboard</h3>
      <AddTask />
      <Tasks />
    </>
  );
};

export default DashBoard;

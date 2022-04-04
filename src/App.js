import React, { useState } from "react";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div className="App p-5">
      <div className="addUser">
        <input
          type="text"
          placeholder="name.."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            )
          }
        >
          Add User
        </button>
      </div>
      <div className="displayUser">
        {userList.map((user) => (
          <div>
            <h2>User : {user.name}</h2>
            <h3>username : {user.username}</h3>
            <input
              type="text"
              placeholder="New username.."
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button
              onClick={() =>
                dispatch(updateUsername({ id: user.id, username: newUsername }))
              }
            >
              Update username{" "}
            </button>
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
              Delete Username{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

// LoginPage.jsx

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/LoginPage.css";
import { CODE_MAP } from "../constants/conditions";

function LoginPage(props) {
  const [id, setId] = useState(""); // 设置初始值为空字符串, 每次用户在输入框中输入内容时都会调用它更新id的值
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  function checkLogin(id, name, code) {
    if (id.trim() === "") {
      alert("⚠️ Connect ID cannot be empty. Please enter valid ID.");
      return false;
    }

    if (id.length !== 32) {
      alert(
        "Invalid Connect ID! Please ensure you enter a correct ID with 32 digits."
      );
      return false;
    }

    if (!name || name.trim() === "") {
      alert("⚠️ Name cannot be empty. Please enter valid name.");
      return false;
    }

    if (!code || code.trim() === "") {
      alert("⚠️ Group code cannot be empty. Please enter valid details.");
      return false;
    }

    if (!(code in CODE_MAP)) {
      alert("⚠️ Invalid code! Please check the condition code in the survey.");
      return false;
    }

    return true;
  }

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h1 className="login-title">
          Welcome!{" "}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </h1>{" "}
        <TextField
          id="login-id"
          label="Qualtrics ID"
          variant="outlined"
          value={id}
          placeholder="123456"
          onChange={(e) => {
            setId(e.target.value);
          }}
          className="input-field"
          InputProps={{
            style: {
              textAlign: "center",
            },
          }}
          InputLabelProps={{
            style: {
              color: id ? "#000" : "#ccc",
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: id ? "#000" : "#ccc",
            },
          }}
        />
        <TextField
          id="login-name"
          label="Name"
          variant="outlined"
          value={name}
          placeholder="Your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="input-field"
          InputProps={{
            style: {
              textAlign: "center",
            },
          }}
          InputLabelProps={{
            style: {
              color: name ? "#000" : "#ccc",
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: name ? "#000" : "#ccc",
            },
          }}
        />
        <TextField
          id="login-code"
          label="Condition"
          variant="outlined"
          value={code}
          placeholder="sample"
          onChange={(e) => {
            setCode(e.target.value);
          }}
          className="input-field"
          InputProps={{
            style: {
              textAlign: "center",
            },
          }}
          InputLabelProps={{
            style: {
              color: code ? "#000" : "#ccc",
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              color: code ? "#000" : "#ccc",
            },
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (checkLogin(id, name, code)) {
              props.handleLogin(id, name, code);
            }
          }}
          className="login-button"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;

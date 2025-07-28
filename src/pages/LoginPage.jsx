// LoginPage.jsx

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/LoginPage.css";
import { CODE_MAP } from "../constants/conditions";
import { writeUserMetaState } from "../services/firebaseService";

function LoginPage(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { showSnackbar } = props;

  function checkLogin(id, name, code) {
    if (id.trim() === "") {
      showSnackbar("Connect ID cannot be empty. Please enter valid ID.");
      return false;
    }
    if (id.length !== 32) {
      showSnackbar("Invalid Connect ID! It must be 32 digits.");
      return false;
    }
    if (name.trim() === "") {
      showSnackbar("Name cannot be empty. Please enter valid name.");
      return false;
    }
    if (code.trim() === "") {
      showSnackbar("Group code cannot be empty. Please enter valid details.");
      return false;
    }
    if (!(code in CODE_MAP)) {
      showSnackbar(
        "Invalid code! Please check the condition code in the survey."
      );
      return false;
    }

    return true;
  }

  const handleLoginSubmit = async (id, name, code) => {
    if (!checkLogin(id, name, code)) return;

    const timestamp = new Date();
    const metaData = {
      name,
      condition: code,
      createdAt: timestamp,
    };

    try {
      setIsLoading(true);
      showSnackbar(
        "Checking your progress. Please wait for a few seconds",
        "info"
      );

      await writeUserMetaState(id, metaData);
      props.handleLogin(id, name, code);
    } catch (error) {
      console.error("Firestore write failed:", error);
      showSnackbar("Login failed. Please check your network or try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h1 className="login-title">
          Welcome!{" "}
          <span role="img" aria-label="emoji">
            😊
          </span>
        </h1>{" "}
        {/* Connect ID input: expects a 32-digit numeric string */}
        <TextField
          id="login-id"
          label="Connect ID (32-digit number)"
          variant="outlined"
          value={id}
          placeholder="e.g., 01234567890123456789012345678901"
          onChange={(e) => setId(e.target.value)}
          className="input-field"
        />
        <TextField
          id="login-name"
          label="Preferred Name"
          variant="outlined"
          value={name}
          placeholder="e.g., Alex, Lily"
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <TextField
          id="login-code"
          label="Condition Code (3-digit)"
          variant="outlined"
          value={code}
          placeholder="e.g., XYZ"
          onChange={(e) => setCode(e.target.value)}
          className="input-field"
        />
        <Button
          variant="contained"
          onClick={() => handleLoginSubmit(id, name, code)}
          className="login-button"
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;

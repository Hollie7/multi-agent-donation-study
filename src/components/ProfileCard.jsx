// ProfileCard.jsx
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/ProfileCard.css";

const ProfileCard = ({ profileData, logo, onClose }) => {
  if (!profileData || Object.keys(profileData).length === 0) {
    return null;
  }

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h2 className="profile-card-title">Profile</h2>
        <CloseIcon onClick={onClose} className="profile-card-close-icon" />
      </div>
      <div className="profile-card-logo">
        <img src={logo} alt="Bot Logo" className="bot-logo" />
      </div>
      <div className="profile-card-content">
        <p>
          <strong>Age:</strong> {profileData.ageRange}
        </p>
        <p>
          <strong>Occupation:</strong> {profileData.occupation}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;

// ProfileCard.jsx
import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/ProfileCard.css";

const ProfileCard = ({ profileData, logo, onClose }) => {
  console.log("ProfileCard profileData:", profileData);

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
          <strong>Gender:</strong> {profileData.gender}
        </p>
        <p>
          <strong>Occupation:</strong> {profileData.occupation}
        </p>
        <p>
          <strong>Ethnicity:</strong> {profileData.ethnicity}
        </p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  profileData: PropTypes.object.isRequired,
  logo: PropTypes.string, // 新增属性类型检查
  onClose: PropTypes.func.isRequired,
};

export default ProfileCard;

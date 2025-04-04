//ProfileCardForIntro.jsx

import React from "react";
import PropTypes from "prop-types";
import "../styles/ProfileCardForIntro.css";

const ProfileCardForIntro = ({ profileData, logo, name }) => {
  return (
    <div className="profile-card-intro">
      <p className="profile-card-intro-name">{name || "N/A"}</p>
      <div className="profile-card-header-intro">
        <img src={logo} alt="Bot Logo" className="profile-logo-intro" />
      </div>
      <div className="profile-card-content-intro">
        <p style={{ fontSize: "15px" }}>
          <strong>Name:</strong> {name || "N/A"}
        </p>
        <p style={{ fontSize: "15px" }}>
          <strong>Age:</strong> {profileData.ageRange || "N/A"}
        </p>
        <p style={{ fontSize: "15px" }}>
          <strong>Occupation:</strong> {profileData.occupation || "N/A"}
        </p>
      </div>
    </div>
  );
};

ProfileCardForIntro.propTypes = {
  profileData: PropTypes.object.isRequired,
  logo: PropTypes.string.isRequired,
};

export default ProfileCardForIntro;

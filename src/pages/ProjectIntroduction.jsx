// ProjectIntroduction.jsx
import React, { useState, useEffect } from "react";
import ProfileCardForIntro from "../components/ProfileCardForIntro";
import { getBotLogo } from "../utils/getBotLogo";
import { getDisplayName } from "../utils/getDisplayName";
import { Button } from "@mui/material";
import "../styles/ProjectIntroduction.css";
import { botNames } from "../constants/botNames";

const ProjectIntroduction = (props) => {
  const { code, botsProfile, handleNext } = props;

  // Determine which bots to display based on code
  const displayedBots =
    code >= 0 && code <= 3 ? botNames : botNames.slice(0, 1);
  const isSingleBot = displayedBots.length === 1;
  // Group 0, 1, 4, 5 are in-group
  const isInGroup = code <= 1 || code == 4 || code == 5;

  return (
    <div className="project-intro">
      <h1>
        {isSingleBot
          ? "Meet Your Chat Companion 🤖!"
          : "Chat with Your AI Friends 👨‍👧‍👧!"}
      </h1>

      <div className="project-intro-description">
        {isSingleBot ? (
          <>
            <p>
              You will now interact with a virtual agent trained on real chat
              data from people with a{" "}
              <b>{isInGroup ? "similar" : "different"}</b> demographic
              background as yours.
            </p>
            <p>
              Read the agent’s profile below 👇 and get ready for an engaging,
              insightful conversation about money and charity 💬.
            </p>
          </>
        ) : (
          <>
            <p>
              You will now interact with a group of virtual agents, each trained
              using real conversations from people with a{" "}
              <b>{isInGroup ? "similar" : "different"}</b> background from
              yours.
            </p>
            <p>
              Read their profiles below 👇 and get ready to explore money
              distribution and charity through engaging, thoughtful
              conversations 💬.
            </p>
          </>
        )}
      </div>

      <div className="profile-cards-container">
        {displayedBots.map((botName) => {
          const profile = botsProfile[botName] || {};
          const displayName = getDisplayName(botName);
          const logo = getBotLogo(botName, botsProfile);

          return (
            <ProfileCardForIntro
              key={botName}
              profileData={profile}
              logo={logo}
              name={displayName}
            />
          );
        })}
      </div>
      <Button onClick={handleNext} className="project-intro-button">
        Next
      </Button>
    </div>
  );
};

export default ProjectIntroduction;

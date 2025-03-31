// ProjectIntroduction.jsx
import React from "react";
import ProfileCardForIntro from "../components/ProfileCardForIntro";
import { getBotLogo } from "../functions/getBotLogo";
import { Button } from "@mui/material";
import "../styles/ProjectIntroduction.css";
import { botNames } from "../constants/botNames";

const ProjectIntroduction = ({ peopleData = {}, handleNext, code }) => {
  if (!peopleData || Object.keys(peopleData).length === 0) {
    return <div>Loading...</div>;
  }

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
      You will now interact with a virtual agent trained on real chat data from people with a{" "}
      <b>{isInGroup ? "similar" : "different"}</b> demographic background as yours. This agent also completed the same task you did earlier.
    </p>
    <p>
      Together, you will reflect on the task and discuss your views on donation. The agent is designed to speak in a realistic, human-like way based on the data it was trained on.
    </p>
    <p>
      Read the agent’s profile below 👇 and get ready for an engaging, insightful conversation about money and charity 💬.
    </p>
  </>
) : (
  <>
    <p>
      You will now interact with a group of virtual agents, each trained using real conversations from people with a{" "}
      <b>{isInGroup ? "similar" : "different"}</b> background from yours.
    </p>
    <p>
      These agents completed the same task and bring diverse perspectives based on their training data. Our goal is to understand how interacting with multiple agents might influence your thinking.
    </p>
    <p>
      Read their profiles below 👇 and get ready to explore money distribution and charity through engaging, thoughtful conversations 💬.
    </p>
  </>
)}
      </div>

      <div className="profile-cards-container">
        {displayedBots.map((botName) => (
          <ProfileCardForIntro
            key={botName}
            profileData={peopleData[botName] || {}}
            logo={getBotLogo(botName, peopleData)}
            name={botName}
          />
        ))}
      </div>
      <Button
        onClick={handleNext}
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "12px 24px", // 加大按钮的尺寸
          fontSize: "1.4rem", // 增大字体
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)", // 更立体的阴影
          transition: "background-color 0.2s ease, transform 0.1s ease",
          textTransform: "none",
          marginTop: "20px",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
        }}
        onMouseDown={(e) => {
          e.target.style.transform = "scale(0.8)"; // 模拟按下的效果
          e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.15)";
        }}
        onMouseUp={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default ProjectIntroduction;

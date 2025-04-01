// ActivityIntro.jsx

import React from "react";
import { Button } from "@mui/material";
import "../styles/ActivityIntro.css"; // 导入CSS样式

function ActivityIntro(props) {
  const handleNext = () => {
    // 导航到捐款页面或其他流程
    props.handleNext();
  };

  return (
    <div className="activity-intro-container">
      <h1 className="activity-intro-title">
        {/* Study Overview & <i>Save The Children</i> 🙌 */}
        Activity Overview
      </h1>
      <div className="activity-intro-description">
        <p>
          In this final part of the study, you'll engage in a conversation about
          your recent task and the subject of donations. This topic is related
          to <i>Save the Children</i>, a global charity dedicated to supporting
          children in need.
        </p>
        <p>
          We are interested in how people think about distributing money—whether
          to keep it, share it, or donate it—and how these choices are shaped
          through discussion. Your insights will help us better understand
          attitudes toward charitable giving and financial decision-making.
        </p>
      </div>

      <Button
        variant="contained"
        color="primary"
        className="activity-intro-button"
        onClick={handleNext}
        style={{
          backgroundColor: "#4caf50",
          color: "white",
          padding: "10px 20px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.2s ease, transform 0.1s ease",
          textTransform: "none",
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
          e.target.style.transform = "scale(0.8)";
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
}

export default ActivityIntro;

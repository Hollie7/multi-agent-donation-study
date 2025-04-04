// ActivityIntro.jsx

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "../styles/ActivityIntro.css";

function ActivityIntro(props) {
  // const [showButton, setShowButton] = useState(false); // Track whether to show the button
  const [secondsLeft, setSecondsLeft] = useState(10); // Countdown seconds

  const handleNext = () => {
    props.handleNext();
  };

  useEffect(() => {
    // Set up countdown timer on mount
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer); // Stop timer when countdown ends
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="activity-intro-container">
      <div className="activity-intro-box">
        <h1 className="activity-intro-title">Activity Overview</h1>

        <div className="activity-intro-description">
          <p>
            In this second part of the study, you'll engage in a conversation
            about your survey task and the subject of donations. This topic is
            related to <i>Save the Children</i>, a global charity dedicated to
            supporting children in need.
          </p>
          <p>
            We are interested in how people think about distributing
            money—whether to keep it, share it, or donate it—and how these
            choices are shaped through discussion. Your insights will help us
            better understand attitudes toward charitable giving and financial
            decision-making.
          </p>
        </div>

        {/* Show the Next button only after 10 seconds */}

        <Button
          // variant="contained"
          className="activity-intro-button"
          onClick={handleNext}
          disabled={secondsLeft > 0}
        >
          {secondsLeft > 0 ? `Next (${secondsLeft})` : "Next"}
        </Button>
      </div>
    </div>
  );
}

export default ActivityIntro;

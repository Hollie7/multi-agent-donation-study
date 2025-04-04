import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SaveTheChildrenImage from "../assets/donation_intro/save_the_children_image.png"; // Replace with actual image import
import "../styles/CharityIntroduction.css";

function CharityIntroduction(props) {
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
    <div className="charity-introduction-container">
      <div className="charity-introduction-content">
        <h1 className="charity-introduction-title">
          Learn About <strong>Save the Children</strong>🏛️
        </h1>

        <p className="charity-introduction-text">
          The charity that we will look at today is{" "}
          <strong>Save the Children</strong>.
        </p>

        <img
          src={SaveTheChildrenImage}
          alt="Save the Children"
          className="charity-introduction-image"
        />

        <p className="charity-introduction-source">
          Image Source:{" "}
          <a
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unsplash
          </a>
        </p>

        <p className="charity-introduction-text">
          Save the Children is a leading global charity founded in 1919,
          dedicated to improving the lives of vulnerable children worldwide. The
          organization provides critical services such as education, healthcare,
          and emergency relief in over 100 countries, particularly in areas
          affected by poverty, conflict, and natural disasters.
        </p>

        <p className="charity-introduction-text">
          <strong>Key Impact Areas:</strong>
        </p>

        <ul className="charity-introduction-list">
          <li>
            <strong>Emergency Response:</strong> Rapid relief during crises,
            offering food, shelter, and medical care.
          </li>
          <li>
            <strong>Education:</strong> Expanding access to quality education to
            empower future generations.
          </li>
          <li>
            <strong>Advocacy:</strong> Influencing global policies to protect
            children's rights.
          </li>
        </ul>

        <div className="charity-introduction-button-wrapper">
          <Button
            className="charity-intro-next-button"
            onClick={handleNext}
            disabled={secondsLeft > 0} // Disable button while countdown is active
          >
            {secondsLeft > 0 ? `Next (${secondsLeft})` : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CharityIntroduction;

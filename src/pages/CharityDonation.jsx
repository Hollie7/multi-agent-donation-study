//CharityDonation.jsx
import React, { useState, useContext, useEffect } from "react";
import "../styles/CharityDonation.css";
import { Slider, Button } from "@mui/material";
import { AuthContext } from "../contexts/contexts";
import { writeUserDonation } from "../services/firebaseService";

function CharityDonation(props) {
  const [donationAmount, setDonationAmount] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(5); // Countdown seconds
  const userId = useContext(AuthContext);
  const { showSnackbar } = props;

  useEffect(() => {
    // Countdown for enabling the Next button
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSliderChange = (event, newValue) => {
    setDonationAmount(newValue);
  };

  const handleNext = async () => {
    try {
      await writeUserDonation(userId, donationAmount);

      props.handleNext(donationAmount);
    } catch (error) {
      console.error("Failed to save donation amount:", error);
      showSnackbar("Failed to save. Please try again.");
    }
  };

  return (
    <div className="charity-donation-container">
      <div className="charity-donation-content">
        <h1 className="charity-donation-title">Make a Donation ❤️</h1>

        <p className="charity-donation-text">
          You have earned <b>$3</b> from the previous task. How much of this
          amount would you like to donate to <i>Save the Children</i>?
          <br />
          <br />
          Please indicate the amount you wish to donate to{" "}
          <i>Save the Children</i> from your $3 earnings. If you do not wish to
          donate, please click "Next" to continue.
        </p>

        <div className="charity-donation-slider">
          <Slider
            value={donationAmount}
            onChange={handleSliderChange}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.5}
            marks
            min={0}
            max={3}
          />
        </div>

        <p className="charity-donation-amount">
          Selected Donation Amount: <b>${donationAmount.toFixed(2)}</b>
        </p>

        <div className="donation-reminder">
          <p>
            After the study, the research team will process and forward your
            donation to <i>Save the Children</i>.
          </p>
        </div>

        <div className="charity-donation-button-wrapper">
          <Button
            className="charity-donation-button"
            onClick={handleNext}
            disabled={secondsLeft > 0}
          >
            {secondsLeft > 0 ? `Next (${secondsLeft})` : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CharityDonation;

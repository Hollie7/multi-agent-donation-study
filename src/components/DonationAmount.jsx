// DonationAmount.jsx
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import "../styles/DonationAmount.css";

const DonationAmount = ({ handleSubmitRating }) => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (!showModal) return;

    let timer;
    if (secondsLeft > 0) {
      timer = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else {
      setIsButtonEnabled(true);
    }

    return () => clearTimeout(timer);
  }, [secondsLeft, showModal]);

  const handleSliderChange = (event, newValue) => {
    setDonationAmount(newValue);
  };

  const handleSubmit = () => {
    if (!isButtonEnabled) return;
    handleSubmitRating(donationAmount);
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="donation-amount-container">
      <div className="donation-amount-modal">
        <div className="donation-amount-modal-header">
          <h2>Make a Donation</h2>
        </div>
        <p>
          You have earned $3 from the previous task. Please select how much of
          your $3 you would like to donate to Save the Children. If you prefer
          not to donate, simply select $0 and click "Next" to continue.
        </p>
        <Slider
          value={donationAmount}
          onChange={handleSliderChange}
          step={0.5}
          min={0}
          max={3}
          valueLabelDisplay="auto"
          marks
          sx={{
            "& .MuiSlider-markLabel": {
              fontSize: "13px",
              color: "#333",
            },
          }}
        />
        <p>Selected Donation Amount: ${donationAmount}</p>
        <p className="donation-reminder">
          💡 Note: The amount you select will be directly deducted from your $3
          payment. After the task is completed, the research team will donate
          your selected amount to <i>Save the Children</i> on your behalf.
        </p>

        <Button
          onClick={handleSubmit}
          variant="contained"
          color={isButtonEnabled ? "primary" : "inherit"}
          disabled={!isButtonEnabled}
        >
          {isButtonEnabled ? "Confirm Donation" : `Confirm (${secondsLeft}s)`}
        </Button>
      </div>
    </div>
  );
};

export default DonationAmount;

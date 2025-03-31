// DonationAmount.jsx
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/DonationAmount.css";

const DonationAmount = ({ handleSubmitRating }) => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const handleSliderChange = (event, newValue) => {
    setDonationAmount(newValue);
  };

  const handleSubmit = () => {
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
          <h2>Make a Donation ❤️</h2>
        </div>
        <p>
          Please select the amount you would like to donate to "Save the
          Children".
        </p>
        <Slider
          value={donationAmount}
          onChange={handleSliderChange}
          step={0.5}
          min={0}
          max={5}
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
          Please note that you can choose any amount in your task payment, which
          will be directly deducted from your payment. After task completion,
          the research team will send the donations to <i>Save the Children</i>.
        </p>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default DonationAmount;

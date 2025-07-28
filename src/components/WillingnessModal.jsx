import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import "../styles/WillingnessModal.css";
import "../styles/DonationAmount.css";

const WillingnessModal = ({ handleSubmitWillingness }) => {
  const [willingness, setWillingness] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(5);
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
    setWillingness(newValue);
  };

  const handleSubmit = () => {
    if (!isButtonEnabled) return;
    handleSubmitWillingness(willingness);
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="donation-amount-container">
      <div className="donation-amount-modal">
        <div className="donation-amount-modal-header">
          <h2>Make a Distribution</h2>
        </div>
        <p>
          The research team has allocated an additional $3 that would be donated
          to Save the Children by default. You now have the option to keep part
          or all of this amount as a personal bonus.{" "}
          <strong className="highlight-keyword">
            Please select how much you would like to keep
          </strong>
          . The remaining amount, if any, will be donated.
        </p>
        <Slider
          value={willingness}
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
        <p>Selected Bonus Amount: ${willingness}</p>
        <p className="donation-reminder">
          💡 Note: This $3 is originally intended as a donation from the
          research team. The amount you choose to keep will be subtracted from
          that donation and added to your bonus payment. Any unclaimed portion
          will still go to <i>Save the Children</i> after the task is completed.
        </p>

        <Button
          onClick={handleSubmit}
          variant="contained"
          color={isButtonEnabled ? "primary" : "inherit"}
          disabled={!isButtonEnabled}
        >
          {isButtonEnabled
            ? "Confirm Distribution"
            : `Confirm (${secondsLeft}s)`}
        </Button>
      </div>
    </div>
  );
};

export default WillingnessModal;

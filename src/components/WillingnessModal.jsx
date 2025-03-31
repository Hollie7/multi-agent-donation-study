// WillingnessModal.jsx
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/WillingnessModal.css";
import "../styles/DonationAmount.css";

const WillingnessModal = ({ handleSubmitWillingness }) => {
  const [willingness, setWillingness] = useState(0);
  const [showModal, setShowModal] = useState(true);

  const handleSliderChange = (event, newValue) => {
    setWillingness(newValue);
  };

  const handleSubmit = () => {
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
          Please select how much of the additional $3 you would like to keep as
          part of your bonus.
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
              fontSize: "13px", // 设置标签字体大小
              color: "#333", // 设置标签颜色
            },
          }}
        />
        <p>Selected Bonus Amount: ${willingness}</p>
        <p className="donation-reminder">
          Please note: You may choose to keep any portion of the additional $3
          as part of your bonus. The remaining amount, if any, will be donated
          to <i>Save the Children</i> by the research team after the task is
          completed.
        </p>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default WillingnessModal;

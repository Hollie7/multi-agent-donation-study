//CharityDonation.jsx
import React, { useState, useContext } from "react";
import "../styles/CharityDonation.css"; 
import { Slider, Button } from "@mui/material";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/config";
import { AuthContext } from "../contexts/contexts"; // Adjust path if needed

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function CharityDonation(props) {
  const [donationAmount, setDonationAmount] = useState(0); 
  const userId = useContext(AuthContext);

  const handleSliderChange = (event, newValue) => {
    setDonationAmount(newValue);
  };

const handleNext = async () => {
    const profileRef = doc(db, "users", userId, "profile", "info");
    try {
      await setDoc(profileRef, {
        donationAmount_first: donationAmount,
      }, { merge: true });

      props.handleNext(donationAmount);
    } catch (error) {
      console.error("Failed to save donation amount:", error);
      alert("Failed to save. Please try again.");
    }
  };


  return (
    <div className="charity-donation-container">
      <div className="charity-donation-content">
        <h1 className="charity-donation-title">Make a Donation ❤️</h1>
        <p className="charity-donation-text">
          If you'd like, please select an amount to donate to{" "}
          <i>Save the Children</i>.
          <br />
          <br />
          Any amount you choose to donate will be deducted <b>only</b> from your
          bonus payment from the previous task. Your total compensation for the
          study will <b>not</b> be affected.
        </p>
        <p className="charity-donation-text">
          If you do not wish to donate, please click "Next" to continue.
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
          Selected Donation Amount: ${donationAmount}
        </p>
        <div className="donation-reminder">
          <p>
            You can donate up to <b>$3</b>, which is the amount you earned in
            the previous task. This amount will directly deducted from your task
            payment.
          </p>
          <p>
            After the study, the research team will send your donation to{" "}
            <i>Save the Children</i>.
          </p>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="charity-donation-button"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default CharityDonation;

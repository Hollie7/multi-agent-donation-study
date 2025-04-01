// src/components/SurveyPage.jsx
import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import {
  generateSimilarPrompt,
  generateDifferentPrompt,
} from "../constants/prompts";
import generateNewIdentities from "../functions/generateNewIdentities";
import "../styles/SurveyPage.css";
import { botNames } from "../constants/botNames";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/config.js";
import { AuthContext } from "../contexts/contexts";
import "../styles/CharityDonation.css";

function SurveyPage(props) {
  const [formData, setFormData] = useState(props.peopleData.User); // 这里读出User的初始数据
  const [isLoading, setIsLoading] = useState(false); // 添加加载状态

  const userId = useContext(AuthContext); // Get current user ID
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function validateRequiredFields(formData) {
    const requiredFields = ["ageRange", "gender", "ethnicity", "occupation"];
    return requiredFields.filter(
      (field) => formData[field] === "N/A" || !formData[field]
    );
  }

  async function generateBotIdentities(formData, code) {
    const selectedOccupations = new Set();
    const prompt =
      Math.floor(code / 2) % 2 === 0
        ? generateSimilarPrompt
        : generateDifferentPrompt;

    const identities = {};
    for (const name of botNames) {
      identities[name] = await generateNewIdentities(
        formData,
        prompt,
        selectedOccupations
      );
      selectedOccupations.add(identities[name].occupation);
    }

    return identities;
  }

  async function saveSurveyToDatabase(userId, formData) {
    const profileRef = doc(db, "users", userId, "profile", "info");
    await setDoc(profileRef, {
      ...formData,
      surveyCompleted: true,
      createdAt: new Date(),
    });
  }

  async function saveBotIdentitiesToDatabase(userId, identities) {
    for (const name of Object.keys(identities)) {
      const botRef = doc(db, "users", userId, "bots", name);
      await setDoc(botRef, identities[name]);
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true);

    const unansweredFields = validateRequiredFields(formData);
    if (unansweredFields.length > 0) {
      alert("Please answer all the questions on this page!");
      setIsLoading(false);
      return;
    }

    try {
      const identities = await generateBotIdentities(formData, props.code);
      await saveSurveyToDatabase(userId, formData);
      await saveBotIdentitiesToDatabase(userId, identities);

      // Update local state
      botNames.forEach((name) => {
        props.peopleData[name] = { ...identities[name] };
      });
      props.setPeopleData(props.peopleData);
      props.handleNext(formData);

      // alert("Submitted successfully ✔");
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="survey-page">
      <h2>Survey Page</h2>
      <p className="charity-donation-text">
        To help us better personalize our AI agents, please complete the survey
        based on your own information. Your responses will be used solely for
        the purpose of this study and will <b>not</b> be stored or shared after
        the experiment concludes.
      </p>
      <Card className="survey-card">
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Please select your age group:
            </FormLabel>
            <RadioGroup
              name="ageRange"
              value={formData.ageRange}
              onChange={handleChange}
            >
              <FormControlLabel
                value="18-30"
                control={<Radio />}
                label="18-30"
              />
              <FormControlLabel
                value="31-50"
                control={<Radio />}
                label="31-50"
              />
              <FormControlLabel
                value="More than 51"
                control={<Radio />}
                label="More than 51"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      <Card className="survey-card">
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              What gender do you identify as?
            </FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Non-binary"
                control={<Radio />}
                label="Non-binary"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      <Card className="survey-card">
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              What ethinicity do you identify with?
            </FormLabel>
            <RadioGroup
              name="ethnicity"
              value={formData.ethnicity}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Asian"
                control={<Radio />}
                label="Asian"
              />
              <FormControlLabel
                value="Black"
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value="European/White"
                control={<Radio />}
                label="European/White"
              />
              <FormControlLabel
                value="Indigenous"
                control={<Radio />}
                label="Indigenous"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>

      <Card className="survey-card">
        <CardContent>
          <FormControl component="fieldset">
            <FormLabel component="legend">What is your occupation?</FormLabel>
            <RadioGroup
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Business"
                control={<Radio />}
                label="Business"
              />
              <FormControlLabel
                value="Medical"
                control={<Radio />}
                label="Medical"
              />
              <FormControlLabel
                value="Government"
                control={<Radio />}
                label="Government"
              />
              <FormControlLabel
                value="Education"
                control={<Radio />}
                label="Education"
              />
              <FormControlLabel
                value="Service"
                control={<Radio />}
                label="Service"
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
              <FormControlLabel
                value="Prefer not to say"
                control={<Radio />}
                label="Prefer not to say"
              />
            </RadioGroup>
            {formData.occupation === "Other" && (
              <TextField
                name="occupationOther"
                value={formData.occupationOther}
                onChange={handleChange}
                label="Please specify"
              />
            )}
          </FormControl>
        </CardContent>
      </Card>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Center buttons horizontally
          justifyContent: "center", // Center buttons vertically
          width: "100%",
        }}
      >
        {isLoading ? (
          <CircularProgress /> // 显示加载动画
        ) : (
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "8px 16px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.2s ease, transform 0.1s ease",
              textTransform: "none",
              width: "100px",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            }}
            onMouseDown={(e) => {
              e.target.style.transform = "scale(0.95)";
              e.target.style.boxShadow = "0 3px 7px rgba(0, 0, 0, 0.15)";
            }}
            onMouseUp={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            }}
          >
            Next
          </Button>
        )}
      </div>

      <p>Please wait for a moment after pressing "Next"</p>
    </div>
  );
}

export default SurveyPage;

import "./styles/App.css";
import ChatWindow from "./pages/ChatWindow";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import { AuthContext } from "./contexts/contexts";
import SurveyPage from "./pages/SurveyPage";
import CharityIntroduction from "./pages/CharityIntroduction";
import CharityDonation from "./pages/CharityDonation";
import ProjectIntroduction from "./pages/ProjectIntroduction";
import ActivityIntro from "./pages/ActivityIntro";
import { CODE_MAP } from "./constants/conditions";
import {
  loadBotProfiles,
  loadUserDonation,
  loadUserDemographic,
} from "./services/firebaseService";
import { getLoginStatus } from "./services/loginHelper";
import GlobalSnackbar from "./components/GlobalSnackbar";

export default function App() {
  const [auth, setAuth] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState(-1);
  const [currentPage, setCurrentPage] = useState("login");
  const [donationAmount_first, setDonationAmountFirst] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const [userProfile, setUserProfile] = useState({});
  const [botsProfile, setBotsProfile] = useState({});

  const showSnackbar = (msg, severity = "info") => {
    setSnackbar({ open: true, message: msg, severity });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  async function handleLogin(id, name, code) {
    const codeNumber = CODE_MAP[code];

    setAuth(id);
    setName(name);
    setCode(codeNumber);

    const { message, page } = await getLoginStatus(id);
    const donationAmount = await loadUserDonation(id);
    const userDemographic = await loadUserDemographic(id);
    const botsProfile = await loadBotProfiles(id);

    setUserProfile(userDemographic);
    setBotsProfile(botsProfile);
    setDonationAmountFirst(donationAmount);

    showSnackbar(message, "success");

    setTimeout(() => {
      setCurrentPage(page);
    }, 1000);
  }

  function handleSurveyNext(updatedUserData) {
    setCurrentPage("activityintro");
  }

  function handleActivityIntroNext() {
    setCurrentPage("charity");
  }

  function handleCharityNext() {
    setCurrentPage("donation");
  }

  function handleDonationNext(donationAmount) {
    setDonationAmountFirst(donationAmount);
    setCurrentPage("projectIntroduction");
  }

  function handleProjectIntroductionNext() {
    setCurrentPage("chat");
  }

  return (
    <div>
      <AuthContext.Provider value={auth}>
        <div className="App">
          {currentPage === "login" && (
            <LoginPage handleLogin={handleLogin} showSnackbar={showSnackbar} />
          )}
          {currentPage === "survey" && (
            <SurveyPage
              handleNext={handleSurveyNext}
              userProfile={userProfile}
              setUserProfile={setUserProfile}
              botsProfile={botsProfile}
              setBotsProfile={setBotsProfile}
              code={code}
            />
          )}
          {currentPage === "activityintro" && (
            <ActivityIntro handleNext={handleActivityIntroNext} />
          )}
          {currentPage === "charity" && (
            <CharityIntroduction handleNext={handleCharityNext} />
          )}
          {currentPage === "donation" && (
            <CharityDonation
              handleNext={handleDonationNext}
              showSnackbar={showSnackbar}
            />
          )}
          {currentPage === "projectIntroduction" && (
            <ProjectIntroduction
              handleNext={handleProjectIntroductionNext}
              code={code}
              userProfile={userProfile}
              botsProfile={botsProfile}
            />
          )}

          {currentPage === "chat" && (
            <ChatWindow
              userId={auth}
              name={name}
              code={code}
              userProfile={userProfile}
              botsProfile={botsProfile}
              donationAmount_first={donationAmount_first}
              // logoutHandler={() => setAuth("")}
            />
          )}
        </div>
      </AuthContext.Provider>
      <GlobalSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={closeSnackbar}
      />
    </div>
  );
}

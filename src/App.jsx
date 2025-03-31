import "./styles/App.css";
import ChatWindow from "./pages/ChatWindow";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import { AuthContext } from "./contexts/contexts";
import SurveyPage from "./pages/SurveyPage";
import CharityIntroduction from "./pages/CharityIntroduction";
import CharityDonation from "./pages/CharityDonation";
import WillingHelp from "./pages/WillingHelp";
import ProjectIntroduction from "./pages/ProjectIntroduction";
import ActivityIntro from "./pages/ActivityIntro";
import { initialPeopleData } from "./constants/initialPeople";
import { CODE_MAP } from "./constants/conditions";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config/config.js";

export default function App() {
  const [auth, setAuth] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState(-1);
  const [currentPage, setCurrentPage] = useState("login");
  const [peopleData, setPeopleData] = useState({});
  const [donationAmount_first, setDonationAmountFirst] = useState(0);
  const [willingness_first, setWillingnessFirst] = useState(1);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    setPeopleData(initialPeopleData);
  }, []);

  async function handleLogin(id, name, code) {
    const codeNumber = CODE_MAP[code];
  
    setAuth(id);
    setName(name);
    setCode(codeNumber);
  
    const profileRef = doc(db, "users", id, "profile", "info");
    const profileSnap = await getDoc(profileRef);
  
    if (profileSnap.exists()) {
      const profileData = profileSnap.data();
      console.log("Profile data:", profileData);
  
      if (!profileData.surveyCompleted) {
        setCurrentPage("survey");
      } else if (profileData.donationAmount_first === undefined) {
        // donationAmount not yet filled
        setCurrentPage("activityintro");
      } else {
        // all done, go to chat
        setPeopleData(profileData.peopleData || {});
        setDonationAmountFirst(profileData.donationAmount_first);
        setCurrentPage("chat");
      }
    } else {
      // No profile info, treat as new user
      setCurrentPage("survey");
    }
  }

  function handleSurveyNext(updatedUserData) {
    const updatedPeopleData = {
      ...peopleData,
      User: updatedUserData,
    };
    setPeopleData(updatedPeopleData);
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
    <AuthContext.Provider value={auth}>
      <div className="App">
        {currentPage === "login" && <LoginPage handleLogin={handleLogin} />}
        {currentPage === "survey" && (
          <SurveyPage
            handleNext={handleSurveyNext}
            peopleData={peopleData}
            setPeopleData={setPeopleData}
            code={code}
          />
        )}
         {currentPage === "activityintro" && (
          <ActivityIntro
            handleNext={handleActivityIntroNext}
            peopleData={peopleData}
          />
        )}
        {currentPage === "charity" && (
          <CharityIntroduction
            handleNext={handleCharityNext}
            peopleData={peopleData}
          />
        )}
        {currentPage === "donation" && (
          <CharityDonation
            handleNext={handleDonationNext}
            peopleData={peopleData}
          />
        )}
        {currentPage === "willingHelp" && (
          <WillingHelp
            handleNext={handleWillingHelpNext}
            peopleData={peopleData}
          />
        )}
        {currentPage === "projectIntroduction" && (
          <ProjectIntroduction
            handleNext={handleProjectIntroductionNext}
            peopleData={peopleData}
            code={code}
          />
        )}

        {currentPage === "chat" && (
          <ChatWindow
            userId={auth}
            name={name}
            code={code}
            peopleData={peopleData}
            donationAmount_first={donationAmount_first}
            willingness_first={willingness_first}
            logoutHandler={() => setAuth("")}
          />
        )}
      </div>
    </AuthContext.Provider>
  );
}

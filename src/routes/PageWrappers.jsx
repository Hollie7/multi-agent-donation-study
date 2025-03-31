// src/routes/PageWrappers.js
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SurveyPage from "../pages/SurveyPage";
import CharityIntroduction from "../pages/CharityIntroduction";
import CharityDonation from "../pages/CharityDonation";
import WillingHelp from "../pages/WillingHelp";
import ProjectIntroduction from "../pages/ProjectIntroduction";
import ActivityIntro from "../pages/ActivityIntro";
import EntityType from "../enums/EntityTypes";

export function LoginPageWrapper({ setAuth, setUserInfo }) {
  const navigate = useNavigate();
  const handleLogin = (id, name, code) => {
    setAuth(id);
    setUserInfo({ name, code });
    navigate("/survey"); // 登录成功跳转
  };
  return <LoginPage handleLogin={handleLogin} />;
}

export function SurveyPageWrapper({ setPeopleData, peopleData, userInfo }) {
  const navigate = useNavigate();
  const handleNext = (updatedUserData) => {
    setPeopleData((prev) => ({
      ...prev,
      [EntityType.User.name]: {
        ...prev[EntityType.User.name],
        ...updatedUserData,
      },
    }));
    navigate("/charity");
  };
  return (
    <SurveyPage
      handleNext={handleNext}
      peopleData={peopleData}
      code={userInfo.code}
    />
  );
}

export function CharityIntroductionWrapper({ peopleData }) {
  const navigate = useNavigate();
  return (
    <CharityIntroduction
      handleNext={() => navigate("/activity-intro")}
      peopleData={peopleData}
    />
  );
}

export function ActivityIntroWrapper({ peopleData }) {
  const navigate = useNavigate();
  return (
    <ActivityIntro
      handleNext={() => navigate("/donation")}
      peopleData={peopleData}
    />
  );
}

export function CharityDonationWrapper({ peopleData, setDonationAmount }) {
  const navigate = useNavigate();
  const handleNext = (amount) => {
    setDonationAmount(amount);
    navigate("/willing-help");
  };
  return <CharityDonation handleNext={handleNext} peopleData={peopleData} />;
}

export function WillingHelpWrapper({ peopleData, setWillingness }) {
  const navigate = useNavigate();
  const handleNext = (willingnessValue) => {
    setWillingness(willingnessValue);
    navigate("/project-introduction");
  };
  return <WillingHelp handleNext={handleNext} peopleData={peopleData} />;
}

// 项目介绍页
export function ProjectIntroductionWrapper({ peopleData }) {
  const navigate = useNavigate();
  return (
    <ProjectIntroduction
      handleNext={() => navigate("/chat")}
      peopleData={peopleData}
    />
  );
}

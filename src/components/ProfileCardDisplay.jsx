//ProfileCardDisplay.jsx
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import EntityType from "../enums/EntityTypes";
import { getBotLogo } from "../utils/getBotLogo"; // 使用提取的 getBotLogo 函数

function ProfileCardDisplay(props) {
  const [showProfileCard, setShowProfileCard] = useState(true);

  const handleProfileClose = () => {
    setShowProfileCard(false);
    props.onClose("continue"); // 调用从父组件传递的回调函数，并传递消息内容
  };

  const botLogo = getBotLogo(props.message.senderName, props.peopleData); // 获取 logo
  return (
    <div className="message messageReceived">
      <div className="messageReceivedAvatarWrapper">
        <img src={botLogo} alt="Chatbot" className="messageReceivedAvatar" />
      </div>
      <div className="messageText messageTextHost">
        <div
          className={`messageSenderName ${
            props.message.sender === EntityType.Bot1
              ? "messageSenderName1"
              : "messageSenderName2"
          }`}
        >
          {props.message.senderName}
        </div>
        <div>
          {typeof props.message.content === "function"
            ? props.message.content(props.name, props.peopleData) // 如果 content 是函数，执行它并传递参数
            : props.message.content}{" "}
        </div>
        {showProfileCard && (
          <ProfileCard
            profileData={props.peopleData[props.message.senderName]}
            donationAmount_first={props.donationAmount_first}
            logo={botLogo} // 传递 logo
            onClose={handleProfileClose} // 使用handleProfileClose
            willingness_first={props.willingness_first}
          />
        )}
      </div>
    </div>
  );
}

export default ProfileCardDisplay;

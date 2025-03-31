//MessageFromBot.jsx
import "../styles/Message.css";
import EntityType from "../enums/EntityTypes";
import MessageType from "../enums/MessageTypes";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import { getBotLogo } from "../functions/getBotLogo";

function MessageFromBot(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleAvatarClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div
      className="message messageReceived"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="messageReceivedAvatarWrapper">
        <img
          src={getBotLogo(props.message.senderName, props.peopleData)}
          alt="Chatbot"
          className={`messageReceivedAvatar ${
            isHovered ? "avatarHovered" : ""
          }`}
          onClick={handleAvatarClick}
        />
      </div>

      {props.message.type === MessageType.Image ? (
        <div className="messageImage">
          <img
            src={`/images/${props.message.content}`}
            width="250"
            height="250"
          />
        </div>
      ) : props.message.sender === EntityType.Host ? (
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
          <div
            dangerouslySetInnerHTML={{
              __html:
                typeof props.message.content === "function"
                  ? props.message.content(
                      props.name,
                      props.peopleData,
                      props.donationAmount_first,
                      props.willingness_first
                    )
                  : props.message.content,
            }}
          />
        </div>
      ) : (
        <div className="messageText messageTextReceived">
          <div
            className={`messageSenderName ${
              props.message.sender === EntityType.Bot1
                ? "messageSenderName1"
                : "messageSenderName2"
            }`}
          >
            {props.message.senderName}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                typeof props.message.content === "function"
                  ? props.message.content(
                      props.name,
                      props.peopleData,
                      props.donationAmount_first,
                      props.willingness_first
                    )
                  : props.message.content,
            }}
          />
        </div>
      )}
      {showProfile && (
        <ProfileCard
          profileData={props.peopleData[props.message.senderName]}
          logo={getBotLogo(props.message.senderName, props.peopleData)} // 传递 logo
          donationAmount_first={props.donationAmount_first}
          willingness_first={props.willingness_first}
          onClose={handleCloseProfile}
        />
      )}
    </div>
  );
}

export default MessageFromBot;

//MessageFromBot.jsx
import "../styles/Message.css";
import EntityType from "../enums/EntityTypes";
import MessageType from "../enums/MessageTypes";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import { getBotLogo } from "../utils/getBotLogo";

function MessageFromBot(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const {
    message,
    botsProfile,
    name,
    donationAmount_first,
    willingness_first,
  } = props;
  const senderName = message.senderName;
  const senderType = message.sender;
  const isImage = message.type === MessageType.Image;
  const isHost = senderType === EntityType.Host;

  const getSenderClass = () => {
    return senderType === EntityType.Bot1
      ? "messageSenderName1"
      : "messageSenderName2";
  };

  const renderContent = () => {
    const content =
      typeof message.content === "function"
        ? message.content(
            name,
            botsProfile,
            donationAmount_first,
            willingness_first
          )
        : message.content;

    const wrapperClass = isHost
      ? "messageText messageTextHost"
      : "messageText messageTextReceived";

    return (
      <div className={wrapperClass}>
        <div className={`messageSenderName ${getSenderClass()}`}>
          {senderName}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  };

  return (
    <div
      className="message messageReceived"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="messageReceivedAvatarWrapper">
        <img
          src={getBotLogo(message.sender.name, botsProfile)}
          alt="Chatbot"
          className={`messageReceivedAvatar ${
            isHovered ? "avatarHovered" : ""
          }`}
          onClick={() => setShowProfile(true)}
        />
      </div>

      {isImage ? (
        <div className="messageImage">
          <img src={`/images/${message.content}`} width="250" height="250" />
        </div>
      ) : (
        renderContent()
      )}

      {showProfile && (
        <ProfileCard
          profileData={botsProfile[message.sender.name]}
          logo={getBotLogo(message.sender.name, botsProfile)}
          donationAmount_first={donationAmount_first}
          willingness_first={willingness_first}
          onClose={() => setShowProfile(false)}
        />
      )}
    </div>
  );
}

export default MessageFromBot;

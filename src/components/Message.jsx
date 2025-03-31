//Message.jsx
import React from "react";
import "../styles/Message.css";
import MessageFromUser from "./MessageFromUser";
import MessageFromBot from "./MessageFromBot";
import MessageType from "../enums/MessageTypes.js";
import MessageSystemNotif from "./MessageSystemNotif";
import EntityType from "../enums/EntityTypes";
// import MessageRatingSlider from "./MessageRatingSlider";
import ProfileCardDisplay from "./ProfileCardDisplay";
import WillingnessModal from "./WillingnessModal";
import DonationAmount from "./DonationAmount";

function Message(props) {
  if (props.message.type === MessageType.System)
    return <MessageSystemNotif message={props.message} name={props.name} />;
  if (props.message.sender === EntityType.User)
    return <MessageFromUser message={props.message} />;
  if (props.message.type === MessageType.Rate)
    return (
      <DonationAmount
        message={props.message}
        name={props.name}
        handleSubmitRating={props.handleSubmitRating} // 传递提交逻辑
      />
    );
  if (props.message.type === MessageType.Profile_display) {
    return (
      <ProfileCardDisplay
        message={props.message}
        name={props.name}
        peopleData={props.peopleData} // 确保 peopleData 被传递
        onClose={props.onProfileCardClose} // 确保 onClose 回调被传递
        donationAmount_first={props.donationAmount_first}
        willingness_first={props.willingness_first}
      />
    );
  }
  if (props.message.type === MessageType.willingness) {
    return (
      <WillingnessModal
        handleSubmitWillingness={props.handleSubmitWillingness}
        onClose={props.onWillingnessModalClose} // 上层组件传递的关闭函数
      />
    );
  }
  return (
    <MessageFromBot
      message={props.message}
      name={props.name}
      peopleData={props.peopleData}
      donationAmount_first={props.donationAmount_first}
      willingness_first={props.willingness_first}
    />
  );
}

export default Message;

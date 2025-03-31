// MessageRatingSlider.jsx
import "../styles/Message.css"; // 引入MessageRatingSlider的样式
import bot1logo from "../assets/icons/bot1logo.png";
import bot2logo from "../assets/icons/bot2logo.png";
import bot3logo from "../assets/icons/bot3logo.png";
import bot4logo from "../assets/icons/bot4logo.png";
import bot5logo from "../assets/icons/bot5logo.png";
import hostlogo from "../assets/icons/hostlogo.png";
import EntityType from "../enums/EntityTypes";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

function MessageRatingSlider(props) {
  const [rating, setRating] = useState(5); // 存储评分状态

  return (
    <div className="message messageReceived">
      <div className="messageReceivedAvatarWrapper">
        <img
          src={
            props.message.sender === EntityType.Bot1
              ? bot1logo
              : props.message.sender === EntityType.Bot2
              ? bot2logo
              : props.message.sender === EntityType.Bot3
              ? bot3logo
              : props.message.sender === EntityType.Bot4
              ? bot4logo
              : props.message.sender === EntityType.Bot5
              ? bot5logo
              : hostlogo
          }
          alt="Chatbot"
          className="messageReceivedAvatar"
        />
      </div>
      {props.message.sender === EntityType.Host ? (
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
              ? props.message.content(props.name)
              : props.message.content}
          </div>
          <div className="messageRatingSlider">
            <ButtonGroup variant="outlined" aria-label="Basic button group">
              <Button
                sx={{
                  minWidth: "12px !important",
                  padding: "4px 8px !important",
                  fontSize: "1.5rem !important",
                }}
                onClick={() => props.handleSubmitRating(0)}
              >
                0
              </Button>
              <Button
                sx={{
                  minWidth: "12px !important",
                  padding: "4px 8px !important",
                  fontSize: "1.5rem !important",
                }}
                onClick={() => props.handleSubmitRating(1)}
              >
                1
              </Button>
              <Button
                sx={{
                  minWidth: "12px !important",
                  padding: "4px 8px !important",
                  fontSize: "1.5rem !important",
                }}
                onClick={() => props.handleSubmitRating(2)}
              >
                2
              </Button>
              <Button
                sx={{
                  minWidth: "12px !important",
                  padding: "4px 8px !important",
                  fontSize: "1.5rem !important",
                }}
                onClick={() => props.handleSubmitRating(3)}
              >
                3
              </Button>
              <Button
                sx={{
                  minWidth: "12px !important",
                  padding: "4px 8px !important",
                  fontSize: "1.5rem !important",
                }}
                onClick={() => props.handleSubmitRating(4)}
              >
                4
              </Button>
              <Button
                sx={{
                  minWidth: "12px !important",
                  padding: "4px 8px !important",
                  fontSize: "1.5rem !important",
                }}
                onClick={() => props.handleSubmitRating(5)}
              >
                5
              </Button>
            </ButtonGroup>
          </div>
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
          <div>
            {typeof props.message.content === "function"
              ? props.message.content(props.name)
              : props.message.content}
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageRatingSlider;

//MessageScreen.jsx
import React, { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import CircularProgress from "@mui/material/CircularProgress";
import MessageInput from "./MessageInput";
import Message from "./Message.jsx";
import "../styles/MessageScreen.css";

function MessageScreen(props) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        <div className="messageScreen">
          <SimpleBar style={{ height: 500, width: 800, zIndex: 10 }}>
            <div className={"messageListWrapper"}>
              {props.isLoading ? (
                <CircularProgress />
              ) : (
                props.messages.map((msg) => (
                  <Message
                    message={msg}
                    key={msg.id}
                    name={props.name}
                    peopleData={props.peopleData} // 确保 peopleData 被传递
                    donationAmount_first={props.donationAmount_first}
                    handleSubmitRating={props.handleSubmitRating}
                    onProfileCardClose={props.onProfileCardClose} // 传递关闭 ProfileCard 的回调函数
                    handleSubmitWillingness={props.handleSubmitWillingness} // 传递提交意愿的回调函数
                    willingness_first={props.willingness_first}
                  />
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
          </SimpleBar>
        </div>
        <MessageInput
          addMessage={props.addMessage}
          blockUserMessages={props.blockUserMessages}
          inputValue={props.inputValue} // 传递 inputValue
          setInputValue={props.setInputValue} // 传递 setInputValue
        />
      </div>
    </div>
  );
}

export default MessageScreen;

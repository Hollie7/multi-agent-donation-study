//MessageScreen.jsx
import React, { useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import CircularProgress from "@mui/material/CircularProgress";
import MessageInput from "./MessageInput";
import Message from "./Message.jsx";
import "../styles/MessageScreen.css";
import Skeleton from "@mui/material/Skeleton";

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
                    botsProfile={props.botsProfile}
                    donationAmount_first={props.donationAmount_first}
                    handleSubmitRating={props.handleSubmitRating}
                    onProfileCardClose={props.onProfileCardClose}
                    handleSubmitWillingness={props.handleSubmitWillingness}
                    // willingness_first={props.willingness_first}
                  />
                ))
              )}
              <div ref={messagesEndRef} />
            </div>
            {props.displayTyping ? (
              <>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Skeleton
                    animation="wave"
                    sx={{
                      bgcolor: "#F5F2EB",
                      marginLeft: "15px",
                    }}
                    variant="circular"
                    height={40}
                    width={40}
                  />
                  <Skeleton
                    animation="wave"
                    sx={{
                      bgcolor: "#F5F2EB",
                      marginLeft: "10px",
                      borderRadius: "20px",
                    }}
                    variant="rounded"
                    width={100}
                    height={40}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </SimpleBar>
        </div>
        <MessageInput
          addMessage={props.addMessage}
          blockUserMessages={props.blockUserMessages}
          inputValue={props.inputValue}
          setInputValue={props.setInputValue}
        />
      </div>
    </div>
  );
}

export default MessageScreen;

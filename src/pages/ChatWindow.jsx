// ChatWindow.jsx
import { useState, useContext, useEffect, useRef } from "react";
import MessageScreen from "../components/MessageScreen";
import MessageInput from "../components/MessageInput";
import MessageType from "../enums/MessageTypes";
import EntityType from "../enums/EntityTypes";
import { messageGroupsAllBots } from "../messages/messages";
import "../styles/ChatWindow.css";
import { firebaseConfig } from "../config/config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../contexts/contexts";
import Button from "@mui/material/Button";
import {
  writeMessages,
  loadChatMessages,
  loadUserStep,
  writeConversationStep,
  writeUserDonation,
  writeAcceptDonation,
} from "../services/firebaseService.js";
import { getGPTMessage } from "../services/openaiService.js";
import { getDisplayName } from "../utils/getDisplayName.js";

function ChatWindow(props) {
  const [messages, setMessages] = useState([]);
  const [conversationStep, setConversationStep] = useState(1);
  const [blockUserMessages, setBlockUserMessages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gptConversation, setGptConversation] = useState("");
  const [lastUserMessage, setLastUserMessage] = useState("");
  const [name, setName] = useState(props.name);
  const [isDisplayTyping, setIsDisplayTyping] = useState(false);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const userId = useContext(AuthContext);

  const { userProfile, botsProfile, donationAmount_first } = props;

  useEffect(() => {
    async function loadChat() {
      setIsLoading(true);
      try {
        const messages = await loadChatMessages(userId);
        const step = await loadUserStep(userId);

        setMessages(messages);
        setConversationStep(step);

        populateInitialMessages(
          step,
          messages,
          messageGroups,
          name,
          donationAmount_first
        );
      } catch (e) {
        console.error("Error loading chat:", e);
      } finally {
        setIsLoading(false);
      }
    }

    if (
      userId &&
      Object.keys(userProfile).length &&
      Object.keys(botsProfile).length
    ) {
      loadChat();
    }
  }, [userId, userProfile, botsProfile]);

  const messageGroups = messageGroupsAllBots[props.code];

  async function test_reset() {
    console.log("resetting...");

    await writeConversationStep(userId, 1);

    setMessages([]);
    setConversationStep(1);
    console.log("reseted.");
  }

  async function handleAddUserMessage(message) {
    addUserMessage(message);

    if (!blockUserMessages) {
      await writeMessages(userId, {
        step: conversationStep,
        type: "user",
        content: message,
      });

      await addBotMessages(conversationStep, message);
      await writeConversationStep(userId, conversationStep + 1);
      setConversationStep((s) => s + 1);
    }
  }

  function addUserMessage(message) {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, sender: EntityType.User },
    ]);
  }

  async function addBotMessages(step, lastUserMessage) {
    setBlockUserMessages(true);

    const messageGroup = messageGroups.find((g) => g.step === step);
    if (!messageGroup) return;

    const timer = (ms) => new Promise((res) => setTimeout(res, ms));

    for (let i = 0; i < messageGroup.messages.length; i++) {
      const msgTemplate = messageGroup.messages[i];

      const time = (1 + Math.random() * 1) * 1000;
      await timer(time);
      setIsDisplayTyping(true);

      await timer(msgTemplate.delay * 800);

      if (msgTemplate.type === MessageType.GPT) {
        const gptMessage = await getGPTMessage(
          msgTemplate.prompt(
            props.name,
            props.botsProfile,
            props.donationAmount_first
          ),
          lastUserMessage
        );

        const messageObj = {
          content: gptMessage,
          sender: msgTemplate.sender,
          senderName: msgTemplate.senderName,
          type: "gpt",
        };

        await writeMessages(userId, {
          step,
          type: "gpt",
          content: gptMessage,
          sender: msgTemplate.sender.name,
          index: i,
        });

        setIsDisplayTyping(false);
        setMessages((prev) => [...prev, messageObj]);
      } else {
        setIsDisplayTyping(false);
        setMessages((prev) => [...prev, msgTemplate]); // static message
      }
    }

    setBlockUserMessages(false);
  }

  function populateInitialMessages(
    step,
    userMessagesDocs,
    messageGroups,
    name,
    donationAmount_first
  ) {
    const msgs = [];

    // Map Firestore messages for fast lookup
    const userMessagesMap = new Map();
    userMessagesDocs.forEach((doc) => {
      userMessagesMap.set(doc.id, doc.data());
    });

    for (let i = 1; i < step; i++) {
      // 1. Add user message first
      const userMessageId = `${i}_user`;
      const userMessageData = userMessagesMap.get(userMessageId);

      if (userMessageData) {
        msgs.push({
          content: userMessageData.message,
          sender: EntityType.User,
          senderName: "User",
        });
      } else {
        console.warn(`Missing user message: ${userMessageId}`);
      }

      // 2. Add bot/static messages from messageGroups where step == i
      const group = messageGroups.find((g) => g.step === i);
      if (!group) continue;

      for (let j = 0; j < group.messages.length; j++) {
        const msg = group.messages[j];
        if (msg.type.name === "Message") {
          msgs.push({
            content: msg.content,
            sender: msg.sender,
            senderName: msg.senderName,
          });
        }

        if (msg.type.name === "GPT") {
          const gptMessageId = `${i}_gpt_${j}`;
          const gptMessageData = userMessagesMap.get(gptMessageId);

          if (gptMessageData) {
            const senderKey = gptMessageData.sender;
            const sender = EntityType[senderKey] || EntityType.Bot1;

            msgs.push({
              content: gptMessageData.message,
              sender: sender,
              senderName: getDisplayName(sender.name),
            });
          } else {
            console.warn(`Missing GPT message: ${gptMessageId}`);
          }
        }
      }
    }

    setMessages(msgs);
  }

  function handleProfileCardClose(message) {
    handleAddUserMessage(message);
  }

  async function handleSubmitSecondDonation(amount) {
    await writeUserDonation(userId, amount, "second");
    handleAddUserMessage(amount);
  }

  async function handleSubmitAcceptance(value) {
    await writeAcceptDonation(userId, value);
    handleAddUserMessage(value);
  }

  return (
    <div className="chatWindowContainer">
      {" "}
      <div className="chatWindow">
        {" "}
        <p className="chatWindowTitle">
          {" "}
          Enter "start" in the input box to initiate the conversation.
        </p>
        <MessageScreen
          messages={messages}
          isLoading={isLoading}
          name={name}
          handleSubmitRating={handleSubmitSecondDonation}
          addMessage={handleAddUserMessage}
          blockUserMessages={blockUserMessages}
          botsProfile={botsProfile}
          onProfileCardClose={handleProfileCardClose}
          donationAmount_first={props.donationAmount_first}
          handleSubmitWillingness={handleSubmitAcceptance}
          displayTyping={isDisplayTyping}
        />
        <div className="chatWindowButtons">
          <Button className="chatWindowButton" onClick={test_reset}>
            Reset
          </Button>
          {/* <Button className="chatWindowButton" onClick={props.logoutHandler}>
            Logout
          </Button> */}
          {/* <Button className="chatWindowButton" onClick={getAllData}>
            Get Data
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

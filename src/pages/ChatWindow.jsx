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
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";
import { AuthContext } from "../contexts/contexts";
import Button from "@mui/material/Button";
import openai from "../services/openaiClient.js";
import { senderToNameMap } from "../constants/botNames";


function ChatWindow(props) {
  const [messages, setMessages] = useState([]);
  const [conversationStep, setConversationStep] = useState(1);
  const [blockUserMessages, setBlockUserMessages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gptConversation, setGptConversation] = useState("");
  const [lastUserMessage, setLastUserMessage] = useState("");
  const [name, setName] = useState(props.name);
  const [peopleData, setPeopleData] = useState(props.peopleData || initialPeopleData);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const userId = useContext(AuthContext);
  const docRef = doc(db, "users", userId);

  useEffect(() => {
    console.log("Donation Amount (First):", props.donationAmount_first); 
    console.log("People Data in ChatWindow 1:", props.peopleData);
  }, [props.donationAmount_first, props.peopleData, props.willingness_first]);

  const messageGroups = messageGroupsAllBots[props.code];

  async function getGPTMessage(prompt, userMessage) {
    try {
      const req = {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: userMessage.toString() },
        ],
        temperature: 0.01,
        max_tokens: 200,
      };

      const response = await openai.chat.completions.create(req);
      const response_content = response.choices[0].message.content;
      return response_content;
    } catch (e) {
      console.log("Error in getGPTMessage:", e);
    } finally {
    }
  }

  async function gptParseName(message) {
    try {
      const req = {
        model: "gpt-4-1106-preview",
        messages: [
          {
            role: "system",
            content: `The message below is the user introducing themself. Strictly return just the user's name in JSON format, with no other words. The format should be: {"name": "<user's name>"}`,
          },
          { role: "user", content: message },
        ],
        temperature: 0.0,
        max_tokens: 200,
      };

      const response = await openai.chat.completions.create(req);

      let response_content = response.choices[0].message.content;

      try {
        const parsedContent = JSON.parse(response_content);
        return parsedContent.name;
      } catch (e) {
        console.error("Error parsing JSON:", e);
        return null;
      }
    } catch (e) {
      console.error("Error in gptParseName:", e);
      return null;
    }
  }

  async function loadPeopleDataFromDatabase(userId) {
    const peopleData = {};
  
    // 1. Load user (profile/info)
    const profileRef = doc(db, "users", userId, "profile", "info");
    const profileSnap = await getDoc(profileRef);

  let profileData = {};
  if (profileSnap.exists()) {
    profileData = profileSnap.data();

    // ✅ 手动构建 peopleData["User"]
    peopleData["User"] = {
      ageRange: profileData.ageRange || "N/A",
      gender: profileData.gender || "N/A",
      occupation: profileData.occupation || "N/A",
      ethnicity: profileData.ethnicity || "N/A",
    };
  } else {
    // fallback
    peopleData["User"] = {
      ageRange: "N/A",
      gender: "N/A",
      occupation: "N/A",
      ethnicity: "N/A",
    };
  }
    // 2. Load bots
    const botsCol = collection(db, "users", userId, "bots");
    const botDocs = await getDocs(botsCol);
    botDocs.forEach((doc) => {
      peopleData[doc.id] = doc.data(); // Bot name as key
    });
  
    return {
      peopleData,
      profileData: profileSnap.exists() ? profileSnap.data() : {},
    };
  }
  

  async function getUserDataFromDatabase() {
    setIsLoading(true);
    try {
      const { peopleData, profileData } = await loadPeopleDataFromDatabase(userId);
      const step = profileData?.step || 1;
  
      const messageSnap = await getDocs(collection(db, "users", userId, "messages"));
      const messageDocs = messageSnap.docs;
  
      populateInitialMessages(
        step,
        messageDocs,
        messageGroups,
        props.name,
        peopleData,
        profileData.donationAmount_first,
        profileData.willingness_first
      );
  
      setPeopleData(peopleData);
      setConversationStep(step);
    } catch (e) {
      console.error("Error in getUserDataFromDatabase:", e);
    } finally {
      setIsLoading(false);
    }
  }
  
 

  useEffect(() => {
    const fetchData = async () => {
      return await getUserDataFromDatabase();
    };

    fetchData();
    return () => setMessages([]);
  }, []);

  async function test_reset() {
    console.log("resetting...");
    await setDoc(doc(db, "users", userId), {
      step: 1,
    });
    setMessages([]);
    setConversationStep(1);
    console.log("reseted.");
  }

  async function handleAddUserMessage(message) {
    addUserMessage(message);
  
    if (!blockUserMessages) {
      await storeMessageInDatabase({
        step: conversationStep,
        type: "user",
        content: message,
      });
  
      await addBotMessages(conversationStep, message);
      await updateStepInDatabase(conversationStep + 1);
      setConversationStep((s) => s + 1);
    }
  }

  async function updateStepInDatabase(step) {
    const profileRef = doc(db, "users", userId, "profile", "info");
    await setDoc(profileRef, { step }, { merge: true });
  }
  

  function addUserMessage(message) {
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, sender: EntityType.User },
    ]);
  }

  function createConversation(fn, message) {
    return fn(message, gptConversation);
  }

  async function addBotMessages(step, lastUserMessage) {
    setBlockUserMessages(true);
  
    const messageGroup = messageGroups.find((g) => g.step === step);
    if (!messageGroup) return;
  
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  
    for (let i = 0; i < messageGroup.messages.length; i++) {
      const msgTemplate = messageGroup.messages[i];
      await timer(msgTemplate.delay * 800);
  
      if (msgTemplate.type === MessageType.GPT) {
        const gptMessage = await getGPTMessage(
          msgTemplate.prompt(props.name, props.peopleData, props.donationAmount_first),
          lastUserMessage
        );
  
        const messageObj = {
          content: gptMessage,
          sender: msgTemplate.sender,
          senderName: senderToNameMap[msgTemplate.sender.name], 
          type: "gpt",
        };
  
        await storeMessageInDatabase({
          step,
          type: "gpt",
          content: gptMessage,
          sender: msgTemplate.sender.name,
          index: i,
        });
  
        setMessages((prev) => [...prev, messageObj]);
      } else {
        setMessages((prev) => [...prev, msgTemplate]); // static message
      }
    }
  
    setBlockUserMessages(false);
  }
  

  async function storeMessageInDatabase({ step, type, content, sender = null, index = null }) {
    const timestamp = new Date();
    let docId = "";
  
    if (type === "user") {
      docId = `${step}_user`;
    } else if (type === "gpt") {
      docId = `${step}_gpt_${index}`;
    }
  
    const messageData = {
      message: content,
      type,
      timestamp,
      ...(sender && { sender }),
      step,
      ...(index !== null && { index }),
    };
  
    await setDoc(doc(db, "users", userId, "messages", docId), messageData);
  }

  function populateInitialMessages(
    step,
    userMessagesDocs,
    messageGroups,
    name,
    peopleData,
    donationAmount_first,
    willingness_first
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
              senderName: senderToNameMap[sender.name],
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
    // 当 ProfileCard 关闭时，直接调用 handleAddUserMessage 发送消息
    handleAddUserMessage(message);
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
          handleSubmitRating={handleAddUserMessage}
          addMessage={handleAddUserMessage}
          blockUserMessages={blockUserMessages}
          peopleData={peopleData}
          onProfileCardClose={handleProfileCardClose}
          donationAmount_first={props.donationAmount_first}
          handleSubmitWillingness={handleAddUserMessage}
          willingness_first={props.willingness_first}
        />
        <div className="chatWindowButtons">
          <Button className="chatWindowButton" onClick={test_reset}>
            Reset
          </Button>
          <Button className="chatWindowButton" onClick={props.logoutHandler}>
            Logout
          </Button>
          {/* <Button className="chatWindowButton" onClick={getAllData}>
            Get Data
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;

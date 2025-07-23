// src/services/firebaseService.js
import { doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// 1. Load user demographic info
export async function loadUserDemographic(userId) {
  const docRef = doc(db, "users", userId, "demographics", "info");
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : {};
}

// 2. Load user meta state (survey status, step, willingness)
export async function loadUserMetaState(userId) {
  const docRef = doc(db, "users", userId, "meta", "state");
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data() : {};
}

// 3. Load donation amount
export async function loadUserDonation(userId) {
  const docRef = doc(db, "users", userId, "donation", "first");
  const snap = await getDoc(docRef);
  return snap.exists() ? snap.data().amount || 0 : 0;
}

// 4. Load bots profile
export async function loadBotProfiles(userId) {
  const botsCol = collection(db, "users", userId, "bots");
  const botDocs = await getDocs(botsCol);

  const bots = {};
  botDocs.forEach((doc) => {
    bots[doc.id] = doc.data();
  });

  return bots;
}

// 5. Load all chat messages
export async function loadChatMessages(userId) {
  const messagesRef = collection(db, "users", userId, "messages");
  const snap = await getDocs(messagesRef);
  return snap.docs;
}

export async function loadUserStep(userId) {
  const stateRef = doc(db, "users", userId, "meta", "state");
  const docSnap = await getDoc(stateRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data.step || 1;
  } else {
    return 1;
  }
}

/**
 * Write user demographic information to Firestore.
 * This includes fields like ageRange, gender, ethnicity, and occupation.
 */
export async function writeUserDemographic(userId, demographicData) {
  const ref = doc(db, "users", userId, "demographics", "info");
  await setDoc(ref, demographicData, { merge: true });
}

export async function writeUserMetaState(userId, metaData) {
  const ref = doc(db, "users", userId, "meta", "state");
  await setDoc(ref, metaData, { merge: true });
}

export async function writeUserDonation(userId, amount, type = "first") {
  const ref = doc(db, "users", userId, "donation", type);
  const data = {
    amount,
    timestamp: new Date(),
  };
  await setDoc(ref, data);
}

export async function writeAcceptDonation(userId, accepted) {
  const ref = doc(db, "users", userId, "donation", "acceptDonationFromOthers");
  const data = {
    accepted,
    timestamp: new Date(),
  };
  await setDoc(ref, data);
}

export async function writeBotProfiles(userId, botProfiles) {
  const entries = Object.entries(botProfiles);

  const promises = entries.map(([botName, profile]) => {
    const botRef = doc(db, "users", userId, "bots", botName);
    return setDoc(botRef, profile, { merge: true });
  });

  await Promise.all(promises);
}

export async function writeMessages(
  userId,
  { step, type, content, sender = null, index = null }
) {
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

export async function writeConversationStep(userId, step) {
  const profileRef = doc(db, "users", userId, "meta", "state");
  await setDoc(profileRef, { step }, { merge: true });
}

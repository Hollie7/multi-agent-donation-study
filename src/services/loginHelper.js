import {
  loadUserDemographic,
  loadBotProfiles,
  loadUserDonation,
  loadChatMessages,
} from "./firebaseService";

export async function checkDemographicExists(userId) {
  const data = await loadUserDemographic(userId);
  return data && Object.keys(data).length > 0;
}

export async function checkBotProfilesExist(userId) {
  const bots = await loadBotProfiles(userId);
  console.log(bots && Object.keys(bots).length > 0);
  return bots && Object.keys(bots).length > 0;
}

export async function checkDonationExists(userId) {
  const amount = await loadUserDonation(userId);
  return amount !== undefined && amount !== null;
}

export async function checkMessagesExist(userId) {
  const messages = await loadChatMessages(userId);
  return messages && messages.length > 0;
}

export async function getLoginStatus(userId) {
  const hasDemographics = await checkDemographicExists(userId);
  if (!hasDemographics) {
    return {
      message: "Welcome!",
      page: "survey",
    };
  }

  const hasBots = await checkBotProfilesExist(userId);
  if (!hasBots) {
    return {
      message: "Welcome! Please finish the survey to proceed to the next step",
      page: "survey",
    };
  }

  const hasDonation = await checkDonationExists(userId);
  if (!hasDonation) {
    return {
      message:
        "You’ve completed the chat preparation. Next, please make your donation decision.",
      page: "donation",
    };
  }

  const hasMessages = await checkMessagesExist(userId);
  if (!hasMessages) {
    return {
      message: "You're ready to begin the conversation with your AI partners.",
      page: "projectIntroduction",
    };
  }

  return {
    message: "Welcome back! Resuming your conversation with the AI.",
    page: "chat",
  };
}

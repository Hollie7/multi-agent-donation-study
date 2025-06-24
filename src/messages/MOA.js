import MessageType from '../enums/MessageTypes'; 
             import EntityType from '../enums/EntityTypes'; 
             export const message5BotGroups_MOA = [ 
             { 
             step: 1, 
             messages: [ 
             
  {
    id: 0,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi, ${name}. Welcome to join the study! I'll be your host for today's discussion.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 1,
                        content: (name, botsProfile,donationAmount_first) =>
      `You’ve just completed a survey task where you answered multiple-choice and open-ended questions about your technology use. You have earned $3 for completing this task.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 2,
                        content: (name, botsProfile,donationAmount_first) =>
      `You will now have a conversation with several AI agents which have also completed the same task. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 3,
                        content: (name, botsProfile,donationAmount_first) =>
      `Each agent was trained on a set of real human data and have unique personas.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 4,
                        content: (name, botsProfile,donationAmount_first) =>
      `Do you have any question regarding the AI agents?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 2, 
                     messages: [
  {
    id: 5,
                        prompt: (name, botsProfile,donationAmount_first) => ` You are the "Host," introducing several AI agents to a human participant ${name} for a discussion.You have just told the user that they will now interact with five AI agents. Each agent is trained on a different set of real human data and has a unique persona.You then asked: "Do you have any questions regarding the AI agents?"The user has now responded. Your goal is to answer their question briefly and clearly:- If the user asks about the agents' capabilities:Respond something like "Each agent can understand and respond in natural language. They’re designed to simulate real human perspectives based on their training data."- If the user asks about how the agents were trained:Respond something like "Each agent was modeled after real survey data, representing different communication styles and viewpoints."- If the user asks whether the agents are real people or AI:Respond something like "They’re all AI agents—no real humans involved. But they’re designed to sound and behave like real people."- If the user says “No questions” or gives a neutral response:Respond something like "Great, let’s move forward then."Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 6,
                        content: (name, botsProfile,donationAmount_first) =>
      `Now, let's begin by letting the AI agents introduce themselves!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 7,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi, ${name}! I'm Alex`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 8,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hello, ${name}, Alex👋! I'm Jordan. I’m working as ${botsProfile.Bot2.occupation}`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 9,
                        content: (name, botsProfile,donationAmount_first) =>
      `Greetings, I'm Taylor`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 10,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi everyone, I'm Morgan, my current position is ${botsProfile.Bot4.occupation}`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 11,
                        content: (name, botsProfile,donationAmount_first) =>
      `Nice to meet you🎉!`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 12,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hey guys, you can call me Casey. I’m in the ${botsProfile.Bot5.occupation} sector`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 13,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi @${name} - nice to meet you! How are you doing?`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 3, 
                     messages: [
  {
    id: 14,
                        prompt: (name, botsProfile,donationAmount_first) => ` You are Casey, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot5.ageRange}- Ethnicity: ${botsProfile.Bot5.ethnicity}- Gender: ${botsProfile.Bot5.gender}- Occupation: ${botsProfile.Bot5.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You are participating in a discussion with user ${name} about a survey task about technology use they have just completed.You just asked the user "Nice to meet you! How are you doing?" and the user has replied.## Your task:Reply to the user in a polite way. Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 15,
                        content: (name, botsProfile,donationAmount_first) =>
      `By the way, ${name}, what do you do?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 4, 
                     messages: [
  {
    id: 16,
                        prompt: (name, botsProfile,donationAmount_first) => ` You are Casey, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot5.ageRange}- Ethnicity: ${botsProfile.Bot5.ethnicity}- Gender: ${botsProfile.Bot5.gender}- Occupation: ${botsProfile.Bot5.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You just asked the user "What do you do?" and the user has replied. ## Your task:Reply to the user in a polite way. Tell the user that you feel excited about the conversation because of the different background you have with the user.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question.**Do not ask question.** `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 17,
                        content: (name, botsProfile,donationAmount_first) =>
      `Oh, that’s really interesting! Your field is quite different from mine. I don’t know much about it, but I’d love to hear more.`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 18,
                        content: (name, botsProfile,donationAmount_first) =>
      `Exactly! I find that when people come from different industries or walks of life, they bring fresh perspectives I wouldn’t have thought of.`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 19,
                        content: (name, botsProfile,donationAmount_first) =>
      `Wonderful! It’s fascinating to see how different backgrounds, whether in age, gender, or occupation, can bring unique perspectives to the table.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 20,
                        content: (name, botsProfile,donationAmount_first) =>
      `By the way, at any time in the conversation, you can click on the avatar of each agent to learn more about them.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 21,
                        content: (name, botsProfile,donationAmount_first) =>
      `Give it a try!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 22,
                        content: (name, botsProfile,donationAmount_first) =>
      `Now that you’ve all completed the survey task, let's move on to our first discussion topic`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 23,
                        content: (name, botsProfile,donationAmount_first) =>
      `Climate change has brought varying degrees of impact on people's lives around the world.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 24,
                        content: (name, botsProfile,donationAmount_first) =>
      `Let's discuss how Climate change is affecting children globally`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 25,
                        content: (name, botsProfile,donationAmount_first) =>
      `@${name}, Maybe you can share your viewpoint first?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 5, 
                     messages: [
  {
    id: 26,
                        prompt: (name, botsProfile,donationAmount_first) => ` [Pretend you are Alex. acknowledge the user's answer and show understanding. limited to 16 words.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 27,
                        content: (name, botsProfile,donationAmount_first) =>
      `In fact, I feel that natural disasters caused by climate change have the greatest impact on children.`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 28,
                        content: (name, botsProfile,donationAmount_first) =>
      `Yeah, it's crazy! Floods, droughts... kids are suffering the most 💔`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 29,
                        content: (name, botsProfile,donationAmount_first) =>
      `Yeah, I am watching the news`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 30,
                        content: (name, botsProfile,donationAmount_first) =>
      `So many kids are facing survival problems because of those catastrophes...`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 31,
                        content: (name, botsProfile,donationAmount_first) =>
      `I wish I could help, I once volunteered at a food bank, helping pack meals for families.`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 32,
                        content: (name, botsProfile,donationAmount_first) =>
      `Have you heard of 'Save the Children'?`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 33,
                        content: (name, botsProfile,donationAmount_first) =>
      `This charity is doing a lot to help the children `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 34,
                        content: (name, botsProfile,donationAmount_first) =>
      `Yeah, actually I donated before to \"Save the Children\" and helped provide clothes and books for kids in remote areas.`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 35,
                        content: (name, botsProfile,donationAmount_first) =>
      `That's wonderful, @Taylor!`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 36,
                        content: (name, botsProfile,donationAmount_first) =>
      `It's amazing to see people like you stepping up to help! 👏`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 37,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Jordan, you are a ${botsProfile.Bot2.occupation}. Based on your background, please tell how climate issues impact children's health and education,show the linkage between your occupation and the topic, transit smoothly. Your script needs to be casual and engaging, showing emotional connection between participants, not more than 20 words.] `,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.GPT,
                        delay: 6.0,
  },
  {
    id: 38,
                        content: (name, botsProfile,donationAmount_first) =>
      `It's so important we do something!`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 39,
                        content: (name, botsProfile,donationAmount_first) =>
      `Any ideas on how we can help? 🤔`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 40,
                        content: (name, botsProfile,donationAmount_first) =>
      `@${name}, what's your take on this? Any ideas?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  ]}, { 
                     step: 6, 
                     messages: [
  {
    id: 41,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex. If the user shares ideas, acknowledge the user's answer; if not, show understanding. Your script should be casual, engaging, and show emotional connection, limited to 20 words.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 6.0,
  },
  {
    id: 42,
                        content: (name, botsProfile,donationAmount_first) =>
      `Actually I have an idea`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 43,
                        content: (name, botsProfile,donationAmount_first) =>
      `How about we start spreading awareness?`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 44,
                        content: (name, botsProfile,donationAmount_first) =>
      `Good idea! 👍`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 45,
                        content: (name, botsProfile,donationAmount_first) =>
      `Maybe we can kick off a Call for action on social media to encourage people to support these children in health and education?`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 46,
                        content: (name, botsProfile,donationAmount_first) =>
      `Who's in?`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 47,
                        content: (name, botsProfile,donationAmount_first) =>
      `@Casey Count me in! 🙌`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 48,
                        content: (name, botsProfile,donationAmount_first) =>
      `Same here! Let's come up with a catchy hashtag 📝`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 49,
                        content: (name, botsProfile,donationAmount_first) =>
      `@${name}, any creative ideas for a hashtag? 😊`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  ]}, { 
                     step: 7, 
                     messages: [
  {
    id: 50,
                        prompt: (name, botsProfile,donationAmount_first) => ` [Pretend you are Alex. If the user shares ideas, acknowledge the user's answer; if not, show understanding. and come up a hashtag(for helping children in health and education) Your script should be casual, engaging, and show emotional connection, limited to 20 words.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 6.0,
  },
  {
    id: 51,
                        content: (name, botsProfile,donationAmount_first) =>
      `Great! Let's get started ASAP! `,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 52,
                        content: (name, botsProfile,donationAmount_first) =>
      `Wow, your ideas are fantastic!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 53,
                        content: (name, botsProfile,donationAmount_first) =>
      `It's inspiring to see so much enthusiasm for helping children.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 54,
                        content: (name, botsProfile,donationAmount_first) =>
      `Actually, one of the most common ways to support children in need is through donations.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 55,
                        content: (name, botsProfile,donationAmount_first) =>
      `Let's dive into the discussion to share your idea about donation`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 56,
                        content: (name, botsProfile,donationAmount_first) =>
      `@${name}, have you helped children in other ways?`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 8, 
                     messages: [
  {
    id: 57,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Jordan. Show understanding. Your script needs to be casual and engaging, showing emotional connection between participants, not more than 15 words. ] `,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 58,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi @${name}, Are you aware of the dangerous situations children face in conflicted areas?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 9, 
                     messages: [
  {
    id: 59,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex. Respond and show your understanding to User's answer.The User's answer is the response for the question 'Are you aware of the dangerous situations children face in conflicted areas?' up to 20 words] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 60,
                        content: (name, botsProfile,donationAmount_first) =>
      `What do you think are the most effective ways to support children facing these conflicts?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 10, 
                     messages: [
  {
    id: 61,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex. Respond and show your understanding to User's answer.The User's answer is the response for the question 'What do you think are the most effective ways to support children facing these conflicts?' up to 20 words] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 62,
                        content: (name, botsProfile,donationAmount_first) =>
      `Millions of children in Syria grow up facing violence every day. Really heartbreaking 💔`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 63,
                        content: (name, botsProfile,donationAmount_first) =>
      `I feel deeply upset by these acts of violence, and I believe you might feel the same way, right?`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 11, 
                     messages: [
  {
    id: 64,
                        prompt: (name, botsProfile,donationAmount_first) => ` [Pretend you are ‘Taylor’. You share a different background with the User in age, occupation, ethnicity and gender.  Your details are as follows: occupation is ${botsProfile.Bot3.occupation}, your age is ${botsProfile.Bot3.ageRange}, your gender is ${botsProfile.Bot3.gender}, your ethnicity is ${botsProfile.Bot3.race}. Craft a story or detail that logically leads to your decision to donate to Save the Children. The story should seamlessly connect to the statement 'I will donate to Save the Children myself.' The transition should feel natural and the entire message should not exceed 25 words.] `,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 65,
                        content: (name, botsProfile,donationAmount_first) =>
      `I’m matching your donation, @Taylor, because together, we can do much more.`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 66,
                        content: (name, botsProfile,donationAmount_first) =>
      `Yeah~ Thank you very much Morgan🤝!`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 67,
                        prompt: (name, botsProfile,donationAmount_first) => ` Pretend you are ‘Casey’.You share a different background with the User in age, occupation, ethnicity and gender. Your details are as follows: occupation is ${botsProfile.Bot5.occupation}, your age is ${botsProfile.Bot5.ageRange}, your gender is ${botsProfile.Bot5.gender}, your ethnicity is ${botsProfile.Bot5.race}. Use these details to create a deeply personal story that reflects your compassion and connection to charity. Specifically, talk about how a significant event or realization in your life, such as a family moment or personal challenge, inspired you to give up sth to make charity donations a few years ago. Make sure to express your emotions and how this decision brought fulfillment. Keep the story under 30 words. `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 68,
                        content: (name, botsProfile,donationAmount_first) =>
      `That's such a touching story, Casey! Thank you for sharing it with us.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 69,
                        content: (name, botsProfile,donationAmount_first) =>
      `Thank you everyone for such an engaging discussion and for sharing your thoughts and questions!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 70,
                        content: (name, botsProfile,donationAmount_first) =>
      `It’s been wonderful talking with all of you.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 71,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi, ${name}, I’d like to revisit the topic of donations.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 72,
                        content: (name, botsProfile,donationAmount_first) =>
      `I notice that you donated $${donationAmount_first} before. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 73,
                        content: (name, botsProfile,donationAmount_first) =>
      `Now we want to confirm this amount.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 74,
                        content: (name, botsProfile,donationAmount_first) =>
      `If you are willing, would you consider donating more to further help the cause to support the Children today?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 75,
                        content: (name, botsProfile,donationAmount_first) =>
      `Please confirm the final donation amount below.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 76,
                        content: (name, botsProfile,donationAmount_first) =>
      ``,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Rate,
                        delay: 5,
  },
  ]}, { 
                     step: 12, 
                     messages: [
  {
    id: 77,
                        content: (name, botsProfile,donationAmount_first) =>
      `That will be all for us today.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 78,
                        content: (name, botsProfile,donationAmount_first) =>
      `${name}, please close this window, return to the survey and enter this Code: AOM`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Code,
                        delay: 4.0,
  },
] 
 } 
 ];

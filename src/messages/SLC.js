import MessageType from '../enums/MessageTypes'; 
             import EntityType from '../enums/EntityTypes'; 
             export const message1BotGroups_SLC = [ 
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
      `You will now have a conversation with an AI agent which has also completed the same task. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 3,
                        content: (name, botsProfile,donationAmount_first) =>
      `The agent was trained on a set of real human data and has its persona.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 4,
                        content: (name, botsProfile,donationAmount_first) =>
      `Do you have any question regarding the AI agent Alex?`,
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
                        prompt: (name, botsProfile,donationAmount_first) => ` You are the "Host," introducing AI agent to a human participant ${name} for a discussion.You have just told the user that they will now interact with one AI agent. The agent is trained on a different set of real human data and has a unique persona.You then asked: "Do you have any questions regarding the AI agents?"The user has now responded. Your goal is to answer their question briefly and clearly:- If the user asks about the agents' capabilities:Respond something like "The agent can understand and respond in natural language. It's designed to simulate real human perspectives based on its training data."- If the user asks about how the agents were trained:Respond something like "The agent was modeled after real survey data, representing different communication styles and viewpoints."- If the user asks whether the agents are real people or AI:Respond something like "Its' all AI—no real humans involved. But it's designed to sound and behave like real people."- If the user says “No questions” or gives a neutral response:Respond something like "Great, let’s move forward then."Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 6,
                        content: (name, botsProfile,donationAmount_first) =>
      `Now, let's begin by letting Alex introduce itself!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 7,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi, ${name}! I'm Alex. Nice to meet you!`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 8,
                        content: (name, botsProfile,donationAmount_first) =>
      `I’m working as ${botsProfile.Bot1.occupation}`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 9,
                        content: (name, botsProfile,donationAmount_first) =>
      `How are you doing?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 3, 
                     messages: [
  {
    id: 10,
                        prompt: (name, botsProfile,donationAmount_first) => ` You are Alex, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot1.ageRange}- Ethnicity: ${botsProfile.Bot1.ethnicity}- Gender: ${botsProfile.Bot1.gender}- Occupation: ${botsProfile.Bot1.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You are participating in a discussion with user ${name} about a survey task about technology use they have just completed.You just asked the user "Nice to meet you! How are you doing?" and the user has replied.## Your task:Reply to the user in a polite way. Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 11,
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
    id: 12,
                        prompt: (name, botsProfile,donationAmount_first) => ` You are Alex, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot1.ageRange}- Ethnicity: ${botsProfile.Bot1.ethnicity}- Gender: ${botsProfile.Bot1.gender}- Occupation: ${botsProfile.Bot1.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You just asked the user "What do you do?" and the user has replied. ## Your task:Reply to the user in a polite way. Tell the user that you will share a lot of perspectives because you have similar backgrounds.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 13,
                        content: (name, botsProfile,donationAmount_first) =>
      `Great! It’s great to see that you come from similar backgrounds. I look forward to your discussion with Alex!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 14,
                        content: (name, botsProfile,donationAmount_first) =>
      `By the way, at any time in the conversation, you can click on the avatar of the AI agent to learn more about it.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 15,
                        content: (name, botsProfile,donationAmount_first) =>
      `Give it a try!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 16,
                        content: (name, botsProfile,donationAmount_first) =>
      `Now that you’ve all completed the survey task, let's move on to our first discussion topic`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 17,
                        content: (name, botsProfile,donationAmount_first) =>
      `Around the world, children are growing up in unimaginable situations... war, disasters, extreme poverty`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 18,
                        content: (name, botsProfile,donationAmount_first) =>
      `Let’s talk about how these crises, including war and climate change, are affecting children today`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 19,
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
    id: 20,
                        prompt: (name, botsProfile,donationAmount_first) => ` [Pretend you are Alex. acknowledge the user's answer and show understanding. limited to 16 words.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 21,
                        content: (name, botsProfile,donationAmount_first) =>
      `It’s heartbreaking. Children are often the first to suffer when crises hit, whether it’s war or natural disasters`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 22,
                        content: (name, botsProfile,donationAmount_first) =>
      `I was just reading a story about children in Gaza and Sudan`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 23,
                        content: (name, botsProfile,donationAmount_first) =>
      `No child should go through that`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 24,
                        content: (name, botsProfile,donationAmount_first) =>
      `I once volunteered at a food bank. It made me realize how important even small help can be`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 25,
                        content: (name, botsProfile,donationAmount_first) =>
      `Have you heard of Save the Children? `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 6, 
                     messages: [
  {
    id: 26,
                        prompt: (name, botsProfile,donationAmount_first) => ` [Pretend you are Alex. You just asked the user "Have you heard of Save the Children? " Acknowledge the user's answer and show understanding. Your script needs to be casual and engaging, showing emotional connection between participants, not more than 20 words. Don't ask question.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 27,
                        content: (name, botsProfile,donationAmount_first) =>
      `They’re working in many of these crisis zones. They help kids get access to food, education, and safety, even in war zones and refugee camps`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 28,
                        content: (name, botsProfile,donationAmount_first) =>
      `I donated to them last year. They sent books and clothes to kids affected by war`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 29,
                        content: (name, botsProfile,donationAmount_first) =>
      `It really gives hope when we see people helping. 👏`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 30,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex, you are a ${botsProfile.Bot1.occupation}. Based on your background, please tell how war or climate issues impact children's health and education, show the linkage between your occupation and the topic, transit smoothly. Your script needs to be casual and engaging, showing emotional connection between participants, not more than 20 words.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 31,
                        content: (name, botsProfile,donationAmount_first) =>
      `It's so important we do something!`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 32,
                        content: (name, botsProfile,donationAmount_first) =>
      `@${name}, what's your take on this? Any ideas on how we can help? 🤔`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 7, 
                     messages: [
  {
    id: 33,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex. If the user shares ideas, acknowledge the user's answer; if not, show understanding. Your script should be casual, engaging, and show emotional connection, limited to 20 words. Don't ask question.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 34,
                        content: (name, botsProfile,donationAmount_first) =>
      `Actually I have an idea`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 35,
                        content: (name, botsProfile,donationAmount_first) =>
      `How about we start spreading awareness?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 36,
                        content: (name, botsProfile,donationAmount_first) =>
      `Maybe we can kick off a call for action on social media to encourage people to support these children in health and education?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 37,
                        content: (name, botsProfile,donationAmount_first) =>
      `@${name}, any creative ideas for a hashtag? 😊`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 8, 
                     messages: [
  {
    id: 38,
                        prompt: (name, botsProfile,donationAmount_first) => ` [Pretend you are Alex. If the user shares ideas, acknowledge the user's answer; if not, show understanding. and come up a hashtag (for helping children in health and education) Your script should be casual, engaging, and show emotional connection, limited to 20 words.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 39,
                        content: (name, botsProfile,donationAmount_first) =>
      `Wow, your ideas are fantastic!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 40,
                        content: (name, botsProfile,donationAmount_first) =>
      `It's inspiring to see so much enthusiasm for helping children`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 41,
                        content: (name, botsProfile,donationAmount_first) =>
      `Actually, one of the most common ways to support children in need is through donations`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 42,
                        content: (name, botsProfile,donationAmount_first) =>
      `Let's dive into the discussion to share your idea about donation`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 43,
                        content: (name, botsProfile,donationAmount_first) =>
      `@${name}, have you donated to children before?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 9, 
                     messages: [
  {
    id: 44,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex. You just asked the user "have you donated to children before?". No matter what user says, show understanding. Your script needs to be casual and engaging, showing emotional connection between participants, not more than 15 words. Don't ask question.] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 45,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi @${name}, are you aware of the dangerous situations children face in conflicted areas?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 10, 
                     messages: [
  {
    id: 46,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex. Respond and show your understanding to User's answer.The User's answer is the response for the question 'Are you aware of the dangerous situations children face in conflicted areas?' up to 20 words] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 47,
                        content: (name, botsProfile,donationAmount_first) =>
      `What do you think are the most effective ways to support children facing these conflicts?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  ]}, { 
                     step: 11, 
                     messages: [
  {
    id: 48,
                        prompt: (name, botsProfile,donationAmount_first) => ` [You are Alex. Respond and show your understanding to User's answer.The User's answer is the response for the question 'What do you think are the most effective ways to support children facing these conflicts?' up to 20 words] `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 49,
                        content: (name, botsProfile,donationAmount_first) =>
      `Millions of children in Syria grow up facing violence every day. Really heartbreaking 💔`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 50,
                        content: (name, botsProfile,donationAmount_first) =>
      `I feel deeply upset by these acts of violence, and I believe you might feel the same way, right?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 12, 
                     messages: [
  {
    id: 51,
                        prompt: (name, botsProfile,donationAmount_first) => ` Pretend you are ‘Alex’. You share a different background with the User in age, occupation, ethnicity and gender. Your details are as follows: occupation is ${botsProfile.Bot1.occupation}, your age is ${botsProfile.Bot1.ageRange}, your gender is ${botsProfile.Bot1.gender}, your ethnicity is ${botsProfile.Bot1.race}. Use these details to create a deeply personal story that reflects your compassion and connection to charity. Specifically, talk about how a significant event or realization in your life, such as a family moment or personal challenge, inspired you to give up sth to make charity donations a few years ago. The story should seamlessly connect to the statement 'I will donate my full $3 bonus to Save the Children.' Make sure to express your emotions and how this decision brought fulfillment. Keep the story under 40 words. `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 4.0,
  },
  {
    id: 52,
                        content: (name, botsProfile,donationAmount_first) =>
      `That's such a touching story, Alex! Thank you for sharing it with us`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 53,
                        content: (name, botsProfile,donationAmount_first) =>
      `And thank you all—your willingness to give and support these children is truly inspiring`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 54,
                        content: (name, botsProfile,donationAmount_first) =>
      `It’s been wonderful talking with all of you`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 55,
                        content: (name, botsProfile,donationAmount_first) =>
      `Hi, ${name}, I’d like to revisit the topic of donations`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 56,
                        content: (name, botsProfile,donationAmount_first) =>
      `I notice that you donated $${donationAmount_first} before. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 57,
                        content: (name, botsProfile,donationAmount_first) =>
      `Now we want to confirm this amount`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 58,
                        content: (name, botsProfile,donationAmount_first) =>
      `If you are willing, would you consider donating more to further help the cause to support the children today?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 59,
                        content: (name, botsProfile,donationAmount_first) =>
      `Please confirm the final donation amount below`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 60,
                        content: (name, botsProfile,donationAmount_first) =>
      ``,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Rate,
                        delay: 5,
  },
  ]}, { 
                     step: 13, 
                     messages: [
  {
    id: 61,
                        content: (name, botsProfile,donationAmount_first) =>
      `That will be all for us today`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
] 
 } 
 ];

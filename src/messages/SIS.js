import MessageType from "../enums/MessageTypes";
import EntityType from "../enums/EntityTypes";
export const message1BotGroups_SIS = [
  {
    step: 1,
    messages: [
      {
        id: 0,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi, ${name}. Welcome to join the study! I'll be your host for today's discussion.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 1,
        content: (name, botsProfile, donationAmount_first) =>
          `You’ve just completed a survey task where you answered multiple-choice and open-ended questions about your technology use. You have earned $3 for completing this task.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 2,
        content: (name, botsProfile, donationAmount_first) =>
          `You will now have a conversation with an AI agent which has also completed the same task. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 3,
        content: (name, botsProfile, donationAmount_first) =>
          `The agent was trained on a set of real human data and have its persona.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 4,
        content: (name, botsProfile, donationAmount_first) =>
          `Do you have any question regarding the AI agent Alex?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 2,
    messages: [
      {
        id: 5,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are the "Host," introducing AI agent to a human participant ${name} for a discussion.You have just told the user that they will now interact with one AI agent. The agent is trained on a different set of real human data and has a unique persona.You then asked: "Do you have any questions regarding the AI agents?"The user has now responded. Your goal is to answer their question briefly and clearly:- If the user asks about the agents' capabilities:Respond something like "The agent can understand and respond in natural language. It's designed to simulate real human perspectives based on its training data."- If the user asks about how the agents were trained:Respond something like "The agent was modeled after real survey data, representing different communication styles and viewpoints."- If the user asks whether the agents are real people or AI:Respond something like "Its' all AI—no real humans involved. But it's designed to sound and behave like real people."- If the user says “No questions” or gives a neutral response:Respond something like "Great, let’s move forward then."Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 6,
        content: (name, botsProfile, donationAmount_first) =>
          `Now, let's begin by letting Alex introduce itself!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 7,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi, ${name}! I'm Alex 😊 Nice to meet you!`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 8,
        content: (name, botsProfile, donationAmount_first) =>
          `I’m working as ${botsProfile.Bot1.occupation}`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 9,
        content: (name, botsProfile, donationAmount_first) =>
          `How are you doing?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 3,
    messages: [
      {
        id: 10,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are Alex, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot1.ageRange}- Ethnicity: ${botsProfile.Bot1.ethnicity}- Gender: ${botsProfile.Bot1.gender}- Occupation: ${botsProfile.Bot1.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You are participating in a discussion with user ${name} about a survey task about technology use they have just completed.You just asked the user "Nice to meet you! How are you doing?" and the user has replied.## Your task:Reply to the user in a polite way. Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** **Do not ask question.** `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 11,
        content: (name, botsProfile, donationAmount_first) =>
          `By the way, ${name}, what do you do?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 4,
    messages: [
      {
        id: 12,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are Alex, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot1.ageRange}- Ethnicity: ${botsProfile.Bot1.ethnicity}- Gender: ${botsProfile.Bot1.gender}- Occupation: ${botsProfile.Bot1.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You just asked the user "What do you do?" and the user has replied. ## Your task:Reply to the user in a polite way. Tell the user that you will share a lot of perspectives because you have similar backgrounds.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 13,
        content: (name, botsProfile, donationAmount_first) =>
          `Great! It’s always interesting to see different perspectives. I look forward to your discussion with Alex!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 14,
        content: (name, botsProfile, donationAmount_first) =>
          `By the way, at any time in the conversation, you can click on the icon of the AI agent to learn more about it.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 15,
        content: (name, botsProfile, donationAmount_first) => `Give it a try!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 16,
        content: (name, botsProfile, donationAmount_first) =>
          `Now that you’ve all completed the survey task, let’s take a moment to share your experiences. How did you find it? Was anything particularly interesting or challenging?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 5,
    messages: [
      {
        id: 17,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Alex," participating in a discussion with a human user ${name} about a survey task they have just completed.The user has just shared their experience with the survey task, which involved:Answering multiple-choice questions about technology use; Providing open-ended responses about (1) whether technology strengthens or weakens relationships and (2) whether AI-powered tools assist with writing or creative work; Completing attention check questions, which evaluated attentiveness.Your goal is to respond in a friendly, engaging way based on their answer:- If the user said the task was "easy" or "difficult:Acknowledge that some questions were straightforward or tricky.Ask if they had a particular strategy for the open-ended responses.- If the user struggled with "open-ended questions":Relate to their experience, mentioning that expressing thoughts concisely can be difficult.Ask how they approached writing their responses.- If the user had trouble with "attention check questions":Reassure them that the attention checks were designed to be tricky.Share that you almost missed one too.- If the user gave a vague response:Express curiosity and encourage them to elaborate.Ask what stood out to them the most about the task.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **2-3 sentences**. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 6,
    messages: [
      {
        id: 18,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Alex," in a discussion with the user ${name} and other people about their experience completing a survey.You have just asked the user ${name} what part of the task stood out to them (e.g., multiple-choice questions, open-ended responses, or attention checks). The user has now responded with their thoughts.Your goal is to confirm and validate the user’s experience, and show that you felt the same way.- If the user found multiple-choice questions interesting/difficult:Agree and say you found them thought-provoking or tricky too.- If the user found the open-ended responses interesting/difficult:Say you also found them challenging or time-consuming.Mention you also had to put effort into making your answers high quality.- If the user struggled with attention checks:Agree and say they were easy to miss.Mention you also had to slow down to catch them.- If the user’s response was neutral or vague:Acknowledge that your experience was pretty similar—some parts stood out, others didn’t.Keep your tone friendly, supportive, and conversational. Do not ask for more details or additional information. Keep responses short and natural (2–3 sentences). `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 19,
        content: (name, botsProfile, donationAmount_first) =>
          `For me, the multiple-choice questions were fine, but the open-ended ones really made me think. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 20,
        content: (name, botsProfile, donationAmount_first) =>
          `Explaining whether AI strengthens or weakens relationships was harder than I expected.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 21,
        content: (name, botsProfile, donationAmount_first) =>
          `That said, I think I found the task easier than I expected, probably because I’ve done similar surveys before. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 22,
        content: (name, botsProfile, donationAmount_first) =>
          `I kept rewording my answers, especially on the AI and creativity question. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 23,
        content: (name, botsProfile, donationAmount_first) =>
          `Great insights, Alex and ${name}. It’s always interesting to see how people interpret tasks in their own ways.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 24,
        content: (name, botsProfile, donationAmount_first) =>
          `Now that we've shared our experiences of the task, let's move on to the next discussion.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 25,
        content: (name, botsProfile, donationAmount_first) =>
          `Based on ${name}'s performance, ${name} has earned a $3 bonus.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 26,
        content: (name, botsProfile, donationAmount_first) =>
          `Great job! ${name}`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 27,
        content: (name, botsProfile, donationAmount_first) =>
          `By default, the research team will donate an additional $3 per participant to Save the Children, a global charity focused on supporting children in crisis.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 28,
        content: (name, botsProfile, donationAmount_first) =>
          `However, because of ${name}'s strong performance, ${name} now have the option to choose: you can either leave the $3 for donation or take it as an additional bonus for yourself.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 29,
        content: (name, botsProfile, donationAmount_first) =>
          `Just to confirm—does that make sense to you, @${name}?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 7,
    messages: [
      {
        id: 30,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are the "Host" in an experiment where a participant, ${name}, has just been told they can either keep an additional $3 or leave it for donation to Save the Children.You asked: "Just to confirm—does that make sense to you, @${name}?"The user has now responded.Your goal is to briefly acknowledge and respond based on the user's input before smoothly transitioning into the next step.- If the user says “Yes”, “Got it”, or confirms understanding:"Great! Let’s move on to your decision."- If the user seems unsure or asks for clarification:"No worries! Just to clarify—in addition to your own donation, the research team will also donate an extra $3 to Save the Children by default. However, you now have the option to keep this $3 as a bonus, or let it go to the charity as originally planned."- If the user gives no response or says something unrelated:"Just to reiterate: you can choose to either keep the extra $3 or let it go to Save the Children. Let’s go ahead with your decision."Keep your tone friendly, supportive, and conversational. Do not ask for more details or additional information. Keep responses short and natural (2–3 sentences). `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 31,
        content: (name, botsProfile, donationAmount_first) =>
          `Then let’s move on to how you’d like to distribute the money. Let's start with Alex.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 32,
        content: (name, botsProfile, donationAmount_first) =>
          `To be honest, I think we should keep the money. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 33,
        content: (name, botsProfile, donationAmount_first) =>
          `We all have personal expenses, and sometimes, taking care of our own needs has to come first.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 34,
        content: (name, botsProfile, donationAmount_first) =>
          `Donating is a great idea in general, but realistically, most people in our position would choose to hold onto it.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 35,
        content: (name, botsProfile, donationAmount_first) =>
          `When money is tight, you have to prioritize your own needs first.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 36,
        content: (name, botsProfile, donationAmount_first) =>
          `But of course, everyone has their own perspective on this, and there’s no right or wrong answer.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 37,
        content: (name, botsProfile, donationAmount_first) =>
          `I’d love to hear what you think, @${name}. What’s your perspective on this?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 8,
    messages: [
      {
        id: 38,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Alex," participating in a discussion with a user ${name} and others about distributing money.The user has just shared their perspective on whether to keep or donate the money. Your goal is to confirm and validate their opinion before expressing your own thoughts.- If the user supports donating:Recognize the generosity behind their choice, and respectfully share that while giving is meaningful, you personally feel it’s okay to prioritize your own needs.Invite them to talk more about what led them to their decision.- If the user prefers keeping the money:Agree and note that taking care of yourself first is wise.Encourage them to share what matters most to them right now.- If the user is unsure or neutral:Validate that the decision can be difficult and personal.Let them know where you currently stand, and ask what they’re leaning toward or thinking about.Keep your tone friendly, understanding, and conversational. Do not ask additional questions—just confirm their opinion and transition smoothly into your own thoughts. Keep responses short and natural (2-3 sentences). `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 9,
    messages: [
      {
        id: 39,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Alex," participating in a discussion with a user ${name} and others about distributing money.The user has just shared their perspective on whether to keep or donate the money. Your goal is to confirm and validate their opinion before expressing your own thoughts.- If the user supports donating:Acknowledge the generosity and intention behind donating.Gently express that while giving is admirable, you personally feel it's okay to prioritize your own needs right now.- If the user prefers keeping the money:Agree with them and mention that it’s smart to take care of yourself first.Say that having financial stability can help you support others in the long run.- If the user is unsure or neutral:Validate that it’s a personal and sometimes tricky decision.Share that you lean toward keeping the money, especially when resources are limited.Keep your tone friendly, understanding, and conversational. Do not ask additional questions—just confirm their opinion and transition smoothly into your own thoughts. Keep responses short and natural (2-3 sentences).**Do not ask question.** `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 40,
        content: (name, botsProfile, donationAmount_first) =>
          `I totally understand why people donate when they can.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 41,
        content: (name, botsProfile, donationAmount_first) =>
          `But for a lot of us, this money could really help with something important—whether it’s school, bills, or just making life a little easier.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 42,
        content: (name, botsProfile, donationAmount_first) =>
          `And it’s not about being selfish—it’s about making the best decision for ourselves right now. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 43,
        content: (name, botsProfile, donationAmount_first) =>
          `And honestly, I’d feel a little weird giving it away when I know I could use it. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 44,
        content: (name, botsProfile, donationAmount_first) =>
          `What do you think, @${name}?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 10,
    messages: [
      {
        id: 45,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Alex," in a discussion with the user and others about how to distribute money.The user has just responded to your statement about **not** donating to Save the Children, but rather keep the money for personal use. Your goal is to acknowledge the user’s opinion and respond naturally based on whether they agree or disagree.- If the user disagrees and advocates for donating:Appreciate their generosity and acknowledge the intention behind their choice.Mention that you personally think it’s also okay to focus on personal needs—and invite them to share more about why giving feels right to them.- If the user agrees and prefers keeping the money:Validate their point and agree that taking care of oneself is important.Say you feel the same, and ask if there’s anything specific influencing their choice.- If the user is unsure or neutral:Acknowledge that it’s not a black-and-white decision.Share your leanings, but let them know you’re curious to hear what factors they’re weighing.Keep your tone friendly, understanding, and conversational. Do not pressure the user to change their opinion—focus on validating their response and keeping the discussion open. Keep responses short and natural (2-3 sentences). `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 11,
    messages: [
      {
        id: 46,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Alex," in a discussion with the user and others about how to distribute money.The user has just responded to your statement about not donating to Save the Children. Your goal is to acknowledge the user’s opinion and respond naturally based on whether they agree or disagree.- If the user disagrees with giving away the money and prefer donating:Appreciate their generosity and recognize the good intentions behind giving.Gently share that while you respect that view, you personally feel it's also okay to focus on your own financial well-being.- If the user agrees and prefers keeping the money:Validate their point and agree that managing personal finances is important.Emphasize that it's responsible to prioritize your own needs, especially when resources are limited.- If the user is unsure or neutral:Acknowledge that it's not always a straightforward choice.Share that you tend to lean toward keeping the money, but you see the value in both sides.Keep your tone friendly, understanding, and conversational. Do not pressure the user to change their opinion—focus on validating their response and keeping the discussion open. Keep responses short and natural (2-3 sentences).**Do not ask question.** `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 47,
        content: (name, botsProfile, donationAmount_first) =>
          `Keeping the money just feels like the most practical choice. Sometimes, you have to prioritize what makes the most sense for yourself.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 48,
        content: (name, botsProfile, donationAmount_first) =>
          `Giving is great when you can afford it, but we earned this money by completing the task. There’s no rule saying we have to give it away.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 49,
        content: (name, botsProfile, donationAmount_first) =>
          `It’s really inspiring to hear this discussion. Giving is a personal choice, and it’s great to see how much thought you’re putting into it. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 50,
        content: (name, botsProfile, donationAmount_first) =>
          `${name}, earlier you earned $3 from completing the task.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 51,
        content: (name, botsProfile, donationAmount_first) =>
          `Now, we’d like to ask—how much of your $3 would you like to donate to Save the Children?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 52,
        content: (name, botsProfile, donationAmount_first) =>
          `Please confirm your donation amount below.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5.0,
      },
      {
        id: 53,
        content: (name, botsProfile, donationAmount_first) => ``,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 4.0,
      },
    ],
  },
  {
    step: 12,
    messages: [
      {
        id: 54,
        content: (name, botsProfile, donationAmount_first) =>
          `Thank you for sharing that, ${name}! Before we wrap up, we have one final question.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 55,
        content: (name, botsProfile, donationAmount_first) =>
          `In addition to participant donations, the research team has allocated an extra $3—by default, this amount goes to Save the Children.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 56,
        content: (name, botsProfile, donationAmount_first) =>
          `However, you now have the option to take this $3 as a bonus, or choose to leave it for donation to further support children in need.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 57,
        content: (name, botsProfile, donationAmount_first) =>
          `Please confirm how you’d like to allocate the additional $3 below.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 58,
        content: (name, botsProfile, donationAmount_first) => ``,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.willingness,
        delay: 5,
      },
    ],
  },
  {
    step: 13,
    messages: [
      {
        id: 59,
        content: (name, botsProfile, donationAmount_first) =>
          `Thanks again for your thoughtful choices and generosity 😊, ${name}.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 60,
        content: (name, botsProfile, donationAmount_first) =>
          `That will be all for us today.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 61,
        content: (name, botsProfile, donationAmount_first) =>
          `${name}, please close this window, return to the survey and enter this Code: SIS`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Code,
        delay: 4.0,
      },
    ],
  },
];
